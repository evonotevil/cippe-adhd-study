import { useRef, useState } from 'react';
import type { StudySettings } from '../types';
import { useCloudSync } from '../hooks/useCloudSync';
import { useSound } from '../hooks/useSound';
import { Icon, type IconName } from './ui/Icons';
import { Pressable } from './ui/Pressable';

interface SettingsProps {
  settings: StudySettings;
  onUpdate: (settings: StudySettings) => void;
}

const themeOptions: Array<{ value: StudySettings['theme']; label: string; icon: IconName }> = [
  { value: 'light', label: '明亮', icon: 'sun' },
  { value: 'eye-care', label: '护眼', icon: 'leaf' },
  { value: 'dark', label: '深色', icon: 'moon' },
];

export function Settings({ settings, onUpdate }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const { syncStatus, lastSyncTime, exportToFile, importFromFile } = useCloudSync();
  const { playCorrect } = useSound(localSettings.soundEnabled);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = <K extends keyof StudySettings>(key: K, value: StudySettings[K]) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    onUpdate(updated);
  };

  const handleExport = () => {
    const data = {
      version: 2,
      progress: JSON.parse(localStorage.getItem('cippe-progress') || '[]'),
      stats: JSON.parse(localStorage.getItem('cippe-stats') || '{}'),
      settings: localSettings,
      activeSession: JSON.parse(localStorage.getItem('cippe-active-session') || 'null'),
      randomSettings: JSON.parse(localStorage.getItem('cippe-random-settings') || 'null'),
      lastSync: new Date().toISOString(),
    };
    exportToFile(data);
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const data = await importFromFile(file);
    if (data) {
      if (data.progress) localStorage.setItem('cippe-progress', JSON.stringify(data.progress));
      if (data.stats) localStorage.setItem('cippe-stats', JSON.stringify(data.stats));
      if (data.settings) onUpdate(data.settings);
      if (data.activeSession !== undefined) {
        localStorage.setItem('cippe-active-session', JSON.stringify(data.activeSession));
      }
      if (data.randomSettings) {
        localStorage.setItem('cippe-random-settings', JSON.stringify(data.randomSettings));
      }
      window.location.reload();
    }
  };

  return (
    <div className="space-y-7">
      <header>
        <p className="text-sm font-extrabold text-info">按你的节奏学习</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">设置</h1>
      </header>

      <section className="space-y-5" aria-labelledby="focus-settings">
        <h2 id="focus-settings" className="text-lg font-black text-ink">专注节奏</h2>
        <label className="block rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          <span className="flex items-center justify-between gap-3 text-sm font-extrabold text-ink">
            <span>番茄钟时长</span>
            <span className="rounded-lg bg-danger-soft px-2.5 py-1 text-danger-ink">{localSettings.tomatoDuration} 分钟</span>
          </span>
          <input
            type="range"
            min="5"
            max="60"
            step="5"
            value={localSettings.tomatoDuration}
            onChange={(event) => handleChange('tomatoDuration', Number(event.target.value))}
            className="mt-4 h-2 w-full cursor-pointer accent-[var(--ui-danger)]"
          />
        </label>

        <label className="block rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
          <span className="flex items-center justify-between gap-3 text-sm font-extrabold text-ink">
            <span>休息时长</span>
            <span className="rounded-lg bg-brand-soft px-2.5 py-1 text-brand-soft-ink">{localSettings.breakDuration} 分钟</span>
          </span>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={localSettings.breakDuration}
            onChange={(event) => handleChange('breakDuration', Number(event.target.value))}
            className="mt-4 h-2 w-full cursor-pointer accent-[var(--ui-brand-strong)]"
          />
        </label>
      </section>

      <div className="h-0.5 bg-line" aria-hidden="true" />

      <section className="space-y-4" aria-labelledby="display-settings">
        <h2 id="display-settings" className="text-lg font-black text-ink">显示与反馈</h2>

        <div className="flex min-h-16 items-center justify-between gap-4 rounded-[1.25rem] border-2 border-line bg-surface px-4 py-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-info-soft text-info-ink">
              <Icon name={localSettings.soundEnabled ? 'volume' : 'volume-off'} size={21} />
            </span>
            <div>
              <p className="font-extrabold text-ink">答题音效</p>
              <p className="text-xs font-semibold text-muted">正确与错误时提供声音反馈</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Pressable
              variant="ghost"
              size="sm"
              disabled={!localSettings.soundEnabled}
              onClick={() => void playCorrect(3)}
              aria-label="试听答题音效"
              className="px-2.5"
            >
              试听
            </Pressable>
            <button
              type="button"
              role="switch"
              aria-checked={localSettings.soundEnabled}
              onClick={() => handleChange('soundEnabled', !localSettings.soundEnabled)}
              className={`relative h-8 w-14 shrink-0 rounded-full border-2 transition-colors ${
                localSettings.soundEnabled
                  ? 'border-brand-shadow bg-brand'
                  : 'border-line-strong bg-surface-soft'
              }`}
            >
              <span
                className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-surface shadow-sm transition-transform ${
                  localSettings.soundEnabled ? 'translate-x-[28px]' : 'translate-x-[4px]'
                }`}
              />
              <span className="sr-only">{localSettings.soundEnabled ? '关闭音效' : '开启音效'}</span>
            </button>
          </div>
        </div>

        <fieldset className="space-y-3 border-0 p-0">
          <legend className="text-sm font-extrabold text-ink">界面主题</legend>
          <div className="grid grid-cols-3 gap-2">
            {themeOptions.map((option) => (
              <Pressable
                key={option.value}
                variant={localSettings.theme === option.value ? 'primary' : 'neutral'}
                size="sm"
                aria-pressed={localSettings.theme === option.value}
                onClick={() => handleChange('theme', option.value)}
                leading={<Icon name={option.icon} size={18} />}
                className="px-2"
              >
                {option.label}
              </Pressable>
            ))}
          </div>
        </fieldset>

        <fieldset className="space-y-3 border-0 p-0">
          <legend className="text-sm font-extrabold text-ink">字体大小</legend>
          <div className="grid grid-cols-3 gap-2">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <Pressable
                key={size}
                variant={localSettings.fontSize === size ? 'secondary' : 'neutral'}
                size="sm"
                aria-pressed={localSettings.fontSize === size}
                onClick={() => handleChange('fontSize', size)}
              >
                {size === 'small' ? '小' : size === 'medium' ? '中' : '大'}
              </Pressable>
            ))}
          </div>
        </fieldset>
      </section>

      <div className="h-0.5 bg-line" aria-hidden="true" />

      <section className="space-y-4" aria-labelledby="data-settings">
        <div>
          <h2 id="data-settings" className="text-lg font-black text-ink">学习数据</h2>
          <p className="mt-1 text-sm font-semibold leading-relaxed text-muted">
            导出文件包含学习进度、错题状态、设置和未完成练习，可在另一台设备恢复。
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Pressable
            variant="secondary"
            size="lg"
            block
            onClick={handleExport}
            leading={<Icon name="download" size={21} />}
          >
            导出学习数据
          </Pressable>
          <Pressable
            variant="neutral"
            size="lg"
            block
            onClick={() => fileInputRef.current?.click()}
            leading={<Icon name="upload" size={21} />}
          >
            导入学习数据
          </Pressable>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleImport}
            className="hidden"
          />
        </div>

        <div aria-live="polite" className="text-center text-sm font-bold">
          {lastSyncTime && <p className="text-muted">上次同步：{lastSyncTime}</p>}
          {syncStatus === 'syncing' && <p className="text-info">正在读取数据…</p>}
          {syncStatus === 'success' && <p className="text-brand-strong">数据已处理</p>}
          {syncStatus === 'error' && <p className="text-danger">导入失败，请检查文件后重试</p>}
        </div>
      </section>
    </div>
  );
}
