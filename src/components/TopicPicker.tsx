import { useState } from 'react';
import type { TopicProgress } from '../types';
import { ProgressBar } from './ui/ProgressBar';
import { Spinner } from './ui/Spinner';
import { usePendingAction } from '../hooks/usePendingAction';
import { V2Icon } from './ui/V2Icon';

interface TopicPickerProps {
  topics: TopicProgress[];
  onSelect: (topic: string) => void | Promise<void>;
  onBack?: () => void;
}

const PREVIEW_COUNT = 5;
const normalizeTopic = (value: string) => value.trim().toLocaleLowerCase().replace(/\s/g, '');

export function TopicPicker({ topics, onSelect }: TopicPickerProps) {
  const { pendingKey, run } = usePendingAction();
  const [search, setSearch] = useState('');
  const [showAll, setShowAll] = useState(false);
  const query = normalizeTopic(search);
  const matches = topics.filter(({ topic }) => normalizeTopic(topic).includes(query));
  const visibleTopics = query || showAll ? matches : matches.slice(0, PREVIEW_COUNT);

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header className="space-y-5">
        <h1 className="text-[26px] font-bold leading-9 text-ink">一次，突破一个主题。</h1>
        <p className="text-sm leading-[22px] text-muted">按 Topic 集中练习，掌握得更扎实。</p>
      </header>

      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="搜索专题"
        placeholder="搜索专题"
        className="v2-field"
      />

      <p aria-live="polite" className="text-xs font-medium leading-[18px] text-muted">
        {query ? `找到 ${matches.length} 个专题` : `${topics.length} 个专题 · 选择你想补强的内容`}
      </p>

      {visibleTopics.length === 0 ? (
        <p className="rounded-[20px] border-2 border-line bg-surface p-5 text-sm text-muted">
          {query ? '没有匹配的专题，试试其他关键词。' : '暂时没有可练习的专题。'}
        </p>
      ) : (
        <ul className="space-y-5" aria-label="CIPP/E 专题">
          {visibleTopics.map((topic) => {
            const loading = pendingKey === topic.topic;
            return (
              <li key={topic.topic}>
                <button
                  type="button"
                  onClick={() => void run(topic.topic, () => onSelect(topic.topic))}
                  disabled={pendingKey !== null && !loading}
                  aria-disabled={loading || undefined}
                  aria-busy={loading || undefined}
                  className="block w-full space-y-2 rounded-[20px] border-2 border-line bg-surface p-4 text-left transition-colors hover:border-brand-line disabled:cursor-not-allowed"
                >
                  <span className="flex items-start justify-between gap-2 text-base font-bold leading-6 text-ink">
                    <span className="min-w-0 [overflow-wrap:anywhere]">{topic.topic}</span>
                    {loading ? <Spinner size={24} /> : <span className="flex shrink-0 text-muted"><V2Icon name="chevron" /></span>}
                  </span>
                  <span className="block text-xs font-medium leading-[18px] text-muted">
                    {loading ? '正在准备…' : `${topic.completed} 题已练习`}
                  </span>
                  <ProgressBar
                    value={topic.completed}
                    max={topic.total}
                    label={`${topic.topic} 已完成 ${topic.completed} / ${topic.total}`}
                    className="h-3"
                  />
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {!query && !showAll && topics.length > PREVIEW_COUNT && (
        <button type="button" onClick={() => setShowAll(true)} className="min-h-11 text-xs font-medium text-info-accent hover:underline">
          查看全部 {topics.length} 个专题 →
        </button>
      )}
    </div>
  );
}
