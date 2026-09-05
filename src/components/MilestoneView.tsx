import type { PracticeSession } from '../types';

interface MilestoneViewProps {
  session: PracticeSession;
  onContinue: () => void;
  onFinish: () => void;
}

export function MilestoneView({ session, onContinue, onFinish }: MilestoneViewProps) {
  const correct = session.attempts.filter((attempt) => attempt.isCorrect).length;
  const accuracy = session.attempts.length > 0
    ? Math.round((correct / session.attempts.length) * 100)
    : 0;
  const scope = session.topic ?? '全题库';

  return (
    <div className="mx-auto max-w-xl py-6 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl">
        ✓
      </div>
      <h1 className="mt-5 text-2xl font-bold text-gray-900">
        {session.phase === 'new' ? '未做题已完成' : '本轮巩固已完成'}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        你已完成 {scope} 当前阶段的题目，可以继续巩固，也可以先结束休息。
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div>
          <p className="text-2xl font-bold text-gray-900">{session.attempts.length}</p>
          <p className="mt-1 text-xs text-gray-500">本次答题</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-600">{accuracy}%</p>
          <p className="mt-1 text-xs text-gray-500">本次正确率</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          type="button"
          onClick={onContinue}
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
        >
          继续巩固
        </button>
        <button
          type="button"
          onClick={onFinish}
          className="w-full rounded-xl bg-gray-100 px-6 py-4 font-semibold text-gray-700 hover:bg-gray-200"
        >
          结束并查看结果
        </button>
      </div>
    </div>
  );
}
