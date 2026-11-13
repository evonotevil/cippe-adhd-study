import { useEffect, useRef, useState } from 'react';
import type {
  PracticeSession,
  RandomPracticeSettings,
  StudySettings,
  UserProgress,
  UserStats,
} from '../types';
import { useDataTransfer } from '../hooks/useDataTransfer';
import { QUESTION_COUNT } from '../data/questionCatalog';
import { STUDY_DAYS } from '../data/studyPlan';
import { useSound } from '../hooks/useSound';
import { ACTIVE_SESSION_STORAGE_KEY, flushPendingWrites } from '../utils/persistentStorage';
import { DeviceSync } from './DeviceSync';
import { Chip } from './ui/Chip';
import { Pressable } from './ui/Pressable';
import { ConfirmationDialog } from './ui/ConfirmationDialog';
import { WebStateCard } from './ui/WebStateCard';
import soundOff from './assets/v2-utility/sound-off.svg';
import soundOn from './assets/v2-utility/sound-on.svg';

export type SettingsSection = 'focus' | 'display' | 'data';

interface SettingsProps {
  initialSection?: SettingsSection;
  onBack?: () => void;
  settings: StudySettings;
  onUpdate: (settings: StudySettings) => void;
  progress: UserProgress[];
  stats: UserStats;
  onApplySynced: (progress: UserProgress[], stats: UserStats) => void;
}

const themeOptions: Array<{ value: StudySettings['theme']; label: string }> = [
  { value: 'light', label: '明亮' },
  { value: 'eye-care', label: '护眼' },
  { value: 'dark', label: '深色' },
];

const sizeOptions: Array<{ value: StudySettings['fontSize']; label: string }> = [
  { value: 'small', label: '较小' },
  { value: 'medium', label: '标准' },
  { value: 'large', label: '大' },
];


interface ImportData {
  progress: UserProgress[];
  stats: UserStats;
  settings: StudySettings;
  activeSession?: PracticeSession | null;
  lastResult?: PracticeSession | null;
  randomSettings?: RandomPracticeSettings | null;
  completedStudyDays?: number[];
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
    && (value.studyDay === undefined || isIntegerInRange(value.studyDay, 1, STUDY_DAYS.length))
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
  const validLastResult = value.lastResult === undefined || value.lastResult === null || isPracticeSession(value.lastResult);
  const validRandomSettings = value.randomSettings === undefined
    || value.randomSettings === null
    || isRandomSettings(value.randomSettings);

  const validStudyDays = value.completedStudyDays === undefined
    || (Array.isArray(value.completedStudyDays)
      && value.completedStudyDays.every((day) => isIntegerInRange(day, 1, STUDY_DAYS.length)));
  return validProgress && validStats && validSettings && validActiveSession && validLastResult && validRandomSettings && validStudyDays;
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
  onChange: (value: number) => void;
}

/**
 * 预设按钮就是全部选项，没有滑块 —— 手机上 30 个档位挤在一条轨道里根本点不准。
 * 老数据里可能存着预设之外的值（早期版本用滑块选的），那就把它作为额外一档
 * 显示出来，免得界面上一个选中项都没有。
 */
function DurationField({ label, value, presets, onChange }: DurationFieldProps) {
  const options = presets.includes(value) ? presets : [...presets, value].sort((a, b) => a - b);

  return (
    <fieldset className="min-w-0 border-0 p-0">
      <legend className="mb-5 text-xs font-medium leading-[18px] text-muted">{label}</legend>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <Chip key={option} aria-pressed={value === option} onClick={() => onChange(option)}>
            {option} 分钟
          </Chip>
        ))}
      </div>
    </fieldset>
  );
}

