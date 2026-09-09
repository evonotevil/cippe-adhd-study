import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { PracticeMode, Question } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
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
  onPrevious?: () => void;
  /**
   * 当前题在「同一段情景背景」的连续区间里的位置。null 表示这题的背景不与别人共享。
   * missing 是这一组里没被排进本次练习的题数（专题练习按 Topic 过滤时会切开跨 Topic 的组）。
   */
  scenarioRun?: { position: number; total: number; missing: number } | null;
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
  onPrevious,
  scenarioRun,
}: QuizCardProps) {
  const reduceMotion = useReducedMotion();
  const nextActionRef = useRef<HTMLDivElement>(null);
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
  // 把没选中的错项藏起来会让那段分析无从对照。错项用 muted 弱化即可。
  const visibleOptions = question.options;

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
    // 不用 opacity 压暗：整体透明度会把文字和底色一起拉向页面底色，实测只剩 3:1。
    // 弱化交给 muted 墨色和更浅的边框即可。
    muted: 'border-line bg-surface-soft text-muted shadow-[0_3px_0_var(--ui-line)]',
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

  const handleAdvance = () => {
    if (showRuleHint) setRuleExplained(true);
    onNext();
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
              {!isCorrect && showRuleHint && (
                <p className="mt-3 flex items-start gap-2 rounded-xl bg-info-soft px-3 py-2.5 text-sm font-semibold leading-relaxed text-info-ink">
                  <Icon name="refresh" size={17} className="mt-0.5 shrink-0" />
                  <span>这道题已进入错题本。之后<b className="font-black">连续答对两次</b>，它才会自动移出 —— 一次蒙对不算掌握。</span>
                </p>
              )}
              {explanation.memoryCue && (
                <p className="mt-3 max-w-[68ch] break-words rounded-xl bg-surface-soft px-3 py-2 text-sm font-medium leading-[1.75] text-ink">
                  <span className="font-extrabold">知识点：</span>
                  {explanation.memoryCue}
                </p>
              )}
            </div>
            <div ref={nextActionRef} className="relative z-10 mt-5 flex gap-3 scroll-mb-4">
              {onPrevious && (
                <Pressable
                  variant="neutral"
                  size="lg"
                  onClick={onPrevious}
                  aria-label="上一题"
                  className="shrink-0 px-4"
                >
                  <Icon name="arrow-left" size={20} />
                </Pressable>
              )}
              <Pressable
                variant="primary"
                size="lg"
                block
                onClick={handleAdvance}
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
