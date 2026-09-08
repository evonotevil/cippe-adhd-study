import { useRef, useState } from 'react';
import type {
  PracticeSession,
  RandomPracticeSettings,
  StudySettings,
  UserProgress,
  UserStats,
} from '../types';
import { useDataTransfer } from '../hooks/useDataTransfer';
import { QUESTION_COUNT } from '../data/questionCatalog';
import { useSound } from '../hooks/useSound';
import { flushPendingWrites } from '../utils/persistentStorage';
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

interface ImportData {
  progress: UserProgress[];
  stats: UserStats;
  settings: StudySettings;
  activeSession?: PracticeSession | null;
  randomSettings?: RandomPracticeSettings | null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isIntegerInRange(value: unknown, min: number, max: number): value is number {
  return typeof value === 'number'
    && Number.isInteger(value)
    && value >= min
    && value <= max;
}

function isValidDate(value: unknown, allowEmpty = false): value is string {
  return typeof value === 'string'
    && ((allowEmpty && value === '') || !Number.isNaN(Date.parse(value)));
}

function isRandomSettings(value: unknown): value is RandomPracticeSettings {
  return isRecord(value)
    && isIntegerInRange(value.count, 1, QUESTION_COUNT)
    && (value.topic === null || typeof value.topic === 'string')
    && ['study', 'exam'].includes(String(value.mode));
}

function isPracticeSession(value: unknown): value is PracticeSession {
  if (!isRecord(value)) return false;

  const validItems = Array.isArray(value.items) && value.items.every((item) =>
    isRecord(item)
    && typeof item.key === 'string'
    && isIntegerInRange(item.questionId, 1, QUESTION_COUNT)
    && isIntegerInRange(item.skippedCount, 0, Number.MAX_SAFE_INTEGER)
    && (item.selectedAnswer === undefined || ['A', 'B', 'C', 'D'].includes(String(item.selectedAnswer)))
    && (item.submitted === undefined || typeof item.submitted === 'boolean')
    && (item.flagged === undefined || typeof item.flagged === 'boolean'));
  const validAttempts = Array.isArray(value.attempts) && value.attempts.every((attempt) =>
    isRecord(attempt)
    && typeof attempt.itemKey === 'string'
    && isIntegerInRange(attempt.questionId, 1, QUESTION_COUNT)
    && ['A', 'B', 'C', 'D'].includes(String(attempt.answer))
    && typeof attempt.isCorrect === 'boolean'
    && isIntegerInRange(attempt.timeSpent, 0, Number.MAX_SAFE_INTEGER)
    && isValidDate(attempt.timestamp));
  const itemCount = Array.isArray(value.items) ? value.items.length : 0;

  return typeof value.id === 'string'
    && ['all', 'mistakes', 'topic', 'random'].includes(String(value.kind))
    && ['study', 'exam'].includes(String(value.mode))
    && ['new', 'reinforce'].includes(String(value.phase))
    && (value.topic === null || typeof value.topic === 'string')
    && (value.requestedCount === null || isIntegerInRange(value.requestedCount, 1, QUESTION_COUNT))
    && isIntegerInRange(value.currentIndex, 0, Math.max(0, itemCount - 1))
    && isIntegerInRange(value.elapsedSeconds, 0, Number.MAX_SAFE_INTEGER)
    && isIntegerInRange(value.round, 0, Number.MAX_SAFE_INTEGER)
    && isValidDate(value.createdAt)
    && validItems
    && validAttempts;
}

function isImportData(value: unknown): value is ImportData {
  if (!isRecord(value) || !Array.isArray(value.progress) || !isRecord(value.stats) || !isRecord(value.settings)) {
    return false;
  }

  const validProgress = value.progress.every((item) =>
    isRecord(item)
    && isIntegerInRange(item.questionId, 1, QUESTION_COUNT)
    && typeof item.isCorrect === 'boolean'
    && isValidDate(item.timestamp)
    && isIntegerInRange(item.timeSpent, 0, Number.MAX_SAFE_INTEGER));
  const validStats = isIntegerInRange(value.stats.totalAnswered, 0, Number.MAX_SAFE_INTEGER)
    && isIntegerInRange(value.stats.correctCount, 0, value.stats.totalAnswered)
    && isIntegerInRange(value.stats.streakDays, 0, Number.MAX_SAFE_INTEGER)
    && isValidDate(value.stats.lastStudyDate, true)
    && isIntegerInRange(value.stats.tomatoSessions, 0, Number.MAX_SAFE_INTEGER)
    && Array.isArray(value.stats.achievements)
    && value.stats.achievements.every((item) => typeof item === 'string');
  const validSettings = isIntegerInRange(value.settings.tomatoDuration, 5, 60)
    && value.settings.tomatoDuration % 5 === 0
    && isIntegerInRange(value.settings.breakDuration, 1, 30)
    && typeof value.settings.soundEnabled === 'boolean'
    && ['light', 'dark', 'eye-care'].includes(String(value.settings.theme))
    && ['small', 'medium', 'large'].includes(String(value.settings.fontSize));
  const validActiveSession = value.activeSession === undefined
    || value.activeSession === null
    || isPracticeSession(value.activeSession);
  const validRandomSettings = value.randomSettings === undefined
    || value.randomSettings === null
    || isRandomSettings(value.randomSettings);

  return validProgress && validStats && validSettings && validActiveSession && validRandomSettings;
}

function readProgressCount(): number {
  try {
    const raw = JSON.parse(localStorage.getItem('cippe-progress') || '[]');
    return Array.isArray(raw) ? raw.length : 0;
  } catch {
    return 0;
  }
}

function replaceLocalData(entries: Array<[string, unknown]>): void {
  const previousValues = entries.map(([key]) => [key, localStorage.getItem(key)] as const);
  try {
    entries.forEach(([key, value]) => localStorage.setItem(key, JSON.stringify(value)));
  } catch (error) {
    previousValues.forEach(([key, value]) => {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    });
    throw error;
  }
}

interface DurationFieldProps {
  label: string;
  value: number;
  presets: number[];
  tone: 'danger' | 'brand';
  onChange: (value: number) => void;
}

const durationTone = {
  danger: {
    active: 'border-danger-shadow bg-danger-soft text-danger-ink shadow-[0_3px_0_var(--ui-danger-shadow)]',
  },
  brand: {
    active: 'border-brand-shadow bg-brand-soft text-brand-soft-ink shadow-[0_3px_0_var(--ui-brand-shadow)]',
  },
};

/**
 * 预设按钮就是全部选项，没有滑块 —— 手机上 30 个档位挤在一条轨道里根本点不准。
 * 老数据里可能存着预设之外的值（早期版本用滑块选的），那就把它作为额外一档
 * 显示出来，免得界面上一个选中项都没有。
 */
function DurationField({ label, value, presets, tone, onChange }: DurationFieldProps) {
  const options = presets.includes(value) ? presets : [...presets, value].sort((a, b) => a - b);

  return (
    <fieldset className="rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_3px_0_var(--ui-line-strong)]">
      <legend className="px-1 text-sm font-extrabold text-ink">{label}</legend>
      <div className="mt-1 grid grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            onClick={() => onChange(option)}
            className={`min-h-12 rounded-xl border-2 text-sm font-extrabold tabular-nums transition-colors ${
              value === option
                ? durationTone[tone].active
                : 'border-line bg-surface-soft text-muted hover:text-ink'
            }`}
          >
            {option} 分钟
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function Settings({ settings, onUpdate }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const { exportToFile, importFromFile } = useDataTransfer();
  const { playCorrect } = useSound(localSettings.soundEnabled);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importMessage, setImportMessage] = useState<{ text: string; tone: 'error' | 'success' | 'info' } | null>(null);

  const handleChange = <K extends keyof StudySettings>(key: K, value: StudySettings[K]) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    onUpdate(updated);
  };

  const handleExport = () => {
    // Reads localStorage directly, so any queued write has to land first.
    flushPendingWrites();
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

    setImportMessage(null);
    try {
      const data: unknown = await importFromFile(file);
      if (!isImportData(data)) {
        setImportMessage({ text: '文件内容不完整或格式不受支持。请重新选择由本应用导出的 JSON 备份。', tone: 'error' });
        return;
      }

      // Replacing the answer log is the only irreversible action in the app, and
      // the export button sits right next to this one. Say what will be lost.
      flushPendingWrites();
      const currentCount = readProgressCount();
      const incomingCount = data.progress.length;
      const confirmed = window.confirm(
        `导入会替换这台设备上的全部学习数据，且无法撤销。\n\n`
        + `当前：${currentCount} 条答题记录\n`
        + `导入：${incomingCount} 条答题记录\n\n`
        + `确定继续吗？`,
      );
      if (!confirmed) {
        setImportMessage({ text: '已取消导入，现有数据没有任何改动。', tone: 'info' });
        return;
      }

      const entries: Array<[string, unknown]> = [
        ['cippe-progress', data.progress],
        ['cippe-stats', data.stats],
        ['cippe-settings', data.settings],
      ];
      if (data.activeSession !== undefined) {
        entries.push(['cippe-active-session', data.activeSession]);
      }
      if (data.randomSettings !== undefined) {
        entries.push(['cippe-random-settings', data.randomSettings]);
      }
      replaceLocalData(entries);
      onUpdate(data.settings);
      // Let the confirmation land before the reload wipes the screen.
      setImportMessage({ text: `导入成功，已恢复 ${incomingCount} 条答题记录。正在刷新…`, tone: 'success' });
      window.setTimeout(() => window.location.reload(), 1200);
    } catch {
      setImportMessage({ text: '导入失败，现有学习数据没有被替换。请检查文件后重试。', tone: 'error' });
    } finally {
      event.target.value = '';
    }
  };

  return (
    <div className="space-y-7">
      <header>
        <p className="text-sm font-extrabold text-info-accent">按你的节奏学习</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">设置</h1>
      </header>

      <section className="space-y-5" aria-labelledby="focus-settings">
        <h2 id="focus-settings" className="text-lg font-black text-ink">专注节奏</h2>
        <DurationField
          label="番茄钟时长"
          value={localSettings.tomatoDuration}
          presets={[15, 25, 45]}
          tone="danger"
          onChange={(value) => handleChange('tomatoDuration', value)}
        />

        <DurationField
          label="休息时长"
          value={localSettings.breakDuration}
          presets={[5, 10, 15]}
          tone="brand"
          onChange={(value) => handleChange('breakDuration', value)}
        />
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
              className={`relative h-11 w-16 shrink-0 rounded-full border-2 transition-colors ${
                localSettings.soundEnabled
                  ? 'border-brand-shadow bg-brand'
                  : 'border-line-strong bg-surface-soft'
              }`}
            >
              <span
                className={`absolute left-1 top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-surface shadow-sm transition-transform ${
                  localSettings.soundEnabled ? 'translate-x-[28px]' : 'translate-x-0'
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
          <p className="mt-1 max-w-[70ch] text-sm font-semibold leading-relaxed text-muted">
            数据优先保存在当前设备。导出文件包含学习进度、错题状态、设置和未完成练习。
            导入会替换当前设备上的这些数据。
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
          {importMessage && (
            <p
              className={
                importMessage.tone === 'error'
                  ? 'text-danger-accent'
                  : importMessage.tone === 'success'
                    ? 'text-brand-soft-ink'
                    : 'text-muted'
              }
            >
              {importMessage.text}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
