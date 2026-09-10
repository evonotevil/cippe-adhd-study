import type { PracticeSession } from '../types';
import { Celebration, ScoreRing } from './ui/Celebration';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { usePendingAction } from '../hooks/usePendingAction';

interface MilestoneViewProps {
  session: PracticeSession;
  reinforcementCount: number | null;
  onContinue: () => void | Promise<void>;
  onFinish: () => void;
}

export function MilestoneView({ session, reinforcementCount, onContinue, onFinish }: MilestoneViewProps) {
  const { pendingKey, run } = usePendingAction();
  const correct = session.attempts.filter((attempt) => attempt.isCorrect).length;
  const accuracy = session.attempts.length > 0
    ? Math.round((correct / session.attempts.length) * 100)
    : 0;
  const scope = session.topic ?? '全题库';

  return (
    <div className="mx-auto max-w-xl py-5 text-center">
      <div className="relative mx-auto w-fit">
        <Celebration tone="brand" />
        <div className="relative z-10 rounded-full bg-surface p-2 shadow-[0_6px_20px_var(--ui-shadow-color)]">
          <ScoreRing value={accuracy} label="本轮正确率" />
        </div>
      </div>

      <p className="mt-6 text-sm font-extrabold text-brand-strong">阶段目标达成</p>
      <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">
        {session.phase === 'new' ? '新题已经刷完' : '这一轮巩固完成'}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-relaxed text-muted">
        你已完成 {scope} 当前阶段的题目。
        {reinforcementCount
          ? `继续巩固会把这个范围的 ${reinforcementCount} 题再过一轮，错题排在最前面。`
          : '可以趁记忆还热继续巩固，也可以先休息。'}
      </p>

      <div className="mt-7 flex items-center justify-center gap-8 border-y-2 border-line py-4">
        <div>
          <p className="text-2xl font-black tabular-nums text-ink">{session.attempts.length}</p>
          <p className="mt-1 text-xs font-bold text-muted">本次答题</p>
        </div>
        <div className="h-10 w-0.5 bg-line" aria-hidden="true" />
        <div>
          <p className="text-2xl font-black tabular-nums text-brand-strong">{correct}</p>
          <p className="mt-1 text-xs font-bold text-muted">回答正确</p>
        </div>
      </div>

      <div className="mt-7 space-y-3">
        <Pressable
          variant="primary"
          size="lg"
          block
          loading={pendingKey === 'continue'}
          onClick={() => { void run('continue', onContinue); }}
          leading={<Icon name="refresh" size={21} />}
        >
          继续巩固{reinforcementCount ? `（${reinforcementCount} 题）` : ''}
        </Pressable>
        <Pressable variant="neutral" size="lg" block onClick={onFinish}>
          结束并查看结果
        </Pressable>
      </div>
    </div>
  );
}
