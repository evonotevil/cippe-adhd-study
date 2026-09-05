import type { PracticeSession } from '../types';
import { getSessionTitle } from '../domain/practice';

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

interface PracticeCardProps {
  icon: string;
  title: string;
  description: string;
  detail: string;
  accent: string;
  disabled?: boolean;
  onClick: () => void;
}

function PracticeCard({
  icon,
  title,
  description,
  detail,
  accent,
  disabled = false,
  onClick,
}: PracticeCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition-all ${
        disabled
          ? 'cursor-not-allowed border-gray-200 opacity-55'
          : 'border-gray-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md active:translate-y-0'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${accent}`}>
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <span className="shrink-0 text-sm font-medium text-gray-500">{detail}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
        {!disabled && <span className="mt-3 text-lg text-gray-300">›</span>}
      </div>
    </button>
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
  const activeAnswered = activeSession?.mode === 'exam'
    ? activeSession.items.filter((item) => item.selectedAnswer).length
    : activeSession?.attempts.length ?? 0;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-blue-600">今天，从一个小目标开始</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">选择练习方式</h1>
        <p className="mt-2 text-sm text-gray-500">
          今日完成 {todayAnswered} 题 · 正确率 {accuracy}%
        </p>
      </div>

      {activeSession && (
        <button
          type="button"
          onClick={onResume}
          className="w-full rounded-2xl border border-blue-200 bg-blue-50 p-4 text-left transition-colors hover:bg-blue-100"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">继续未完成练习</p>
              <p className="mt-1 font-semibold text-gray-900">{getSessionTitle(activeSession)}</p>
              <p className="mt-1 text-sm text-gray-600">
                已完成 {activeAnswered} / {activeSession.items.length} 题
              </p>
            </div>
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              继续
            </span>
          </div>
        </button>
      )}

      <div className="space-y-3">
        <PracticeCard
          icon={unseenCount > 0 ? '▶' : '↻'}
          title={unseenCount > 0 ? '全库刷题' : '巩固练习'}
          description={
            unseenCount > 0
              ? '不限题数，未做题优先'
              : '错题优先，再回顾最久未做的题'
          }
          detail={unseenCount > 0 ? `未做 ${unseenCount} 题` : `${totalQuestions} 题已覆盖`}
          accent="bg-blue-100 text-blue-700"
          onClick={onStartAll}
        />

        <PracticeCard
          icon="↻"
          title="错题复习"
          description={
            mistakeCount > 0
              ? '随机练一轮，连续答对两次即掌握'
              : '暂无待复习错题，继续保持'
          }
          detail={mistakeCount > 0 ? `待复习 ${mistakeCount} 题` : '已清空'}
          accent="bg-rose-100 text-rose-700"
          disabled={mistakeCount === 0}
          onClick={onStartMistakes}
        />

        <PracticeCard
          icon="▦"
          title="专题练习"
          description="查看进度，选择一个 Topic 持续练习"
          detail={`${topicCount} 个 Topic`}
          accent="bg-emerald-100 text-emerald-700"
          onClick={onOpenTopics}
        />

        <PracticeCard
          icon="⚡"
          title="随机组卷"
          description="自选题数、Topic 和学习／考试模式"
          detail="5 / 10 / 20 / 自定"
          accent="bg-amber-100 text-amber-700"
          onClick={onOpenRandom}
        />
      </div>
    </div>
  );
}
