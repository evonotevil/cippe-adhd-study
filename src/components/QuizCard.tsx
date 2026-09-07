import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { PracticeMode, Question } from '../types';
import { useSound } from '../hooks/useSound';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { StreakFeedbackBadge } from './ui/StreakFeedback';

interface QuizCardProps {
  question: Question;
  mode: PracticeMode;
  selectedAnswer: string | null;
  showResult: boolean;
  soundEnabled: boolean;
  correctStreak: number;
  onSelect: (answer: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
  onNext: () => void;
}

type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'muted';

export function QuizCard({
  question,
  mode,
  selectedAnswer,
  showResult,
  soundEnabled,
  correctStreak,
  onSelect,
  onSubmit,
  onSkip,
  onNext,
}: QuizCardProps) {
  const reduceMotion = useReducedMotion();
  const { playCorrect, playWrong } = useSound(soundEnabled);
  const isCorrect = selectedAnswer === question.correctAnswer;

  const getOptionState = (answer: string): OptionState => {
    if (showResult) {
      if (answer === question.correctAnswer) return 'correct';
      if (answer === selectedAnswer) return 'wrong';
      return 'muted';
    }
    return answer === selectedAnswer ? 'selected' : 'idle';
  };

  const optionStyles: Record<OptionState, string> = {
    idle: 'border-line bg-surface text-ink shadow-[0_4px_0_var(--ui-line-strong)] hover:border-info',
    selected: 'border-info-shadow bg-info-soft text-info-ink shadow-[0_4px_0_var(--ui-info-shadow)]',
    correct: 'border-brand-shadow bg-brand-soft text-brand-soft-ink shadow-[0_4px_0_var(--ui-brand-shadow)]',
    wrong: 'border-danger-shadow bg-danger-soft text-danger-ink shadow-[0_4px_0_var(--ui-danger-shadow)]',
    muted: 'border-line bg-surface-soft text-muted shadow-[0_3px_0_var(--ui-line)] opacity-70',
  };

  const badgeStyles: Record<OptionState, string> = {
    idle: 'border-line-strong bg-surface-soft text-muted',
    selected: 'border-info-shadow bg-info text-white',
    correct: 'border-brand-shadow bg-brand text-brand-ink',
    wrong: 'border-danger-shadow bg-danger text-white',
    muted: 'border-line bg-surface text-faint',
  };

  const handleSubmit = () => {
    if (!selectedAnswer || showResult) return;
    if (isCorrect) playCorrect(correctStreak + 1);
    else playWrong();
    onSubmit();
  };

  return (
    <article className="mx-auto w-full max-w-2xl" aria-labelledby={`question-${question.id}`}>
      <header className="mb-6">
        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-info-soft px-3 py-1.5 text-xs font-extrabold text-info-ink">
          <Icon name="book" size={15} />
          {question.topic}
        </span>
        <h1
          id={`question-${question.id}`}
          className="whitespace-pre-wrap text-lg font-bold leading-[1.65] tracking-[-0.008em] text-ink sm:text-xl"
        >
          {question.question}
        </h1>
      </header>

      <div className="mb-6 space-y-3" role="group" aria-label="答案选项">
        {question.options.map((option, index) => {
          const answer = option.charAt(0);
          const state = getOptionState(answer);
          const resultIcon = state === 'correct' ? 'check' : state === 'wrong' ? 'x' : null;

          return (
            <motion.button
              type="button"
              key={`${question.id}-${index}`}
              aria-pressed={answer === selectedAnswer}
              onClick={() => onSelect(answer)}
              disabled={showResult}
              animate={
                !reduceMotion && state === 'wrong'
                  ? { x: [0, -3, 3, -2, 0] }
                  : !reduceMotion && state === 'correct'
                    ? { scale: [1, 1.015, 1] }
                    : { x: 0, scale: 1 }
              }
              transition={{ duration: state === 'wrong' ? 0.22 : 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex min-h-[68px] w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left font-semibold transition-[transform,box-shadow,border-color,background-color,color] duration-150 active:translate-y-[3px] active:shadow-none ${optionStyles[state]}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black ${badgeStyles[state]}`}>
                {resultIcon ? <Icon name={resultIcon} size={21} /> : answer}
              </span>
              <span className="min-w-0 flex-1 leading-relaxed">{option.slice(3)}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {showResult && (
          <motion.section
            key={isCorrect ? 'correct-feedback' : 'wrong-feedback'}
            role="status"
            aria-live="polite"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.08 : 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={`relative mb-6 overflow-hidden rounded-[1.25rem] border-2 p-4 sm:p-5 ${
              isCorrect
                ? 'border-brand-shadow bg-brand-soft text-brand-soft-ink'
                : 'border-danger-shadow bg-danger-soft text-danger-ink'
            }`}
          >
            <div className="relative z-10 flex items-start gap-3">
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${isCorrect ? 'bg-brand text-brand-ink' : 'bg-danger text-white'}`}>
                <Icon name={isCorrect ? 'check' : 'x'} size={25} />
              </span>
              <div className="min-w-0 flex-1">
                {isCorrect ? (
                  <StreakFeedbackBadge streak={Math.max(1, correctStreak)} />
                ) : (
                  <>
                    <h2 className="text-lg font-black">这题再记一下</h2>
                    <p className="mt-1 text-sm font-bold">正确答案是 {question.correctAnswer}</p>
                  </>
                )}
              </div>
            </div>
            <p className="relative z-10 mt-4 whitespace-pre-wrap text-sm font-medium leading-relaxed text-ink">
              {question.explanation}
            </p>
            <Pressable
              variant={isCorrect ? 'primary' : 'danger'}
              size="lg"
              block
              onClick={onNext}
              trailing={<Icon name="arrow-right" size={20} />}
              className="relative z-10 mt-5"
            >
              下一题
            </Pressable>
          </motion.section>
        )}
      </AnimatePresence>

      {mode === 'study' && !showResult && (
        <div className="mt-6 rounded-[1.25rem] border-2 border-line bg-surface p-3 shadow-[0_4px_0_var(--ui-line-strong)]">
          <div className="flex items-center gap-3">
            <Pressable variant="ghost" size="md" onClick={onSkip} className="shrink-0 px-3">
              暂时跳过
            </Pressable>
            <Pressable
              variant="primary"
              size="lg"
              block
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              检查答案
            </Pressable>
          </div>
        </div>
      )}
    </article>
  );
}
