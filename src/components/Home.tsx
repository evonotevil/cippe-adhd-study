import type { PracticeSession } from '../types';
import { getSessionTitle } from '../domain/practice';
import { Pressable } from './ui/Pressable';
import { ProgressBar } from './ui/ProgressBar';
import { Icon, type IconName } from './ui/Icons';

interface HomeProps {
  totalQuestions: number;
  unseenCount: number;
  mistakeCount: number;
  todayAnswered: number;
  todayCorrect: number;
  topicCount: number;
  activeSession: PracticeSession | null;
  onStartAll: () => void;
  onStartMistakes: () => void;
  onOpenTopics: () => void;
  onOpenRandom: () => void;
  onResume: () => void;
}

interface ModeRowProps {
  icon: IconName;
  title: string;
  description: string;
  detail: string;
  tone: 'danger' | 'info' | 'warning';
  disabled?: boolean;
  onClick: () => void;
}

const toneStyles = {
  danger: 'bg-danger-soft text-danger-ink',
  info: 'bg-info-soft text-info-ink',
  warning: 'bg-warning-soft text-warning-ink',
};

function ModeRow({
  icon,
  title,
  description,
  detail,
  tone,
  disabled = false,
  onClick,
}: ModeRowProps) {
  return (
    <Pressable
      variant="neutral"
      block
      disabled={disabled}
      onClick={onClick}
      className="min-h-[84px] justify-start px-4 py-3 text-left sm:px-5"
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${toneStyles[tone]}`}>
        <Icon name={icon} size={25} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-3">
          <span className="text-base font-black text-ink">{title}</span>
          <span className="shrink-0 text-xs font-extrabold text-muted sm:text-sm">{detail}</span>
        </span>
        <span className="mt-1 block text-sm font-semibold leading-snug text-muted">{description}</span>
      </span>
      {!disabled && <Icon name="chevron-right" size={20} className="shrink-0 text-faint" />}
    </Pressable>
  );
}

export function Home({
  totalQuestions,
  unseenCount,
  mistakeCount,
  todayAnswered,
  todayCorrect,
  topicCount,
  activeSession,
  onStartAll,
  onStartMistakes,
  onOpenTopics,
  onOpenRandom,
  onResume,
}: HomeProps) {
  const accuracy = todayAnswered > 0 ? Math.round((todayCorrect / todayAnswered) * 100) : 0;
  const coveredCount = totalQuestions - unseenCount;
  const activeAnswered = activeSession?.mode === 'exam'
    ? activeSession.items.filter((item) => item.selectedAnswer).length
    : activeSession?.attempts.length ?? 0;

  return (
    <div className="space-y-6">
      <section aria-labelledby="home-heading" className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-extrabold text-brand-strong">今天学什么？</p>
            <h1 id="home-heading" className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">
              选一个小目标
            </h1>
          </div>
          <div className="rounded-2xl bg-warning-soft px-3 py-2 text-right text-warning-ink">
            <p className="text-lg font-black tabular-nums">{todayAnswered}</p>
            <p className="text-[11px] font-bold">今日题数</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ProgressBar
            value={coveredCount}
            max={totalQuestions}
            label={`题库覆盖 ${coveredCount} / ${totalQuestions}`}
            className="flex-1"
          />
          <span className="shrink-0 text-xs font-extrabold tabular-nums text-muted">
            {coveredCount}/{totalQuestions}
          </span>
        </div>

        <p className="text-sm font-semibold text-muted">
          今日正确率 {accuracy}% · {mistakeCount > 0 ? `${mistakeCount} 道错题待巩固` : '错题已清空'}
        </p>
      </section>

      {activeSession && (
        <button
          type="button"
          onClick={onResume}
          className="w-full rounded-[1.25rem] border-2 border-info-shadow bg-info-soft p-4 text-left shadow-[0_4px_0_var(--ui-info-shadow)] transition-[transform,box-shadow] duration-150 active:translate-y-[3px] active:shadow-[0_1px_0_var(--ui-info-shadow)]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-info text-white">
              <Icon name="play" size={21} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-extrabold text-info-ink">继续未完成练习</span>
              <span className="mt-0.5 block truncate font-black text-ink">{getSessionTitle(activeSession)}</span>
              <span className="mt-2 block">
                <ProgressBar
                  value={activeAnswered}
                  max={Math.max(1, activeSession.items.length)}
                  label={`已完成 ${activeAnswered} / ${activeSession.items.length} 题`}
                  tone="info"
                  className="h-2"
                />
              </span>
            </span>
            <Icon name="chevron-right" size={22} className="text-info-ink" />
          </div>
        </button>
      )}

      <section aria-label="练习模式" className="space-y-4">
        <Pressable
          variant="featured"
          block
          size="lg"
          onClick={onStartAll}
          className="min-h-[116px] justify-start px-5 py-5 text-left"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface/65 text-brand-ink">
            <Icon name={unseenCount > 0 ? 'play' : 'refresh'} size={29} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-xl font-black tracking-[-0.02em]">
              {unseenCount > 0 ? '全库刷题' : '巩固练习'}
            </span>
            <span className="mt-1 block text-sm font-bold leading-snug opacity-80">
              {unseenCount > 0 ? `还有 ${unseenCount} 题未做，优先学习新题` : '错题优先，再回顾最久未做的题'}
            </span>
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface/55">
            <Icon name="arrow-right" size={20} />
          </span>
        </Pressable>

        <div className="space-y-3">
          <ModeRow
            icon="refresh"
            title="错题复习"
            description={mistakeCount > 0 ? '连续答对两次，就算真正掌握' : '暂无待复习错题，继续保持'}
            detail={mistakeCount > 0 ? `${mistakeCount} 题` : '已清空'}
            tone="danger"
            disabled={mistakeCount === 0}
            onClick={onStartMistakes}
          />
          <ModeRow
            icon="topics"
            title="专题练习"
            description="按知识路径选择一个 Topic"
            detail={`${topicCount} 个`}
            tone="info"
            onClick={onOpenTopics}
          />
          <ModeRow
            icon="bolt"
            title="随机组卷"
            description="自选题数、范围和答题模式"
            detail="5 / 10 / 20"
            tone="warning"
            onClick={onOpenRandom}
          />
        </div>
      </section>
    </div>
  );
}
