import type { PracticeSession } from '../types';
import { formatTime } from '../utils/helpers';

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

  return (
    <div className="mx-auto max-w-xl py-4 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">
        {accuracy >= 80 ? '🎉' : accuracy >= 60 ? '💪' : '🌱'}
      </div>
      <h1 className="mt-5 text-2xl font-bold text-gray-900">本次练习完成</h1>
      <p className="mt-2 text-sm text-gray-500">每完成一组，都会让知识结构更清晰一点。</p>

      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:grid-cols-4">
        <div>
          <p className="text-2xl font-bold text-gray-900">{denominator}</p>
          <p className="mt-1 text-xs text-gray-500">答题数</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-600">{accuracy}%</p>
          <p className="mt-1 text-xs text-gray-500">正确率</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{formatTime(session.elapsedSeconds)}</p>
          <p className="mt-1 text-xs text-gray-500">总用时</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-rose-600">{wrongQuestionIds.length}</p>
          <p className="mt-1 text-xs text-gray-500">本次错题</p>
        </div>
      </div>

      {unanswered > 0 && (
        <p className="mt-3 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          本次有 {unanswered} 题未作答，已计入本次正确率，但没有加入错题本。
        </p>
      )}

      <p className="mt-4 text-sm text-gray-500">当前待复习错题：{remainingMistakeCount} 题</p>

      <div className="mt-6 space-y-3">
        {wrongQuestionIds.length > 0 && (
          <button
            type="button"
            onClick={() => onReviewMistakes(wrongQuestionIds)}
            className="w-full rounded-xl bg-rose-600 px-6 py-4 font-bold text-white hover:bg-rose-700"
          >
            复习本次错题
          </button>
        )}
        <button
          type="button"
          onClick={onAgain}
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
        >
          再来一组
        </button>
        <button
          type="button"
          onClick={onHome}
          className="w-full rounded-xl bg-gray-100 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-200"
        >
          返回首页
        </button>
      </div>
    </div>
  );
}
