import { useEffect, useRef, useState } from 'react';
import type { UserProgress, UserStats } from '../types';
import {
  buildSnapshot, decodeSyncCode, describeSnapshot, encodeSyncCode, mergeSnapshot,
  type MergeResult, type SyncSnapshot,
} from '../utils/syncCode';
import { flushPendingWrites } from '../utils/persistentStorage';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';

interface DeviceSyncProps {
  progress: UserProgress[];
  stats: UserStats;
  onMerged: (result: MergeResult) => void;
}

type Mode = 'idle' | 'show' | 'scan';

/** 二维码画成一张表格似的方块图。库只在真正要用的时候才加载，不进主包。 */
function QrCanvas({ text }: { text: string }) {
  const holder = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  // text 变了就靠 key 重挂载来重置状态，所以这里不需要在 effect 里先 setError(null)。
  useEffect(() => {
    let cancelled = false;
    import('qrcode-generator')
      .then(({ default: qrcode }) => {
        if (cancelled || !holder.current) return;
        // typeNumber 0 = 让库自己挑最小够用的尺寸；'M' 是纠错等级。
        const qr = qrcode(0, 'M');
        qr.addData(text, 'Byte');
        qr.make();
        holder.current.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 4, scalable: true });
        const svg = holder.current.querySelector('svg');
        if (svg) {
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          svg.setAttribute('role', 'img');
          svg.setAttribute('aria-label', '学习进度同步二维码');
        }
      })
      .catch(() => {
        if (!cancelled) setError('二维码组件加载失败，请用下面的文本码。');
      });
    return () => { cancelled = true; };
  }, [text]);

  if (error) {
    return <p className="py-6 text-center text-sm font-bold text-danger-accent">{error}</p>;
  }

  return (
    <div
      ref={holder}
      // 二维码必须是纯白底 + 纯黑码，跟着主题走会扫不出来。
      className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl bg-white p-2 [&_svg]:block"
    />
  );
}

