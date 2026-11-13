import type { PracticeSession } from '../types';
import { formatTime } from '../utils/helpers';
import { getLongestCorrectStreak } from '../utils/streak';
import { Celebration } from './ui/Celebration';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { usePendingAction } from '../hooks/usePendingAction';
import resultBack from '../assets/v2/shell-back.svg';
import resultTimer from '../assets/v2/shell-timer.svg';
import resultBook from '../assets/v2/result-book.svg';
import resultSparkles from '../assets/v2/result-sparkles.svg';
import './practice-v2.css';

interface ResultViewProps {
  session: PracticeSession;
  remainingMistakeCount: number;
  onReviewMistakes: (questionIds: number[]) => void | Promise<void>;
  onAgain: () => void | Promise<void>;
  onHome: () => void;
  onPlan?: () => void;
  onOpenTimer?: () => void;
  studyDayCompleted?: boolean;
}

export function ResultView({
  session,
  remainingMistakeCount,
  onReviewMistakes,
  onAgain,
  onHome,
  onPlan,
  onOpenTimer,
  studyDayCompleted,
}: ResultViewProps) {
  const { pendingKey, run } = usePendingAction();
  const correct = session.attempts.filter((attempt) => attempt.isCorrect).length;
  const denominator = session.mode === 'exam' ? session.items.length : session.attempts.length;
  const accuracy = denominator > 0 ? Math.round((correct / denominator) * 100) : 0;
  const wrongQuestionIds = Array.from(
    new Set(
      session.attempts
        .filter((attempt) => !attempt.isCorrect)
        .map((attempt) => attempt.questionId),
    ),
  );
  const unanswered = session.mode === 'exam' ? session.items.length - session.attempts.length : 0;
  const longestStreak = getLongestCorrectStreak(session.items, session.attempts);
  const encouragement = accuracy >= 90
    ? '知识点连接得很稳，继续保持这个节奏。'
    : accuracy >= 75
      ? '不错，这一组已经建立起清晰的记忆。'
      : '完成比完美更重要，错题会带你找到下一步。';

  const returnToPrevious = onPlan ?? onHome;
  const metrics = [
    { label: '正确率', value: `${accuracy}%` },
    { label: '总用时', value: formatTime(session.elapsedSeconds) },
    { label: '本次错题', value: wrongQuestionIds.length },
    { label: '最长连对', value: longestStreak },
  ];

  return (
    <div className="practice-screen mx-auto max-w-2xl">
      <header className="quiz-safe-top flex items-center gap-3 pb-3">
        <button
          type="button"
          onClick={returnToPrevious}
          aria-label={onPlan ? '返回学习路线' : '返回首页'}
          className="grid size-11 shrink-0 place-items-center rounded-xl hover:bg-surface-soft"
        >
          <img src={resultBack} alt="" width={24} height={24} />
        </button>
        <p className="flex-1 text-base font-bold text-ink">练习结果</p>
        {onOpenTimer && (
          <button
            type="button"
            onClick={onOpenTimer}
            aria-label="打开专注计时"
            className="grid size-11 shrink-0 place-items-center rounded-xl hover:bg-surface-soft"
          >
            <img src={resultTimer} alt="" width={24} height={24} />
          </button>
        )}
      </header>

      <div className="space-y-5 pb-6 pt-5">
        <div className="quiz-study-book mx-auto">
          {accuracy >= 75 && <Celebration />}
          <img className="absolute left-[34px] top-[20px]" src={resultBook} alt="" width={89} height={104.333} />
          <img className="absolute left-[10.5px] top-8" src={resultSparkles} alt="" width={140.5} height={65.5} />
        </div>
        <h1 className="text-center text-[length:calc(var(--type-section,1.5rem)+2px)] font-bold leading-[36px] text-ink">这一组，完成了！</h1>
        <p className="text-center text-sm leading-[22px] text-muted">{encouragement}</p>

        <p className="flex items-start justify-center gap-2 rounded-[20px] border-2 border-brand-line bg-brand-soft p-4 text-brand-strong">
          <span className="text-[2.5rem] font-extrabold leading-[48px] tabular-nums [font-family:var(--font-display)]">{session.attempts.length}</span>
          <span className="pt-0.5 text-base font-bold">题完成</span>
        </p>

        <dl aria-label="练习结果" className="grid grid-cols-2 gap-x-3 gap-y-5">
          {metrics.map(({ label, value }) => (
            <div key={label} className="flex flex-col-reverse gap-3 rounded-2xl border-2 border-line bg-surface p-4">
              <dt className="text-xs font-medium leading-[18px] text-muted">{label}</dt>
              <dd className="break-words text-[2rem] font-extrabold leading-[40px] tabular-nums [font-family:var(--font-display)] text-brand-strong">{value}</dd>
            </div>
          ))}
        </dl>

        {unanswered > 0 && (
          <p className="flex items-start gap-2 rounded-[20px] border-2 border-warning-line bg-warning-soft p-4 text-left text-sm leading-[22px] text-warning-ink">
            <Icon name="flag" size={18} className="mt-0.5 shrink-0" />
            <span>有 {unanswered} 题未作答，已计入本次成绩，但没有加入错题本。</span>
          </p>
        )}

        {onPlan ? (
          <div className="space-y-2 rounded-[20px] border-2 border-info-line bg-info-soft p-4 text-info-accent">
            <p className="flex items-center gap-2 text-base font-bold">
              {studyDayCompleted && <Icon name="check" size={17} />}
              第 {session.studyDay} 天{studyDayCompleted ? '已完成' : '尚未完成'}
            </p>
            <p className="text-sm leading-[22px]">
              {studyDayCompleted ? (wrongQuestionIds.length ? '继续路线，或者先把这次错题练会。' : '这一组没有错题，可以继续学习路线。') : '答完本组全部题目后，才会标记这一天完成。'}
            </p>
          </div>
        ) : (
          <p className="text-center text-sm font-medium text-muted">当前待复习错题：{remainingMistakeCount} 题</p>
        )}
      </div>

      <div className="quiz-footer-edge quiz-safe-bottom mt-auto space-y-3 border-t-2 border-line bg-surface pt-4">
        <Pressable variant="featured" size="lg" block onClick={returnToPrevious}>
          {onPlan ? '返回学习路线' : '返回首页'}
        </Pressable>
        {wrongQuestionIds.length > 0 && (
          <Pressable
            variant="neutral"
            size="lg"
            block
            loading={pendingKey === 'review'}
            onClick={() => { void run('review', () => onReviewMistakes(wrongQuestionIds)); }}
          >
            复习本次错题（{wrongQuestionIds.length}）
          </Pressable>
        )}
        <button
          type="button"
          aria-busy={pendingKey === 'again'}
          disabled={pendingKey !== null}
          onClick={() => { void run('again', onAgain); }}
          className="flex min-h-11 items-center rounded-md text-xs font-medium text-info-accent"
        >
          {pendingKey === 'again' ? '正在准备题目…' : '再来一组 →'}
        </button>
      </div>
    </div>
  );
}
