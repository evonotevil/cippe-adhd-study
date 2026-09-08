import type { PracticeSession } from '../types';
import { formatTime } from '../utils/helpers';
import { getLongestCorrectStreak } from '../utils/streak';
import { Celebration, ScoreRing } from './ui/Celebration';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';

interface ResultViewProps {
  session: PracticeSession;
  remainingMistakeCount: number;
  onReviewMistakes: (questionIds: number[]) => void;
  onAgain: () => void;
  onHome: () => void;
}

export function ResultView({
  session,
  remainingMistakeCount,
  onReviewMistakes,
  onAgain,
  onHome,
}: ResultViewProps) {
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

  return (
    <div className="mx-auto max-w-xl py-4 text-center">
      <div className="relative mx-auto w-fit">
        {accuracy >= 75 && <Celebration />}
        <div className="relative z-10 rounded-full bg-surface p-2 shadow-[0_6px_20px_var(--ui-shadow-color)]">
          <ScoreRing value={accuracy} />
        </div>
      </div>

      <h1 className="mt-6 text-3xl font-black tracking-[-0.025em] text-ink">这一组完成了</h1>
      <p className="mx-auto mt-2 max-w-md text-sm font-semibold leading-relaxed text-muted">{encouragement}</p>

      <section aria-label="练习结果" className="mt-7 grid grid-cols-2 overflow-hidden rounded-[1.25rem] border-2 border-line bg-surface">
        <div className="border-b-2 border-r-2 border-line p-4">
          <p className="text-xl font-black tabular-nums text-ink">{denominator}</p>
          <p className="mt-1 text-xs font-bold text-muted">答题数</p>
        </div>
        <div className="border-b-2 border-line p-4">
          <p className="text-xl font-black tabular-nums text-brand-strong">{accuracy}%</p>
          <p className="mt-1 text-xs font-bold text-muted">正确率</p>
        </div>
        <div className="border-r-2 border-line p-4">
          <p className="text-xl font-black tabular-nums text-info-accent">{formatTime(session.elapsedSeconds)}</p>
          <p className="mt-1 text-xs font-bold text-muted">总用时</p>
        </div>
        <div className="p-4">
          <p className="inline-flex items-center gap-1 text-xl font-black tabular-nums text-warning-ink">
            <Icon name="bolt" size={20} />
            {longestStreak}
          </p>
          <p className="mt-1 text-xs font-bold text-muted">最长连对</p>
        </div>
      </section>

      {unanswered > 0 && (
        <p className="mt-4 flex items-start gap-2 rounded-2xl bg-warning-soft px-4 py-3 text-left text-sm font-bold leading-relaxed text-warning-ink">
          <Icon name="flag" size={19} className="mt-0.5 shrink-0" />
          <span>有 {unanswered} 题未作答，已计入本次成绩，但没有加入错题本。</span>
        </p>
      )}

      <p className="mt-4 text-sm font-bold text-muted">当前待复习错题：{remainingMistakeCount} 题</p>

      <div className="mt-7 space-y-3">
        {wrongQuestionIds.length > 0 && (
          <Pressable
            variant="danger"
            size="lg"
            block
            onClick={() => onReviewMistakes(wrongQuestionIds)}
            leading={<Icon name="refresh" size={21} />}
          >
            复习本次错题（{wrongQuestionIds.length}）
          </Pressable>
        )}
        <Pressable
          variant="primary"
          size="lg"
          block
          onClick={onAgain}
          leading={<Icon name="rotate" size={21} />}
        >
          再来一组
        </Pressable>
        <Pressable variant="ghost" size="lg" block onClick={onHome}>
          返回首页
        </Pressable>
      </div>
    </div>
  );
}
