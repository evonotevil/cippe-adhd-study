import { motion, useReducedMotion } from 'framer-motion';
import type { TopicProgress } from '../types';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { ProgressBar } from './ui/ProgressBar';

interface TopicPickerProps {
  topics: TopicProgress[];
  onSelect: (topic: string) => void;
  onBack: () => void;
}

export function TopicPicker({ topics, onSelect, onBack }: TopicPickerProps) {
  const reduceMotion = useReducedMotion();

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
        <p className="text-sm font-extrabold text-brand-strong">知识路径</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">选择一个 Topic</h1>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted">
          按 CIPPE 知识结构排列。每次专注一个主题，未做题会优先出现。
        </p>
      </header>

      <ol className="relative space-y-3" aria-label="CIPPE Topic 学习路径">
        <span
          aria-hidden="true"
          className="absolute bottom-8 left-[1.875rem] top-8 w-1 -translate-x-1/2 rounded-full bg-line"
        />
        {topics.map((topic, index) => {
          const completion = topic.total > 0 ? Math.round((topic.completed / topic.total) * 100) : 0;
          const accuracy = topic.totalAttempts > 0
            ? Math.round((topic.correctAttempts / topic.totalAttempts) * 100)
            : null;
          const completed = topic.completed === topic.total && topic.total > 0;
          const started = topic.completed > 0;

          return (
            <li key={topic.topic} className="relative">
              <button
                type="button"
                onClick={() => onSelect(topic.topic)}
                className="group flex min-h-[96px] w-full items-center gap-4 rounded-[1.25rem] border-2 border-line bg-surface px-4 py-3 text-left shadow-[0_3px_0_var(--ui-line-strong)] transition-[transform,box-shadow,border-color] duration-150 hover:border-brand-strong active:translate-y-[2px] active:shadow-[0_1px_0_var(--ui-line-strong)]"
              >
                <motion.span
                  className={`relative z-10 flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-full border-[3px] font-black ${
                    completed
                      ? 'border-brand-shadow bg-brand text-brand-ink shadow-[0_4px_0_var(--ui-brand-shadow)]'
                      : started
                        ? 'border-info-shadow bg-info text-white shadow-[0_4px_0_var(--ui-info-shadow)]'
                        : 'border-line-strong bg-surface-soft text-muted shadow-[0_4px_0_var(--ui-line-strong)]'
                  }`}
                  whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                >
                  {completed ? <Icon name="check" size={27} /> : started ? <Icon name="play" size={24} /> : index + 1}
                </motion.span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="font-black leading-snug text-ink">{topic.topic}</span>
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
                  <span className="mt-2 flex items-center justify-between text-xs font-bold text-muted">
                    <span>{completed ? '已完成一轮' : started ? `已完成 ${completion}%` : '尚未开始'}</span>
                    <span>{accuracy === null ? '开始学习' : `正确率 ${accuracy}%`}</span>
                  </span>
                </span>
                <Icon name="chevron-right" size={21} className="shrink-0 text-faint group-hover:text-brand-strong" />
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