export function Settings({ settings, onUpdate, progress, stats, onApplySynced, initialSection }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const { exportToFile, importFromFile } = useDataTransfer();
  const { playCorrect } = useSound(localSettings.soundEnabled);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [pendingImport, setPendingImport] = useState<ImportData | null>(null);
  const [importMessage, setImportMessage] = useState<{ text: string; tone: 'error' | 'success' | 'info' } | null>(null);

  const focusSection = useRef<HTMLElement>(null);
  const displaySection = useRef<HTMLElement>(null);
  const dataSection = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!initialSection) return;
    const target = { focus: focusSection, display: displaySection, data: dataSection }[initialSection].current;
    const frame = requestAnimationFrame(() => {
      target?.scrollIntoView({ block: 'start' });
      target?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [initialSection]);

  const handleChange = <K extends keyof StudySettings>(key: K, value: StudySettings[K]) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    onUpdate(updated);
  };

  const handleExport = () => {
    // Reads localStorage directly, so any queued write has to land first.
    flushPendingWrites();
    const data = {
      version: 4,
      progress: JSON.parse(localStorage.getItem('cippe-progress') || '[]'),
      stats: JSON.parse(localStorage.getItem('cippe-stats') || '{}'),
      settings: localSettings,
      activeSession: JSON.parse(localStorage.getItem(ACTIVE_SESSION_STORAGE_KEY) || 'null'),
      lastResult: JSON.parse(localStorage.getItem('cippe-last-result') || 'null'),
      randomSettings: JSON.parse(localStorage.getItem('cippe-random-settings') || 'null'),
      completedStudyDays: JSON.parse(localStorage.getItem('cippe-study-plan-v1') || '[]'),
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

      setPendingImport(data);
    } catch {
      setImportMessage({ text: '未能读取备份文件，请检查文件后重试。', tone: 'error' });
    } finally {
      event.target.value = '';
    }
  };

  const confirmImport = () => {
    const data = pendingImport;
    if (!data) return;
    setPendingImport(null);
    try {
      flushPendingWrites();
      const incomingCount = data.progress.length;
      const entries: Array<[string, unknown]> = [
        ['cippe-progress', data.progress],
        ['cippe-stats', data.stats],
        ['cippe-settings', data.settings],
        ['cippe-last-result', data.lastResult ?? null],
      ];
      if (data.activeSession !== undefined) {
        entries.push([ACTIVE_SESSION_STORAGE_KEY, data.activeSession]);
      }
      if (data.randomSettings !== undefined) {
        entries.push(['cippe-random-settings', data.randomSettings]);
      }
      if (data.completedStudyDays !== undefined) {
        entries.push(['cippe-study-plan-v1', [...new Set(data.completedStudyDays)]]);
      }
      replaceLocalData(entries);
      onUpdate(data.settings);
      // Let the confirmation land before the reload wipes the screen.
      setImportMessage({ text: `导入成功，已恢复 ${incomingCount} 条答题记录。正在刷新…`, tone: 'success' });
      window.setTimeout(() => window.location.reload(), 1200);
    } catch {
      setImportMessage({ text: '导入失败，现有学习数据没有被替换。请检查文件后重试。', tone: 'error' });
    }
  };

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header>
        <h1 className="text-xl font-bold leading-7 text-ink">找到舒服的学习方式。</h1>
      </header>

      <section ref={focusSection} tabIndex={-1} className="scroll-mt-24 space-y-5" aria-labelledby="focus-settings">
        <h2 id="focus-settings" className="text-base font-bold leading-6 text-ink">专注节奏</h2>
        <DurationField
          label="专注时长"
          value={localSettings.tomatoDuration}
          presets={[15, 25, 45]}
          onChange={(value) => handleChange('tomatoDuration', value)}
        />

        <DurationField
          label="休息时长"
          value={localSettings.breakDuration}
          presets={[5, 10, 15]}
          onChange={(value) => handleChange('breakDuration', value)}
        />
      </section>

      <section ref={displaySection} tabIndex={-1} className="scroll-mt-24 space-y-5" aria-labelledby="display-settings">
        <h2 id="display-settings" className="text-base font-bold leading-6 text-ink">显示与反馈</h2>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="sr-only">界面主题</legend>
          <div className="grid grid-cols-3 gap-2">
            {themeOptions.map((option) => (
              <Chip
                key={option.value}
                aria-pressed={localSettings.theme === option.value}
                onClick={() => handleChange('theme', option.value)}
              >
                {option.label}
              </Chip>
            ))}
          </div>
        </fieldset>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-5 text-xs font-medium leading-[18px] text-muted">字体大小</legend>
          <div className="grid grid-cols-3 gap-2">
            {sizeOptions.map((option) => (
              <Chip
                key={option.value}
                aria-pressed={localSettings.fontSize === option.value}
                onClick={() => handleChange('fontSize', option.value)}
              >
                {option.label}
              </Chip>
            ))}
          </div>
        </fieldset>

        <div className="flex min-h-[68px] flex-wrap items-center justify-between gap-2 rounded-[20px] border-2 border-line bg-surface p-4">
          <p id="sound-label" className="text-sm font-bold text-ink">答题声音</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="min-h-11 rounded-xl px-2 text-xs font-medium text-info-accent disabled:text-muted"
              disabled={!localSettings.soundEnabled}
              onClick={() => void playCorrect(3)}
              aria-label="试听答题音效"
            >
              试听
            </button>
            <button
              type="button"
              role="switch"
              aria-labelledby="sound-label"
              aria-checked={localSettings.soundEnabled}
              onClick={() => handleChange('soundEnabled', !localSettings.soundEnabled)}
              className="grid min-h-11 min-w-[52px] place-items-center rounded-full"
            >
              <img src={localSettings.soundEnabled ? soundOn : soundOff} alt="" width={52} height={32} />
            </button>
          </div>
        </div>
      </section>

      <section ref={dataSection} tabIndex={-1} className="scroll-mt-24 space-y-5" aria-labelledby="data-settings">
        <h2 id="data-settings" className="text-base font-bold leading-6 text-ink">学习数据</h2>

        <WebStateCard headingLevel={3} title="学习记录保存在当前浏览器" body="当前版不提供云端同步。清除网站数据或更换浏览器，可能无法继续读取原有记录。备份包含学习进度、错题、设置、未完成练习和备考计划进度。">

          <Pressable variant="featured" size="lg" block className="min-h-14" onClick={handleExport}>导出学习数据</Pressable>
          <Pressable variant="neutral" size="lg" block className="min-h-14" onClick={() => fileInputRef.current?.click()}>
            导入学习数据
          </Pressable>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            onChange={handleImport}
            className="hidden"
          />
        </WebStateCard>

        <p className="text-xs leading-[18px] text-muted">导入会替换当前设备的数据，请先导出备份。</p>

        {importMessage && (
          <WebStateCard
            headingLevel={3}
            role={importMessage.tone === 'error' ? 'alert' : 'status'}
            title={importMessage.tone === 'error' ? '备份未能导入' : importMessage.tone === 'success' ? '学习数据已恢复' : '未替换学习数据'}
            body={importMessage.text}
            tone={importMessage.tone}
          />
        )}

        {pendingImport && (
          <ConfirmationDialog
            title="要覆盖本机学习数据吗？"
            description={<>导入会替换当前浏览器里的学习记录和设置，且无法撤销。<br />当前：{readProgressCount()} 条答题记录 · 导入：{pendingImport.progress.length} 条答题记录。</>}
            confirmLabel="覆盖并导入"
            cancelLabel="取消导入"
            onConfirm={confirmImport}
            onCancel={() => {
              setPendingImport(null);
              setImportMessage({ text: '已取消导入，现有数据没有任何改动。', tone: 'info' });
            }}
          />
        )}

        <DeviceSync progress={progress} stats={stats} onApply={onApplySynced} />
      </section>
    </div>
  );
}
