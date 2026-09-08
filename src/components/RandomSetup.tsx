import { useMemo, useState } from 'react';
import type { RandomPracticeSettings, TopicProgress } from '../types';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';

interface RandomSetupProps {
  initialSettings: RandomPracticeSettings;
  topics: TopicProgress[];
  onStart: (settings: RandomPracticeSettings) => void;
  onBack: () => void;
}

const COUNT_PRESETS = [5, 10, 20];

export function RandomSetup({ initialSettings, topics, onStart, onBack }: RandomSetupProps) {
  const [count, setCount] = useState(initialSettings.count);
  const [topic, setTopic] = useState<string | null>(initialSettings.topic);
  const [mode, setMode] = useState(initialSettings.mode);
  const [custom, setCustom] = useState(!COUNT_PRESETS.includes(initialSettings.count));

  const availableCount = useMemo(() => {
    if (!topic) return topics.reduce((sum, item) => sum + item.total, 0);
    return topics.find((item) => item.topic === topic)?.total ?? 0;
  }, [topic, topics]);

  const effectiveCount = Math.min(Math.max(1, count), availableCount);

  return (
    <div className="space-y-7">
      <header>
        <Pressable
          variant="ghost"
          size="sm"
          onClick={onBack}
          leading={<Icon name="arrow-left" size={19} />}
          className="-ml-3 mb-3"
        >
          返回首页
        </Pressable>
        <p className="text-sm font-extrabold text-warning-ink">自定义挑战</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">随机组卷</h1>
        <p className="mt-2 text-sm font-medium text-muted">题目不重复，并优先抽取尚未做过的内容。</p>
      </header>

      <fieldset className="space-y-4 border-0 p-0">
        <legend className="flex items-center gap-3 text-lg font-black text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm text-brand-ink">1</span>
          做多少题？
        </legend>
        <div className="grid grid-cols-2 gap-2 min-[360px]:grid-cols-4" role="group" aria-label="选择题数">
          {COUNT_PRESETS.map((preset) => (
            <Pressable
              key={preset}
              variant={!custom && count === preset ? 'primary' : 'neutral'}
              size="sm"
              aria-pressed={!custom && count === preset}
              onClick={() => {
                setCount(preset);
                setCustom(false);
              }}
              className="px-2"
            >
              {preset} 题
            </Pressable>
          ))}
          <Pressable
            variant={custom ? 'primary' : 'neutral'}
            size="sm"
            aria-pressed={custom}
            onClick={() => setCustom(true)}
            className="px-2"
          >
            自定义
          </Pressable>
        </div>
        {custom && (
          <label className="block rounded-2xl bg-surface-soft p-4">
            <span className="mb-2 block text-sm font-extrabold text-ink">输入题数</span>
            <input
              type="number"
              min={1}
              max={availableCount}
              inputMode="numeric"
              value={count}
              onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))}
              className="min-h-12 w-full rounded-xl border-2 border-line-strong bg-surface px-4 py-3 text-base font-bold text-ink outline-none transition-shadow focus:border-info focus:ring-4 focus:ring-[var(--ui-focus)]"
            />
          </label>
        )}
      </fieldset>

      <div className="h-0.5 bg-line" aria-hidden="true" />

      <fieldset className="space-y-4 border-0 p-0">
        <legend className="flex items-center gap-3 text-lg font-black text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-info text-sm text-white">2</span>
          从哪里出题？
        </legend>
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-muted">Topic 范围</span>
          <div className="relative">
            <select
              value={topic ?? ''}
              onChange={(event) => setTopic(event.target.value || null)}
              className="min-h-13 w-full appearance-none rounded-2xl border-2 border-line-strong bg-surface px-4 py-3 pr-12 text-base font-bold text-ink shadow-[0_3px_0_var(--ui-line-strong)] outline-none transition-shadow focus:border-info focus:ring-4 focus:ring-[var(--ui-focus)]"
            >
              <option value="">全部 Topic 混合</option>
              {topics.map((item) => (
                <option key={item.topic} value={item.topic}>
                  {item.topic}（{item.total} 题）
                </option>
              ))}
            </select>
            <Icon
              name="chevron-right"
              size={21}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-muted"
            />
          </div>
        </label>
        {count > availableCount && (
          <p role="status" className="rounded-2xl bg-warning-soft px-4 py-3 text-sm font-bold text-warning-ink">
            当前范围只有 {availableCount} 题，本次将使用全部题目。
          </p>
        )}
      </fieldset>

      <div className="h-0.5 bg-line" aria-hidden="true" />

      <fieldset className="space-y-4 border-0 p-0">
        <legend className="flex items-center gap-3 text-lg font-black text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-warning text-sm text-warning-solid-ink">3</span>
          怎么答题？
        </legend>
        <div className="grid grid-cols-2 gap-3" role="group" aria-label="选择答题模式">
          <Pressable
            variant={mode === 'study' ? 'primary' : 'neutral'}
            aria-pressed={mode === 'study'}
            onClick={() => setMode('study')}
            className="min-h-[100px] flex-col px-3 text-center"
            leading={<Icon name="book" size={24} />}
          >
            <span className="font-black">学习模式</span>
            <span className="text-xs font-semibold opacity-90">每题立即看解析</span>
          </Pressable>
          <Pressable
            variant={mode === 'exam' ? 'secondary' : 'neutral'}
            aria-pressed={mode === 'exam'}
            onClick={() => setMode('exam')}
            className="min-h-[100px] flex-col px-3 text-center"
            leading={<Icon name="target" size={24} />}
          >
            <span className="font-black">考试模式</span>
            <span className="text-xs font-semibold opacity-90">交卷后统一查看</span>
          </Pressable>
        </div>
      </fieldset>

      <div className="pt-2">
        <Pressable
          variant="primary"
          size="lg"
          block
          onClick={() => onStart({ count: effectiveCount, topic, mode })}
          disabled={availableCount === 0}
          trailing={<Icon name="arrow-right" size={21} />}
        >
          开始 {effectiveCount} 题 · {mode === 'study' ? '学习' : '考试'}
        </Pressable>
      </div>
    </div>
  );
}
