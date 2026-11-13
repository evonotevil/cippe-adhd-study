import { useState } from 'react';
import type { Question } from '../types';
import { usePendingAction } from '../hooks/usePendingAction';
import { parseQuestionText } from '../utils/questionText';
import { Chip } from './ui/Chip';
import { Pressable } from './ui/Pressable';

interface MistakeReviewProps {
  questions: Question[] | null;
  pendingMistakeIds: number[];
  recentMistakeIds?: number[];
  recentAnswers?: Readonly<Record<number, string>>;
  onBack?: () => void;
  onStart: (ids: number[]) => void | Promise<void>;
}

const PREVIEW_COUNT = 3;

function getKeyPoint(explanation: string) {
  const normalized = explanation.replace(/\s*\r?\n\s*/g, '').trim();
  const cue = normalized.match(/知\s*识\s*点\s*[:：]\s*(.+)$/)?.[1];
  return cue || normalized.replace(/^正确\s*答案\s*[A-D]\s*[。．.：:]\s*/i, '');
}

export function MistakeReview({ questions, pendingMistakeIds, recentMistakeIds = [], recentAnswers, onStart }: MistakeReviewProps) {
  const [mode, setMode] = useState<'recent' | 'all'>(recentMistakeIds.length ? 'recent' : 'all');
  const [showAll, setShowAll] = useState(false);
  const { pendingKey, run } = usePendingAction();
  const ids = mode === 'recent' ? recentMistakeIds : pendingMistakeIds;
  const bank = new Map(questions?.map((question) => [question.id, question]));
  const mistakes = ids.flatMap((id) => {
    const question = bank.get(id);
    return question ? [question] : [];
  });

  function switchMode(next: typeof mode) {
    setMode(next);
    setShowAll(false);
  }

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header className="space-y-5">
        <h1 className="text-[26px] font-bold leading-9 text-ink">把错题，变成进步。</h1>
        <p className="text-sm leading-[22px] text-muted">答错的题会自动收集，不用手动整理。</p>
      </header>

      <div className="grid grid-cols-2 gap-2" aria-label="错题范围" role="group">
        <Chip aria-pressed={mode === 'recent'} onClick={() => switchMode('recent')}>
          本次错题（{recentMistakeIds.length}）
        </Chip>
        <Chip aria-pressed={mode === 'all'} onClick={() => switchMode('all')}>全部错题</Chip>
      </div>

      {mistakes.length > 0 && (
        <section className="space-y-2 rounded-[20px] border-2 border-warning-line bg-warning-soft p-5 text-warning-ink">
          <h2 className="text-base font-bold leading-6">{mode === 'recent' ? '这一组，有' : '错题本里，有'} {mistakes.length} 个补强机会</h2>
          <p className="text-sm leading-[22px]">先看错因，再练一次。猜对但不确定的知识点，也值得回顾。</p>
        </section>
      )}

      {mistakes.length === 0 && (
        <p className="rounded-[20px] border-2 border-line bg-surface p-5 text-sm leading-[22px] text-muted" role="status">
          {questions === null && ids.length > 0 ? '正在加载错题…' : mode === 'recent' ? '最近一组练习没有错题。' : '暂时没有需要回顾的错题。'}
        </p>
      )}

      {(showAll ? mistakes : mistakes.slice(0, PREVIEW_COUNT)).map((question) => (
        <article key={question.id} className="space-y-4 rounded-[20px] border-2 border-line bg-surface p-5">
          <p className="text-xs font-medium leading-[18px] text-info-accent">{question.topic}</p>
          <h2 lang="en" className="app-question text-ink [overflow-wrap:anywhere]">
            {parseQuestionText(question.question).prompt}
          </h2>
          <p className="text-sm font-bold leading-[22px] text-danger-accent">
            {recentAnswers?.[question.id] ? `你的答案 ${recentAnswers[question.id]} · ` : ''}正确答案 {question.correctAnswer}
          </p>
          <p className="line-clamp-3 text-sm leading-[22px] text-muted">关键：{getKeyPoint(question.explanation)}</p>
          {mistakes.length > 1 && (
            <button
              type="button"
              onClick={() => void run(String(question.id), () => onStart([question.id]))}
              disabled={pendingKey !== null}
              className="min-h-11 text-xs font-medium text-info-accent hover:underline"
            >
              单独复习这题 →
            </button>
          )}
        </article>
      ))}

      {!showAll && mistakes.length > PREVIEW_COUNT && (
        <button type="button" className="min-h-11 text-sm font-medium text-info-accent hover:underline" onClick={() => setShowAll(true)}>
          查看全部 {mistakes.length} 道错题 →
        </button>
      )}

      <Pressable
        variant="featured"
        size="lg"
        block
        className="min-h-14"
        disabled={mistakes.length === 0 || (pendingKey !== null && pendingKey !== 'all')}
        loading={pendingKey === 'all'}
        onClick={() => void run('all', () => onStart(mistakes.map(({ id }) => id)))}
      >
        {mode === 'recent' ? '复习本次错题' : '复习全部错题'}（{mistakes.length}）
      </Pressable>

      <p className="text-xs leading-[18px] text-muted">回到「备考」，也可以继续下一课。</p>
    </div>
  );
}
