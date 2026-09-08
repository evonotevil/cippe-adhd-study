import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { PracticeMode, Question } from '../types';
import { useSound } from '../hooks/useSound';
import { parseQuestionText, scenarioLength, splitOption } from '../utils/questionText';
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

function parseExplanation(explanation: string) {
  const normalized = explanation
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]*\n[ \t]*/g, '')
    .replace(/[ \t]+/g, ' ')
    .trim();
  const knowledgeMatch = normalized.match(/知\s*识\s*点\s*[：:]\s*/);
  const knowledgeIndex = knowledgeMatch?.index ?? -1;
  const analysis = (knowledgeIndex >= 0 ? normalized.slice(0, knowledgeIndex) : normalized).trim();
  const memoryCue = knowledgeMatch
    ? normalized.slice(knowledgeIndex + knowledgeMatch[0].length).trim()
    : '';
  const ruleText = analysis
    .replace(/^正确\s*答案\s*[A-D]\s*[。．.]\s*/i, '')
    .replace(/^答案\s*[A-D]\s*[：:。．.]\s*/i, '')
    .trim();
  const firstSentenceEnd = ruleText.search(/[。！？]/);
  const summary = firstSentenceEnd >= 0 ? ruleText.slice(0, firstSentenceEnd + 1) : ruleText;
  const details = firstSentenceEnd >= 0 ? ruleText.slice(firstSentenceEnd + 1).trim() : '';

  return {
    summary: summary || memoryCue || normalized,
    memoryCue: summary ? memoryCue : '',
    details,
  };
}

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
  const nextActionRef = useRef<HTMLDivElement>(null);
  const { playCorrect, playWrong } = useSound(soundEnabled);
  const isCorrect = selectedAnswer === question.correctAnswer;
  const explanation = parseExplanation(question.explanation);
  const parsed = parseQuestionText(question.question);
  // 短的引子直接顺着排；长材料才值得单独成块。
  const hasLongScenario = scenarioLength(parsed.scenario) >= 160;
  const visibleOptions = showResult
    ? question.options.filter((option) => {
        const answer = option.charAt(0);
        return answer === selectedAnswer || answer === question.correctAnswer;
      })
    : question.options;

  useEffect(() => {
    if (!showResult) return;
    const frame = window.requestAnimationFrame(() => {
      nextActionRef.current?.scrollIntoView({
        block: 'nearest',
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [question.id, reduceMotion, showResult]);

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
        {/* 提问放在最前：先知道要找什么，再读材料。 */}
        <h1
          id={`question-${question.id}`}
          className="max-w-[62ch] text-balance text-lg font-bold leading-[1.65] tracking-[-0.008em] text-ink sm:text-xl"
        >
          {parsed.prompt}
        </h1>

        {parsed.scenario.length > 0 && (
          hasLongScenario ? (
            <section
              aria-label="情景材料"
              className="mt-4 rounded-[1.25rem] border-2 border-line bg-surface-soft p-4"
            >
              <p className="mb-2 flex items-center gap-1.5 text-xs font-extrabold text-muted">
                <Icon name="pages" size={15} />
                情景材料 · 约 {Math.round(scenarioLength(parsed.scenario) / 10) * 10} 字
              </p>
              <div className="space-y-3">
                {parsed.scenario.map((paragraph, index) => (
                  <p
                    key={index}
                    className="max-w-[68ch] whitespace-pre-line break-words text-sm font-medium leading-[1.75] text-ink"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ) : (
            <div className="mt-3 space-y-2">
              {parsed.scenario.map((paragraph, index) => (
                <p key={index} className="max-w-[62ch] whitespace-pre-line break-words text-base font-semibold leading-[1.7] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          )
        )}
      </header>

      <div className="mb-6 space-y-3" role="group" aria-label="答案选项">
        {visibleOptions.map((option) => {
          const { letter: answer, text: optionText } = splitOption(option);
          const state = getOptionState(answer);
          const resultIcon = state === 'correct' ? 'check' : state === 'wrong' ? 'x' : null;

          return (
            <m.button
              type="button"
              key={`${question.id}-${answer}`}
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
              className={`flex min-h-[68px] w-full items-start gap-3 rounded-2xl border-2 px-4 py-3.5 text-left font-semibold transition-[transform,box-shadow,border-color,background-color,color] duration-150 active:translate-y-[3px] active:shadow-none ${optionStyles[state]}`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black ${badgeStyles[state]}`}>
                {resultIcon ? <Icon name={resultIcon} size={21} /> : answer}
              </span>
              <span className="min-w-0 flex-1 self-center break-words leading-[1.7]">{optionText}</span>
            </m.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {showResult && (
          <m.section
            key={isCorrect ? 'correct-feedback' : 'wrong-feedback'}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.08 : 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6 rounded-[1.25rem] border-2 border-line bg-surface p-4 text-ink shadow-[0_4px_0_var(--ui-line-strong)] sm:p-5"
          >
            <div className="relative z-10">
              <div role="status" aria-live="polite" aria-atomic="true">
                <div className="flex items-start gap-3">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${isCorrect ? 'bg-brand text-brand-ink' : 'bg-danger text-white'}`}>
                    <Icon name={isCorrect ? 'check' : 'x'} size={25} />
                  </span>
                  <div className="min-w-0 flex-1">
                    {isCorrect ? (
                      <StreakFeedbackBadge streak={Math.max(1, correctStreak)} />
                    ) : (
                      <>
                        <h2 className="text-lg font-black text-danger-ink">答案需要调整</h2>
                        <p className="mt-1 text-sm font-bold">正确答案是 {question.correctAnswer}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-extrabold text-muted">先记这一条</p>
                  <p className="mt-1 max-w-[68ch] break-words text-sm font-semibold leading-[1.75] text-ink">
                    {explanation.summary}
                  </p>
                </div>
              </div>
              {explanation.memoryCue && (
                <p className="mt-3 max-w-[68ch] break-words rounded-xl bg-surface-soft px-3 py-2 text-sm font-medium leading-[1.75] text-ink">
                  <span className="font-extrabold">知识点：</span>
                  {explanation.memoryCue}
                </p>
              )}
            </div>
            <div ref={nextActionRef} className="relative z-10 mt-5 scroll-mb-4">
              <Pressable
                variant="primary"
                size="lg"
                block
                onClick={onNext}
                trailing={<Icon name="arrow-right" size={20} />}
              >
                下一题
              </Pressable>
            </div>
            {explanation.details && (
              <details className="relative z-10 mt-4 border-t border-line pt-3 text-sm">
                <summary className="min-h-11 cursor-pointer rounded-lg px-2 py-3 font-extrabold text-muted transition-colors hover:bg-surface-soft hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info">
                  展开完整分析
                </summary>
                <p className="max-w-[68ch] break-words px-2 pb-1 pt-2 font-medium leading-[1.75] text-ink">
                  {explanation.details}
                </p>
              </details>
            )}
          </m.section>
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
