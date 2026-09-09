import { useCallback, useEffect, useRef, useState } from 'react';
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
  onApply: (progress: UserProgress[], stats: UserStats) => void;
}

type Mode = 'idle' | 'show' | 'scan';
type CameraState = 'off' | 'starting' | 'live' | 'unavailable';

/**
 * 解码前先把画面缩到长边这么大。
 *
 * 这不是可有可无的优化：jsQR 的开销跟像素数走，实测手机后置摄像头的
 * 1920×1080 一帧要 958ms —— 主线程会被整整堵住接近一秒，取景框卡成
 * 幻灯片、界面点不动、手机发烫。缩到 400×300 之后是 25ms。
 * 二维码在取景框里本来就占很大一块，缩到这个尺寸不影响识别。
 */
const DECODE_MAX_EDGE = 400;
/** 解码间隔。每帧都跑纯属浪费 —— 人举着手机对准的速度远没那么快。 */
const DECODE_INTERVAL_MS = 125;

/** 二维码画成 SVG。库只在真正要用的时候才加载，不进主包。 */
function QrImage({ text }: { text: string }) {
  const holder = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  // text 变了靠 key 重挂载来重置状态，所以这里不用在 effect 里先 setError(null)。
  useEffect(() => {
    let cancelled = false;
    import('qrcode-generator')
      .then(({ default: qrcode }) => {
        if (cancelled || !holder.current) return;
        const qr = qrcode(0, 'M'); // 0 = 自动挑最小够用的尺寸
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
        if (!cancelled) setError('二维码组件加载失败，请改用下面的文本码。');
      });
    return () => { cancelled = true; };
  }, [text]);

  if (error) {
    return <p className="py-6 text-center text-sm font-bold text-danger-accent">{error}</p>;
  }

  return (
    <div
      ref={holder}
      // 必须是纯白底 + 纯黑码。跟着主题变色的话，深色模式下就扫不出来了。
      className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl bg-white p-2 [&_svg]:block"
    />
  );
}

