import { useMemo, useState } from 'react';
import type { RandomPracticeSettings, TopicProgress } from '../types';

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
    <div className="space-y-6">
      <div>
        <button
          type="button"
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          ‹ 返回首页
        </button>
        <h1 className="text-2xl font-bold text-gray-900">随机组卷</h1>
        <p className="mt-2 text-sm text-gray-500">同组题目不重复，并优先抽取尚未做过的题目。</p>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-gray-900">1. 选择题数</h2>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {COUNT_PRESETS.map((preset) => (
            <button
              type="button"
              key={preset}
              onClick={() => {
                setCount(preset);
                setCustom(false);
              }}
              className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                !custom && count === preset
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {preset} 题
            </button>
          ))}
          <button
            type="button"
            onClick={() => setCustom(true)}
            className={`rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
              custom ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            自定义
          </button>
        </div>
        {custom && (
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-gray-600">输入题数</span>
            <input
              type="number"
              min={1}
              max={availableCount}
              inputMode="numeric"
              value={count}
              onChange={(event) => setCount(Math.max(1, Number(event.target.value) || 1))}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-gray-900">2. 选择 Topic 范围</h2>
        <select
          value={topic ?? ''}
          onChange={(event) => setTopic(event.target.value || null)}
          className="mt-4 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">全部 Topic 混合</option>
          {topics.map((item) => (
            <option key={item.topic} value={item.topic}>
              {item.topic}（{item.total} 题）
            </option>
          ))}
        </select>
        {count > availableCount && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
            当前范围只有 {availableCount} 题，本次将使用全部题目。
          </p>
        )}
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-gray-900">3. 选择答题模式</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setMode('study')}
            className={`rounded-xl border-2 p-4 text-left transition-colors ${
              mode === 'study' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
            }`}
          >
            <span className="block font-semibold text-gray-900">学习模式</span>
            <span className="mt-1 block text-xs leading-relaxed text-gray-500">每题提交后立即看解析</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('exam')}
            className={`rounded-xl border-2 p-4 text-left transition-colors ${
              mode === 'exam' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
            }`}
          >
            <span className="block font-semibold text-gray-900">考试模式</span>
            <span className="mt-1 block text-xs leading-relaxed text-gray-500">交卷后统一公布结果</span>
          </button>
        </div>
      </section>

      <button
        type="button"
        onClick={() => onStart({ count: effectiveCount, topic, mode })}
        disabled={availableCount === 0}
        className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
      >
        开始 {effectiveCount} 题 · {mode === 'study' ? '学习模式' : '考试模式'}
      </button>
    </div>
  );
}
