import type { TopicProgress } from '../types';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { ProgressBar } from './ui/ProgressBar';

interface TopicPickerProps {
  topics: TopicProgress[];
  onSelect: (topic: string) => void;
  onBack: () => void;
}

function getAccuracy(topic: TopicProgress): number | null {
  return topic.totalAttempts > 0
    ? Math.round((topic.correctAttempts / topic.totalAttempts) * 100)
    : null;
}

function getRecommendedTopic(topics: TopicProgress[]): TopicProgress | null {
  const startedAndIncomplete = topics
    .filter((topic) => topic.completed > 0 && topic.completed < topic.total)
    .sort((a, b) => {
      const accuracyDifference = (getAccuracy(a) ?? 101) - (getAccuracy(b) ?? 101);
      const completionDifference =
        a.completed / Math.max(1, a.total) - b.completed / Math.max(1, b.total);
      return accuracyDifference || completionDifference;
    });

  if (startedAndIncomplete[0]) return startedAndIncomplete[0];

  const unstarted = topics.find((topic) => topic.completed === 0);
  if (unstarted) return unstarted;

  return [...topics].sort((a, b) => (getAccuracy(a) ?? 101) - (getAccuracy(b) ?? 101))[0] ?? null;
}

function getRecommendationReason(topic: TopicProgress): string {
  if (topic.completed === 0) return '从未开始的主题中，为你推荐这一项';
  if (topic.completed < topic.total) return '继续未完成且当前正确率较低的主题';
  return '所有主题已完成一轮，先巩固当前正确率较低的主题';
}

interface TopicCardProps {
  topic: TopicProgress;
  recommended?: boolean;
  onSelect: (topic: string) => void;
}

function TopicCard({ topic, recommended = false, onSelect }: TopicCardProps) {
  const accuracy = getAccuracy(topic);
  const completed = topic.completed === topic.total && topic.total > 0;
  const started = topic.completed > 0;

  return (
    <button
      type="button"
      onClick={() => onSelect(topic.topic)}
      className={`group flex min-h-[96px] w-full items-center gap-4 rounded-[1.25rem] border-2 px-4 py-3 text-left transition-[transform,box-shadow,border-color] duration-150 active:translate-y-[2px] ${
        recommended
          ? 'border-brand-strong bg-brand-soft shadow-[0_4px_0_var(--ui-brand-shadow)] active:shadow-[0_1px_0_var(--ui-brand-shadow)]'
          : 'border-line bg-surface shadow-[0_3px_0_var(--ui-line-strong)] hover:border-brand-strong active:shadow-[0_1px_0_var(--ui-line-strong)]'
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
          completed
            ? 'bg-brand text-brand-ink'
            : started
              ? 'bg-info text-white'
              : 'bg-surface-soft text-muted'
        }`}
      >
        <Icon name={completed ? 'check' : started ? 'play' : 'book'} size={24} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-3">
          <span className="font-extrabold leading-snug text-ink [overflow-wrap:anywhere]">{topic.topic}</span>
          <span className="shrink-0 text-xs font-extrabold tabular-nums text-muted">
            {topic.completed}/{topic.total}
          </span>
        </span>
        <ProgressBar
          value={topic.completed}
          max={topic.total}
          label={`${topic.topic} 已完成 ${topic.completed} / ${topic.total}`}
          tone={completed ? 'brand' : 'info'}
          className="mt-2 h-2.5"
        />
        <span className="mt-2 flex items-center justify-between gap-3 text-xs font-bold text-muted">
          {/* 数量已经由右上角的 x/y 和进度条表达，这里只补它们说不了的：正确率。 */}
          <span>{completed ? '已完成一轮' : started ? '进行中' : '尚未开始'}</span>
          <span>{accuracy === null ? '开始学习' : `正确率 ${accuracy}%`}</span>
        </span>
      </span>
      <Icon name="chevron-right" size={21} className="shrink-0 text-faint group-hover:text-brand-strong" />
    </button>
  );
}

export function TopicPicker({ topics, onSelect, onBack }: TopicPickerProps) {
  const recommendedTopic = getRecommendedTopic(topics);
  const otherTopics = topics.filter((topic) => topic.topic !== recommendedTopic?.topic);

  return (
    <div className="space-y-6">
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
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">专题练习</h1>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted">
          每次专注一个主题，练习会优先安排未做题。下面这个是按掌握情况推荐的，也可以自己挑。
        </p>
      </header>

      {recommendedTopic ? (
        <section aria-labelledby="recommended-topic-heading" className="space-y-3">
          <div>
            <h2 id="recommended-topic-heading" className="text-lg font-black text-ink">建议下一步</h2>
            <p className="mt-1 text-sm font-semibold text-muted">
              {getRecommendationReason(recommendedTopic)}
            </p>
          </div>
          <TopicCard topic={recommendedTopic} recommended onSelect={onSelect} />
        </section>
      ) : (
        <p className="rounded-2xl bg-surface-soft p-4 text-sm font-semibold text-muted">
          暂时没有可练习的 Topic。
        </p>
      )}

      {otherTopics.length > 0 && (
        <details className="group rounded-[1.25rem] border-2 border-line bg-surface px-4 py-2 shadow-[0_3px_0_var(--ui-line-strong)]">
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-1 font-black text-ink marker:content-none [&::-webkit-details-marker]:hidden">
            <span>其余 Topic</span>
            <span className="flex items-center gap-2 text-sm font-extrabold text-muted">
              {otherTopics.length} 个
              <Icon name="chevron-right" size={20} className="transition-transform duration-150 group-open:rotate-90" />
            </span>
          </summary>
          <ul className="space-y-3 border-t-2 border-line py-4" aria-label="其余 CIPPE Topic">
            {otherTopics.map((topic) => (
              <li key={topic.topic}>
                <TopicCard topic={topic} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        </details>
      )}
    </div>
  );
}