export function DeviceSync({ progress, stats, onApply }: DeviceSyncProps) {
  const [mode, setMode] = useState<Mode>('idle');
  const [code, setCode] = useState('');
  const [outgoing, setOutgoing] = useState<SyncSnapshot | null>(null);
  const [pasted, setPasted] = useState('');
  const [camera, setCamera] = useState<CameraState>('off');
  const [preview, setPreview] = useState<{ snapshot: SyncSnapshot; result: MergeResult } | null>(null);
  const [undoPoint, setUndoPoint] = useState<{ progress: UserProgress[]; stats: UserStats } | null>(null);
  const [message, setMessage] = useState<{ text: string; tone: 'error' | 'success' | 'info' } | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameRef = useRef<number | null>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  const stopCamera = useCallback(() => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }, []);

  // 离开这个界面一定要关摄像头，否则指示灯会一直亮着。
  useEffect(() => stopCamera, [stopCamera]);

  // 读到对方的码之后，把焦点交给确认卡片：键盘用户不用从页面顶上重新 Tab 一遍，
  // 读屏用户也会听到卡片的内容 —— 否则按下「读取」之后是彻底的无声。
  useEffect(() => {
    if (preview) confirmRef.current?.focus();
  }, [preview]);

  const resetToIdle = () => {
    stopCamera();
    setMode('idle');
    setCamera('off');
    setPreview(null);
    setPasted('');
  };

  const handleShow = async () => {
    setMessage(null);
    setPreview(null);
    try {
      flushPendingWrites();
      const snapshot = buildSnapshot(progress, stats);
      setCode(await encodeSyncCode(snapshot));
      setOutgoing(snapshot);
      setMode('show');
    } catch (error) {
      setMessage({ text: `生成失败：${(error as Error).message}`, tone: 'error' });
    }
  };

  const acceptCode = useCallback(async (text: string) => {
    try {
      const snapshot = await decodeSyncCode(text);
      // 先把合并算出来，卡片上就能写「将更新 N 道、新增 M 道」这样的实数，
      // 而不是含糊地保证"不会丢"。确认时直接复用这份结果。
      setPreview({ snapshot, result: mergeSnapshot(progress, stats, snapshot) });
      setMessage(null);
      stopCamera();
      setCamera('off');
      return true;
    } catch (error) {
      setMessage({ text: `读不出来：${(error as Error).message}`, tone: 'error' });
      return false;
    }
  }, [progress, stats, stopCamera]);

  const handleScan = async () => {
    setMessage(null);
    setPreview(null);
    setMode('scan');

    if (!navigator.mediaDevices?.getUserMedia) {
      setCamera('unavailable');
      return;
    }

    setCamera('starting');
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    } catch {
      setCamera('unavailable');
      return;
    }

    streamRef.current = stream;
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      try { await videoRef.current.play(); } catch { /* 自动播放被拦也不影响取帧 */ }
    }
    setCamera('live');

    const { default: jsQR } = await import('jsqr');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { willReadFrequently: true });
    let lastDecode = 0;

    const tick = (now: number) => {
      frameRef.current = null;
      const video = videoRef.current;
      if (!streamRef.current || !video || !context) return;

      if (video.readyState >= video.HAVE_CURRENT_DATA && now - lastDecode >= DECODE_INTERVAL_MS) {
        lastDecode = now;
        const longEdge = Math.max(video.videoWidth, video.videoHeight);
        if (longEdge > 0) {
          const scale = Math.min(1, DECODE_MAX_EDGE / longEdge);
          canvas.width = Math.max(1, Math.round(video.videoWidth * scale));
          canvas.height = Math.max(1, Math.round(video.videoHeight * scale));
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const image = context.getImageData(0, 0, canvas.width, canvas.height);
          const found = jsQR(image.data, image.width, image.height);
          if (found?.data) {
            void acceptCode(found.data);
            return;
          }
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
  };

  const handleMerge = () => {
    if (!preview) return;
    const { result } = preview;
    // 合并前留一个还原点。整件事是不可逆的，而人是会扫错码的。
    setUndoPoint({ progress, stats });
    onApply(result.progress, result.stats);
    resetToIdle();
    setMessage({
      text: result.updatedQuestions + result.newQuestions === 0
        ? '这台设备的进度已经不落后了，没有改动。'
        : `已合并：更新 ${result.updatedQuestions} 道，新增 ${result.newQuestions} 道。`,
      tone: 'success',
    });
  };

  const handleUndo = () => {
    if (!undoPoint) return;
    onApply(undoPoint.progress, undoPoint.stats);
    setUndoPoint(null);
    setMessage({ text: '已还原到合并之前。', tone: 'info' });
  };

  const showsCamera = mode === 'scan' && camera !== 'unavailable';

  return (
    <section className="space-y-4" aria-labelledby="device-sync">
      <div>
        <h2 id="device-sync" className="text-lg font-black text-ink">在两台设备之间同步</h2>
        <p className="mt-1 max-w-[70ch] text-sm font-semibold leading-relaxed text-muted">
          用二维码把进度从一台设备搬到另一台，<b className="text-ink">不经过任何服务器</b>。
          同步的是每道题的掌握状态和错题本，「今日做了多少题」这类当天统计不会跟着过来。
          同一道题以做过次数多的那一边为准，本机已经做得更多的题不会被改动。
        </p>
      </div>

      {mode === 'idle' && (
        <div className="space-y-2">
          {/* 「哪台点哪个」写在按钮外面。之前塞进按钮里当副标题，为了压层次用了
              opacity-80，实测在蓝底上只剩 3.63:1 —— 这个项目已经踩过一次
              「用透明度做层次」的坑，不该再踩第二次。 */}
          <p className="text-sm font-semibold text-muted">
            在<b className="text-ink">要传出去</b>的设备上点左边，在<b className="text-ink">要接收</b>的设备上点右边。
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Pressable variant="secondary" size="lg" block onClick={handleShow} leading={<Icon name="upload" size={21} />}>
              显示本机二维码
            </Pressable>
            <Pressable variant="neutral" size="lg" block onClick={handleScan} leading={<Icon name="download" size={21} />}>
              扫描另一台的码
            </Pressable>
          </div>
        </div>
      )}

      {mode === 'show' && (
        <div className="space-y-3 rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          <p className="text-sm font-bold text-ink">
            在另一台设备上打开这个页面，选「扫描另一台的码」，对准下面的图。
          </p>
          {outgoing && (
            <p className="text-xs font-semibold text-muted">本机快照：{describeSnapshot(outgoing)}</p>
          )}
          <QrImage key={code} text={code} />
          <details className="rounded-2xl bg-surface-soft px-3">
            <summary className="flex min-h-12 cursor-pointer list-none items-center text-sm font-extrabold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              扫不了？复制文本码
            </summary>
            <textarea
              readOnly
              value={code}
              aria-label="同步文本码"
              onFocus={(event) => event.currentTarget.select()}
              className="mb-3 h-24 w-full resize-none rounded-xl border-2 border-line bg-surface p-2 font-mono text-[0.7rem] leading-snug text-muted"
            />
          </details>
          <Pressable variant="neutral" size="md" block onClick={resetToIdle}>完成</Pressable>
        </div>
      )}

      {mode === 'scan' && !preview && (
        <div className="space-y-3 rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          {showsCamera ? (
            <>
              <p className="text-sm font-bold text-ink">把另一台设备上的二维码对准摄像头。</p>
              <video
                ref={videoRef}
                playsInline
                muted
                // 取景框是给眼睛看的，对读屏用户没有意义 —— 信息交给上面那句说明。
                aria-hidden="true"
                className="mx-auto aspect-square w-full max-w-[17rem] rounded-2xl bg-surface-soft object-cover"
              />
              <p aria-live="polite" className="text-center text-xs font-bold text-muted">
                {camera === 'starting' ? '正在打开摄像头…' : '正在寻找二维码…'}
              </p>
            </>
          ) : (
            <p className="rounded-2xl bg-warning-soft px-4 py-3 text-sm font-bold text-warning-ink">
              这台设备用不了摄像头（没有摄像头，或者没给权限）。用下面的文本码一样能同步。
            </p>
          )}

          <div className="space-y-2">
            <label htmlFor="sync-paste" className="block text-sm font-extrabold text-ink">
              {showsCamera ? '或者粘贴文本码' : '粘贴文本码'}
            </label>
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
          <Pressable variant="neutral" size="md" block onClick={resetToIdle}>取消</Pressable>
        </div>
      )}

      {preview && (
        <div
          ref={confirmRef}
          tabIndex={-1}
          role="group"
          aria-label={`读到了另一台设备的进度：${describeSnapshot(preview.snapshot)}。合并会更新 ${preview.result.updatedQuestions} 道题，新增 ${preview.result.newQuestions} 道题。`}
          className="space-y-3 rounded-[1.25rem] border-2 border-brand bg-brand-soft p-4 shadow-[0_3px_0_var(--ui-brand-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ui-focus)]"
        >
          <p className="text-sm font-extrabold text-brand-soft-ink">读到了另一台设备的进度</p>
          <p className="text-sm font-semibold text-brand-soft-ink">{describeSnapshot(preview.snapshot)}</p>
          <dl className="grid grid-cols-2 gap-2">
            <div className="rounded-xl bg-surface/70 px-3 py-2">
              <dt className="text-xs font-bold text-brand-soft-ink">将更新</dt>
              <dd className="text-xl font-black text-brand-soft-ink">{preview.result.updatedQuestions} 道</dd>
            </div>
            <div className="rounded-xl bg-surface/70 px-3 py-2">
              <dt className="text-xs font-bold text-brand-soft-ink">将新增</dt>
              <dd className="text-xl font-black text-brand-soft-ink">{preview.result.newQuestions} 道</dd>
            </div>
          </dl>
          <p className="text-xs font-semibold leading-relaxed text-brand-soft-ink">
            合并只会让进度往前走，而且可以撤销。
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            <Pressable variant="primary" size="md" block onClick={handleMerge}>合并进来</Pressable>
            <Pressable variant="neutral" size="md" block onClick={resetToIdle}>先不合并</Pressable>
          </div>
        </div>
      )}

      <div aria-live="polite" className="space-y-2 text-center text-sm font-bold">
        {message && (
          <p className={
            message.tone === 'error' ? 'text-danger-accent'
              : message.tone === 'success' ? 'text-brand-soft-ink' : 'text-muted'
          }>
            {message.text}
          </p>
        )}
        {undoPoint && mode === 'idle' && (
          <Pressable variant="neutral" size="sm" onClick={handleUndo} leading={<Icon name="comeback" size={17} />}>
            撤销这次合并
          </Pressable>
        )}
      </div>
    </section>
  );
}