export function DeviceSync({ progress, stats, onMerged }: DeviceSyncProps) {
  const [mode, setMode] = useState<Mode>('idle');
  const [code, setCode] = useState('');
  const [pasted, setPasted] = useState('');
  const [incoming, setIncoming] = useState<SyncSnapshot | null>(null);
  const [message, setMessage] = useState<{ text: string; tone: 'error' | 'success' | 'info' } | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  // 离开这个界面时一定要把摄像头关掉，否则指示灯会一直亮着。
  useEffect(() => stopCamera, []);

  const handleShow = async () => {
    setMessage(null);
    setIncoming(null);
    try {
      flushPendingWrites();
      const text = await encodeSyncCode(buildSnapshot(progress, stats));
      setCode(text);
      setMode('show');
    } catch (error) {
      setMessage({ text: `生成失败：${(error as Error).message}`, tone: 'error' });
    }
  };

  const acceptCode = async (text: string) => {
    try {
      const snapshot = await decodeSyncCode(text);
      setIncoming(snapshot);
      setMessage(null);
      stopCamera();
      return true;
    } catch (error) {
      setMessage({ text: `读不出来：${(error as Error).message}`, tone: 'error' });
      return false;
    }
  };

  const handleScan = async () => {
    setMessage(null);
    setIncoming(null);
    setMode('scan');

    if (!navigator.mediaDevices?.getUserMedia) {
      setMessage({ text: '这个浏览器不能用摄像头，请用下面的文本码。', tone: 'info' });
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      const { default: jsQR } = await import('jsqr');
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d', { willReadFrequently: true });

      const tick = async () => {
        const video = videoRef.current;
        if (!streamRef.current || !video || !context) return;
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const image = context.getImageData(0, 0, canvas.width, canvas.height);
          const found = jsQR(image.data, image.width, image.height);
          if (found?.data) {
            if (await acceptCode(found.data)) return;
          }
        }
        if (streamRef.current) requestAnimationFrame(() => { void tick(); });
      };
      void tick();
    } catch {
      setMessage({ text: '打不开摄像头（可能没给权限）。可以改用下面的文本码。', tone: 'info' });
    }
  };

  const handleMerge = () => {
    if (!incoming) return;
    const result = mergeSnapshot(progress, stats, incoming);
    onMerged(result);
    setIncoming(null);
    setMode('idle');
    setPasted('');
    setMessage({
      text: `已合并：更新 ${result.updatedQuestions} 道，新增 ${result.newQuestions} 道。`,
      tone: 'success',
    });
  };

  const handleCancel = () => {
    stopCamera();
    setMode('idle');
    setIncoming(null);
    setPasted('');
  };

  return (
    <section className="space-y-4" aria-labelledby="device-sync">
      <div>
        <h2 id="device-sync" className="text-lg font-black text-ink">在两台设备之间同步</h2>
        <p className="mt-1 max-w-[70ch] text-sm font-semibold leading-relaxed text-muted">
          用二维码把进度从一台设备搬到另一台，<b className="text-ink">不经过任何服务器</b>。
          同步的是每道题的掌握状态和错题本，「今日做了多少题」这类当天统计不会跟着过来。
          同一道题以做过次数多的那一边为准。
        </p>
      </div>

      {mode === 'idle' && (
        <div className="grid gap-3 sm:grid-cols-2">
          <Pressable variant="secondary" size="lg" block onClick={handleShow} leading={<Icon name="upload" size={21} />}>
            显示本机二维码
          </Pressable>
          <Pressable variant="neutral" size="lg" block onClick={handleScan} leading={<Icon name="download" size={21} />}>
            扫描另一台的码
          </Pressable>
        </div>
      )}

      {mode === 'show' && (
        <div className="space-y-3 rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          <p className="text-sm font-bold text-ink">用另一台设备打开这个页面，选「扫描另一台的码」，对准下面的图。</p>
          <QrCanvas key={code} text={code} />
          <details className="rounded-2xl bg-surface-soft p-3">
            <summary className="cursor-pointer text-sm font-extrabold text-ink">扫不了？复制文本码</summary>
            <textarea
              readOnly
              value={code}
              aria-label="同步文本码"
              onFocus={(event) => event.currentTarget.select()}
              className="mt-2 h-24 w-full resize-none rounded-xl border-2 border-line bg-surface p-2 font-mono text-[0.7rem] leading-snug text-muted"
            />
          </details>
          <Pressable variant="neutral" size="md" block onClick={handleCancel}>完成</Pressable>
        </div>
      )}

      {mode === 'scan' && !incoming && (
        <div className="space-y-3 rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          <p className="text-sm font-bold text-ink">把另一台设备上的二维码对准摄像头。</p>
          <video
            ref={videoRef}
            playsInline
            muted
            aria-label="扫码取景框"
            className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl bg-surface-soft object-cover"
          />
          <div className="space-y-2">
            <label htmlFor="sync-paste" className="block text-sm font-extrabold text-ink">或者粘贴文本码</label>
            <textarea
              id="sync-paste"
              value={pasted}
              onChange={(event) => setPasted(event.target.value)}
              placeholder="把另一台设备上复制的那串字符粘到这里"
              className="h-24 w-full resize-none rounded-xl border-2 border-line bg-surface p-2 font-mono text-[0.7rem] leading-snug text-ink"
            />
            <Pressable
              variant="secondary"
              size="md"
              block
              disabled={pasted.trim().length === 0}
              onClick={() => { void acceptCode(pasted); }}
            >
              读取文本码
            </Pressable>
          </div>
          <Pressable variant="neutral" size="md" block onClick={handleCancel}>取消</Pressable>
        </div>
      )}

      {incoming && (
        <div className="space-y-3 rounded-[1.25rem] border-2 border-brand bg-brand-soft p-4 shadow-[0_3px_0_var(--ui-brand-shadow)]">
          <p className="text-sm font-extrabold text-brand-soft-ink">读到了另一台设备的进度</p>
          <p className="text-sm font-semibold text-brand-soft-ink">{describeSnapshot(incoming)}</p>
          <p className="text-xs font-semibold leading-relaxed text-brand-soft-ink">
            合并只会让进度往前走：本机已经做得更多的题不会被改动。
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Pressable variant="primary" size="md" block onClick={handleMerge}>合并进来</Pressable>
            <Pressable variant="neutral" size="md" block onClick={handleCancel}>先不合并</Pressable>
          </div>
        </div>
      )}

      <div aria-live="polite" className="text-center text-sm font-bold">
        {message && (
          <p className={
            message.tone === 'error' ? 'text-danger-accent'
              : message.tone === 'success' ? 'text-brand-soft-ink' : 'text-muted'
          }>
            {message.text}
          </p>
        )}
      </div>
    </section>
  );
}
