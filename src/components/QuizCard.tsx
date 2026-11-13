import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { PracticeMode, Question } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSound } from '../hooks/useSound';
import { parseQuestionText, scenarioLength, splitOption } from '../utils/questionText';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';

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
  onPrevious?: () => void;
  /**
   * 当前题在「同一段情景背景」的连续区间里的位置。null 表示这题的背景不与别人共享。
   * missing 是这一组里没被排进本次练习的题数（专题练习按 Topic 过滤时会切开跨 Topic 的组）。
   */
  scenarioRun?: { position: number; total: number; missing: number } | null;
}

type OptionState = 'idle' | 'selected' | 'correct' | 'wrong' | 'disabled';

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
  onPrevious,
  scenarioRun,
}: QuizCardProps) {
  const reduceMotion = useReducedMotion();
  const feedbackRef = useRef<HTMLElement>(null);
  const { playCorrect, playWrong } = useSound(soundEnabled);
  // 「连对两次才移出错题本」是这个 App 的核心机制，但界面从未解释过。
  // 第一次答错时讲一遍，之后不再打扰。
  const [ruleExplained, setRuleExplained] = useLocalStorage('cippe-mistake-rule-seen', false);
  const isCorrect = selectedAnswer === question.correctAnswer;
  const explanation = parseExplanation(question.explanation);
  const parsed = parseQuestionText(question.question);
  const showRuleHint = showResult && !isCorrect && !ruleExplained;
  // 短的引子直接顺着排；长材料才值得单独成块。
  const hasLongScenario = scenarioLength(parsed.scenario) >= 160;
  // 同一情景的第二题起，背景默认收起 —— 刚读完的两千字不该再铺一遍。
  // 换题时 key 变了，组件重挂载，这个默认值会重新按新题算一次。
  const [scenarioOpen, setScenarioOpen] = useState(!scenarioRun || scenarioRun.position === 1);
  const roundedScenarioChars = Math.round(scenarioLength(parsed.scenario) / 10) * 10;
  // 四个选项始终都在。解析里会逐个点评（"C 混淆了…；D 遗漏了…"），
  // 保留未选中的选项，便于对照完整解析。
  const visibleOptions = question.options;

  useEffect(() => {
    if (!showResult) return;
    const frame = window.requestAnimationFrame(() => {
      feedbackRef.current?.scrollIntoView({
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
      return 'disabled';
    }
    return answer === selectedAnswer ? 'selected' : 'idle';
  };

  const optionStyles: Record<OptionState, string> = {
    idle: 'border-line bg-surface hover:enabled:border-info',
    selected: 'border-info bg-info-soft',
    correct: 'border-brand-strong bg-brand-soft',
    wrong: 'border-danger bg-danger-soft',
    disabled: 'border-line bg-surface-soft text-muted',
  };

  const badgeStyles: Record<OptionState, string> = {
    idle: 'border-line',
    selected: 'border-line',
    correct: 'border-brand-strong',
    wrong: 'border-danger',
    disabled: 'border-line',
  };

  const handleSubmit = () => {
    if (!selectedAnswer || showResult) return;
    if (isCorrect) playCorrect(correctStreak + 1);
    else playWrong();
    onSubmit();
  };

  const handleAdvance = () => {
    if (showRuleHint) setRuleExplained(true);
    onNext();
  };

  return (
    <article className="flex w-full flex-1 flex-col" aria-labelledby={`question-${question.id}`}>
      <header className="mb-4">
        <p className="mb-4 text-xs leading-[18px] font-medium text-info-accent">{question.topic.replaceAll('/', ' / ')}</p>
        {/* 提问放在最前：先知道要找什么，再读材料。 */}
        <h1
          id={`question-${question.id}`}
          lang="en"
          className="app-question max-w-[62ch] break-words text-ink [text-wrap:wrap]"
        >
          {parsed.prompt}
        </h1>

        {parsed.scenario.length > 0 && (
          hasLongScenario ? (
            <section
              aria-label="情景材料"
              className="mt-4 rounded-[1.25rem] border-2 border-line bg-surface-soft p-4"
            >
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                {/* 收起状态下字数写在正文里，标题栏就让给「第几题」和展开按钮，一行放得下。 */}
                {scenarioOpen && (
                  <p className="flex items-center gap-1.5 text-xs font-extrabold text-muted">
                    <Icon name="pages" size={15} />
                    情景材料 · 约 {roundedScenarioChars} 字
                  </p>
                )}
                {scenarioRun && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-[0.6875rem] font-extrabold text-brand-soft-ink">
                    <Icon name="pages" size={13} />
                    同一情景 · 第 {scenarioRun.position} / {scenarioRun.total} 题
                  </span>
                )}
                {/* 读过一遍的背景不该再占满整屏。收起后仍然一键可取回。 */}
                {scenarioRun && scenarioRun.position > 1 && (
                  <button
                    type="button"
                    onClick={() => setScenarioOpen((open) => !open)}
                    aria-expanded={scenarioOpen}
                    // 44px 的可点高度 + brand-soft 底色：护眼主题下 brand-strong 压在
                    // surface-soft 上只有 4.25:1，配上 soft-ink 才够 4.5。
                    className="ml-auto inline-flex min-h-11 items-center rounded-full border-2 border-transparent bg-brand-soft px-3.5 text-xs font-extrabold text-brand-soft-ink hover:border-brand"
                  >
                    {scenarioOpen ? '收起背景' : '展开背景'}
                  </button>
                )}
              </div>
              {scenarioOpen ? (
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
              ) : (
                <p className="text-sm font-medium leading-[1.75] text-muted">
                  背景和上一题相同（约 {roundedScenarioChars} 字），已收起。
                </p>
              )}
              {scenarioRun && scenarioRun.missing > 0 && (
                // 专题练习按 Topic 过滤，会把跨 Topic 的情景组切开。说清楚，别假装完整。
                <p className="mt-3 border-t-2 border-line pt-2.5 text-xs font-semibold text-muted">
                  这个情景在题库里共 {scenarioRun.total + scenarioRun.missing} 题，
                  另外 {scenarioRun.missing} 题在其他 Topic 下。
                </p>
              )}
            </section>
          ) : (
            <div className="mt-3 space-y-2">
              {parsed.scenario.map((paragraph, index) => (
                <p lang="en" key={index} className="app-exam-font max-w-[62ch] whitespace-pre-line break-words text-base font-semibold leading-[1.7] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          )
        )}
      </header>

      <div className="space-y-3 pb-6" role="group" aria-label="答案选项">
        {visibleOptions.map((option) => {
          const { letter: answer, text: optionText } = splitOption(option);
          const state = getOptionState(answer);
          const resultLabel = state === 'correct' ? '正确答案' : state === 'wrong' ? '错误选项' : null;

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
              className={`flex min-h-[76px] w-full items-center gap-3 rounded-2xl border-2 p-3 text-left transition-colors duration-150 ${state === 'disabled' ? '' : 'text-ink'} ${optionStyles[state]}`}
            >
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-bold ${badgeStyles[state]}`}>
                {answer}
              </span>
              <span lang="en" className="app-answer min-w-0 flex-1 break-words">
                {resultLabel && <span className="sr-only">，{resultLabel}：</span>}
                {optionText}
              </span>
            </m.button>
          );
        })}
      </div>

      <AnimatePresence initial={false}>
        {showResult && (
          <m.section
            key="answer-feedback"
            ref={feedbackRef}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.18 }}
            className="quiz-footer-edge mt-auto scroll-mb-32 border-t-2 border-line pt-4"
          >
            <div
              role="status"
              aria-live="polite"
              aria-atomic="true"
              className={`space-y-3 rounded-2xl border-2 p-5 ${isCorrect ? 'border-brand-line bg-brand-soft text-brand-strong' : 'border-danger-line bg-danger-soft text-danger-accent'}`}
            >
              <h2 className="flex items-center gap-2 text-base font-bold">
                <Icon name={isCorrect ? 'check' : 'x'} size={18} className="shrink-0" />
                {isCorrect ? '回答正确' : '没关系，这题一起记住'}
              </h2>
              <p className="break-words text-sm leading-[22px]">
                {!isCorrect && <>正确答案 {question.correctAnswer} · </>}{explanation.summary}
              </p>
            </div>
          </m.section>
        )}
      </AnimatePresence>

      {mode === 'study' && (
        <div
          className={`quiz-footer-edge quiz-safe-bottom sticky bottom-0 z-10 bg-surface ${showResult ? 'pt-3' : 'mt-auto border-t-2 border-line pt-4'}`}
        >
          {showResult ? (
            <>
              {(explanation.details || explanation.memoryCue || showRuleHint) && (
                <details className="mb-2 text-sm">
                  <summary className="w-fit cursor-pointer rounded-md py-2 font-semibold text-muted">
                    展开完整分析
                  </summary>
                  <div className="max-h-[35dvh] space-y-2 overflow-y-auto overscroll-contain break-words pb-2 leading-relaxed text-ink">
                    {explanation.details && <p>{explanation.details}</p>}
                    {explanation.memoryCue && <p><b>知识点：</b>{explanation.memoryCue}</p>}
                    {showRuleHint && (
                      <p className="rounded-lg bg-info-soft px-3 py-2 text-info-ink">
                        这道题已进入错题本。之后连续答对两次，它就会自动移出。
                      </p>
                    )}
                  </div>
                </details>
              )}
              <div className="flex gap-3">
                {onPrevious && (
                  <Pressable variant="neutral" size="lg" onClick={onPrevious} aria-label="上一题" className="shrink-0 px-4">
                    <Icon name="arrow-left" size={19} />
                  </Pressable>
                )}
                <Pressable
                  variant="featured"
                  size="lg"
                  block
                  onClick={handleAdvance}
                  trailing={<Icon name="arrow-right" size={17} />}
                >
                  下一题
                </Pressable>
              </div>
            </>
          ) : (
            <>
              <Pressable variant="featured" size="lg" block onClick={handleSubmit} disabled={!selectedAnswer}>
                检查答案
              </Pressable>
              <button type="button" onClick={onSkip} className="mt-3 flex min-h-11 items-center rounded-md text-xs font-medium text-muted">
                暂时跳过这一题 →
              </button>
            </>
          )}
        </div>
      )}
    </article>
  );
}
