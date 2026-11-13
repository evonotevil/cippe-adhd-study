import { useState } from 'react';
import type { RandomPracticeSettings, TopicProgress } from '../types';
import { Chip } from './ui/Chip';
import { Pressable } from './ui/Pressable';
import { usePendingAction } from '../hooks/usePendingAction';

interface RandomSetupProps {
  initialSettings: RandomPracticeSettings;
  topics: TopicProgress[];
  onStart: (settings: RandomPracticeSettings) => void | Promise<void>;
  onBack?: () => void;
}

const COUNT_PRESETS = [5, 10, 20];

export function RandomSetup({ initialSettings, topics, onStart }: RandomSetupProps) {
  const { pendingKey, run } = usePendingAction();
  const [preset, setPreset] = useState(COUNT_PRESETS.includes(initialSettings.count) ? initialSettings.count : 10);
  const [customCount, setCustomCount] = useState(COUNT_PRESETS.includes(initialSettings.count) ? '' : String(initialSettings.count));
  const [topic, setTopic] = useState<string | null>(initialSettings.topic);
  const [mode, setMode] = useState(initialSettings.mode);

  const availableCount = topic
    ? topics.find((item) => item.topic === topic)?.total ?? 0
    : topics.reduce((sum, item) => sum + item.total, 0);
  const count = customCount === '' ? preset : Number(customCount);
  const validCount = Number.isSafeInteger(count) && count > 0;
  const effectiveCount = validCount ? Math.min(count, availableCount) : 0;

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header className="space-y-5">
        <h1 className="text-[26px] font-bold leading-9 text-ink">给自己一组小挑战。</h1>
        <p className="text-sm leading-[22px] text-muted">题目不重复，优先抽取未做过的内容。</p>
      </header>

      <section aria-label="组卷配置" className="space-y-5 rounded-[20px] border-2 border-line bg-surface p-5">
        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-5 text-base font-bold leading-6 text-ink">01&nbsp; 做多少题？</legend>
          <div className="grid grid-cols-3 gap-2">
            {COUNT_PRESETS.map((option) => (
              <Chip
                key={option}
                aria-pressed={customCount === '' && preset === option}
                onClick={() => { setPreset(option); setCustomCount(''); }}
              >
                {option} 题
              </Chip>
            ))}
          </div>
          <input
            type="number"
            min={1}
            max={availableCount || undefined}
            step={1}
            inputMode="numeric"
            value={customCount}
            placeholder="自定义题数"
            aria-label="自定义题数"
            aria-invalid={customCount !== '' && !validCount}
            aria-describedby={!validCount ? 'question-count-error' : undefined}
            onChange={(event) => setCustomCount(event.target.value)}
            className="v2-field mt-5"
          />
        </fieldset>

        <label className="block">
          <span className="mb-5 block text-base font-bold leading-6 text-ink">02&nbsp; 从哪里抽题？</span>
          <select
            value={topic ?? ''}
            onChange={(event) => setTopic(event.target.value || null)}
            className="pressable w-full text-center"
          >
            <option value="">全部 Topic</option>
            {topics.map((item) => <option key={item.topic} value={item.topic}>{item.topic}（{item.total} 题）</option>)}
          </select>
        </label>

        <fieldset className="min-w-0 border-0 p-0">
          <legend className="mb-5 text-base font-bold leading-6 text-ink">03&nbsp; 怎么答？</legend>
          <div className="grid grid-cols-2 gap-2">
            <Chip aria-pressed={mode === 'study'} onClick={() => setMode('study')}>学习模式</Chip>
            <Chip aria-pressed={mode === 'exam'} onClick={() => setMode('exam')}>考试模式</Chip>
          </div>
          <p className="mt-5 text-xs leading-[18px] text-muted">
            学习模式：每题提交后查看反馈<br />
            考试模式：交卷后统一看结果
          </p>
        </fieldset>
      </section>

      {validCount && count > availableCount && (
        <p role="status" className="text-sm text-warning-ink">当前范围只有 {availableCount} 题，将使用全部题目。</p>
      )}
      {!validCount && <p id="question-count-error" role="status" className="text-sm text-danger-accent">请输入大于 0 的整数。</p>}

      <Pressable
        variant="featured"
        size="lg"
        block
        className="min-h-14"
        loading={pendingKey === 'start'}
        disabled={effectiveCount === 0}
        onClick={() => void run('start', () => onStart({ count: effectiveCount, topic, mode }))}
      >
        开始组卷{effectiveCount > 0 ? ` · ${effectiveCount} 题` : ''}
      </Pressable>
      <p className="text-xs leading-[18px] text-muted">情景题会整组一起出，实际题数可能略多。</p>
    </div>
  );
}
