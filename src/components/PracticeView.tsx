import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { PracticeAttempt, PracticeItem, PracticeSession, Question } from '../types';
import { getScenarioGroupIndex, getSessionTitle } from '../domain/practice';
import { SCENARIO_GROUPS } from '../data/scenarioGroups';
import { formatTime } from '../utils/helpers';
import { getCurrentCorrectStreak } from '../utils/streak';
import { QuizCard } from './QuizCard';
import quizClose from '../assets/v2/quiz-close.svg';
import './practice-v2.css';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
import { ConfirmationDialog } from './ui/ConfirmationDialog';
import { ProgressBar } from './ui/ProgressBar';
import { StreakChip } from './ui/StreakFeedback';

interface AnswerRecord {
  questionId: number;
  isCorrect: boolean;
  timeSpent: number;
}

interface PracticeViewProps {
  session: PracticeSession;
  questions: Question[];
  soundEnabled: boolean;
  updateSession: (updater: (session: PracticeSession) => PracticeSession) => void;
  onRecordAnswer: (questionId: number, isCorrect: boolean, timeSpent: number) => void;
  onSubmitExam: (session: PracticeSession, answers: AnswerRecord[]) => void;
  onPause: (session: PracticeSession) => void;
  onFinish: (session: PracticeSession) => void;
  onDiscardEmpty: () => void;
  onBoundary: (session: PracticeSession) => void;
}

export function PracticeView({
  session,
  questions,
  soundEnabled,
  updateSession,
  onRecordAnswer,
  onSubmitExam,
  onPause,
  onFinish,
  onDiscardEmpty,
  onBoundary,
}: PracticeViewProps) {
  const reduceMotion = useReducedMotion();
  const [showExamReview, setShowExamReview] = useState(false);
  const [confirmation, setConfirmation] = useState<'leave' | 'finish' | 'exam' | null>(null);
  const [questionDirection, setQuestionDirection] = useState<-1 | 1>(1);
  const [elapsedSeconds, setElapsedSeconds] = useState(session.elapsedSeconds);
  const elapsedSecondsRef = useRef(session.elapsedSeconds);
  const questionStartedAt = useRef<number | null>(null);
  const currentItem = session.items[session.currentIndex];
  const questionMap = useMemo(
    () => new Map(questions.map((question) => [question.id, question])),
    [questions],
  );
  const currentQuestion = currentItem ? questionMap.get(currentItem.questionId) : undefined;

  // 同一段情景背景的题现在是连着出的（见 domain/practice 的 shuffleKeepingScenariosTogether）。
  // 这里找出当前题所在的那一段连续区间，好让 QuizCard 知道"这是同一个情景的第几题"，
  // 从第二题起就不用再把两千字的背景重铺一遍。
  const scenarioRun = useMemo(() => {
    if (!currentItem) return null;
    const groupIndex = getScenarioGroupIndex(currentItem.questionId);
    if (groupIndex === undefined) return null;

    const sameGroup = (index: number) => {
      const item = session.items[index];
      return item !== undefined && getScenarioGroupIndex(item.questionId) === groupIndex;
    };

    let start = session.currentIndex;
    while (start > 0 && sameGroup(start - 1)) start -= 1;
    let end = session.currentIndex;
    while (end < session.items.length - 1 && sameGroup(end + 1)) end += 1;

    const total = end - start + 1;
    if (total < 2) return null;

    // 这一组题库里一共有几道 —— 专题练习按 Topic 过滤时会把跨 Topic 的组切开，
    // 界面得说实话，而不是假装这一组是完整的。
    const inBank = SCENARIO_GROUPS[groupIndex]?.length ?? total;

    return { position: session.currentIndex - start + 1, total, missing: Math.max(0, inBank - total) };
  }, [currentItem, session.currentIndex, session.items]);

  useEffect(() => {
    const startedAt = Date.now() - elapsedSecondsRef.current * 1000;
    const timer = window.setInterval(() => {
      const nextElapsed = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
      elapsedSecondsRef.current = nextElapsed;
      setElapsedSeconds(nextElapsed);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [session.id]);

  useEffect(() => {
    const persistElapsed = () => {
      updateSession((current) => ({
        ...current,
        elapsedSeconds: elapsedSecondsRef.current,
      }));
    };
    const checkpoint = window.setInterval(persistElapsed, 15_000);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') persistElapsed();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      window.clearInterval(checkpoint);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [session.id, updateSession]);

  useEffect(() => {
    questionStartedAt.current = Date.now();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }, [currentItem?.key, reduceMotion]);

  const updateCurrentItem = (changes: Partial<PracticeItem>) => {
    if (!currentItem) return;
    updateSession((current) => ({
      ...current,
      elapsedSeconds: elapsedSecondsRef.current,
      items: current.items.map((item) =>
        item.key === currentItem.key ? { ...item, ...changes } : item,
      ),
    }));
  };

  const handleSelect = (answer: string) => {
    if (currentItem?.submitted) return;
    updateCurrentItem({ selectedAnswer: answer });
  };

  const handleStudySubmit = () => {
    if (!currentItem?.selectedAnswer || currentItem.submitted || !currentQuestion) return;
    const startedAt = questionStartedAt.current ?? Date.now();
    const timeSpent = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    const isCorrect = currentItem.selectedAnswer === currentQuestion.correctAnswer;
    const attempt: PracticeAttempt = {
      itemKey: currentItem.key,
      questionId: currentQuestion.id,
      answer: currentItem.selectedAnswer,
      isCorrect,
      timeSpent,
      timestamp: new Date().toISOString(),
    };

    onRecordAnswer(currentQuestion.id, isCorrect, timeSpent);
    updateSession((current) => ({
      ...current,
      elapsedSeconds: elapsedSecondsRef.current,
      items: current.items.map((item) =>
        item.key === currentItem.key ? { ...item, submitted: true } : item,
      ),
      attempts: [...current.attempts, attempt],
    }));
  };

  const moveToIndex = (index: number) => {
    setQuestionDirection(index >= session.currentIndex ? 1 : -1);
    updateSession((current) => ({
      ...current,
      currentIndex: index,
      elapsedSeconds: elapsedSecondsRef.current,
    }));
  };

  const handleNext = () => {
    if (session.currentIndex < session.items.length - 1) {
      moveToIndex(session.currentIndex + 1);
      return;
    }

    if (session.kind === 'all' || session.kind === 'topic') {
      onBoundary({ ...session, elapsedSeconds });
    } else {
      onFinish({ ...session, elapsedSeconds });
    }
  };

  const handleSkip = () => {
    if (!currentItem) return;
    setQuestionDirection(1);
    updateSession((current) => {
      const index = current.items.findIndex((item) => item.key === currentItem.key);
      if (index < 0) return current;
      const items = [...current.items];
      const [skipped] = items.splice(index, 1);
      const moved = { ...skipped, skippedCount: skipped.skippedCount + 1 };

      // 情景题跳过时不能扔到队尾 —— 那等于把刚读完的两千字背景作废，
      // 轮到它的时候人得从头再读一遍。挪到本情景组的末尾就够了。
      const skippedGroup = getScenarioGroupIndex(moved.questionId);
      const runEnd =
        skippedGroup === undefined
          ? -1
          : (() => {
              let end = index;
              while (
                end < items.length &&
                getScenarioGroupIndex(items[end].questionId) === skippedGroup
              ) {
                end += 1;
              }
              return end;
            })();

      if (runEnd > index) items.splice(runEnd, 0, moved);
      else items.push(moved);

      // 被跳过的题挪到队尾后，后面的题会顶上同一个下标。但如果跳的本来就是
      // 最后一题，那个下标上站着的还是它自己 —— 得往后、再绕回队首找一道没做的，
      // 否则「暂时跳过」在最后一题上是个死按钮。
      let nextIndex = items.findIndex(
        (item, position) => position >= index && item.key !== skipped.key && !item.submitted,
      );
      if (nextIndex < 0) {
        nextIndex = items.findIndex((item) => item.key !== skipped.key && !item.submitted);
      }
      if (nextIndex < 0) nextIndex = Math.min(index, items.length - 1);

      return {
        ...current,
        items,
        currentIndex: nextIndex,
        elapsedSeconds: elapsedSecondsRef.current,
      };
    });
  };

  const handleEnd = () => {
    if (session.mode === 'exam') {
      setShowExamReview(true);
      return;
    }

    if (session.attempts.length === 0) {
      onDiscardEmpty();
      return;
    }

    setConfirmation('finish');
  };

  const submitCurrentExam = () => {
    const answeredItems = session.items.filter((item) => item.selectedAnswer);
    const finalElapsedSeconds = elapsedSecondsRef.current;
    const averageTime = answeredItems.length > 0
      ? Math.max(1, Math.round(finalElapsedSeconds / answeredItems.length))
      : 0;
    const timestamp = Date.now();
    const attempts: PracticeAttempt[] = answeredItems.map((item, index) => {
      const question = questionMap.get(item.questionId) as Question;
      return {
        itemKey: item.key,
        questionId: item.questionId,
        answer: item.selectedAnswer as string,
        isCorrect: item.selectedAnswer === question.correctAnswer,
        timeSpent: averageTime,
        timestamp: new Date(timestamp + index).toISOString(),
      };
    });
    const finalSession = { ...session, attempts, elapsedSeconds: finalElapsedSeconds };
    onSubmitExam(
      finalSession,
      attempts.map(({ questionId, isCorrect, timeSpent }) => ({
        questionId,
        isCorrect,
        timeSpent,
      })),
    );
  };

  const unansweredCount = session.items.filter((item) => !item.selectedAnswer).length;
  const dialog = confirmation && (
    <ConfirmationDialog
      title={confirmation === 'leave' ? '要离开本次练习吗？' : confirmation === 'finish' ? '要结束本次练习吗？' : '要提前交卷吗？'}
      description={confirmation === 'leave'
        ? '保存当前进度后离开，下次可从已保存的位置继续。'
        : confirmation === 'finish'
          ? '已答的题会计入结果。结束后，这组练习将不能继续。'
          : `还有 ${unansweredCount} 题未答。交卷后，未答题将计入本次成绩，但不会加入错题本。`}
      confirmLabel={confirmation === 'leave' ? '保存并离开' : confirmation === 'finish' ? '结束并查看结果' : '确认提前交卷'}
      cancelLabel="继续答题"
      onConfirm={() => {
        setConfirmation(null);
        if (confirmation === 'leave') onPause({ ...session, elapsedSeconds: elapsedSecondsRef.current });
        else if (confirmation === 'finish') onFinish({ ...session, elapsedSeconds: elapsedSecondsRef.current });
        else submitCurrentExam();
      }}
      onCancel={() => setConfirmation(null)}
    />
  );

  if (!currentItem || !currentQuestion) {
    return (
      <div className="mx-auto max-w-lg rounded-[1.25rem] border-2 border-warning-shadow bg-warning-soft p-6 text-center text-warning-ink">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warning">
          <Icon name="bolt" size={24} />
        </span>
        <p className="mt-4 font-black">这组练习没有可用题目</p>
        <Pressable variant="neutral" block onClick={onDiscardEmpty} className="mt-5">
          {session.studyDay ? '返回学习卡' : '返回首页'}
        </Pressable>
      </div>
    );
  }

  const isFiniteSession = session.kind === 'random' || session.kind === 'mistakes';
  const progressText = isFiniteSession || session.mode === 'exam'
    ? `第 ${session.currentIndex + 1} / ${session.items.length} 题`
    : `本次已完成 ${session.attempts.length} 题`;
  const answeredCount = session.items.filter((item) => item.selectedAnswer).length;
  const flaggedCount = session.items.filter((item) => item.flagged).length;
  const progressValue = session.mode === 'exam' ? answeredCount : session.currentIndex + 1;
  const correctStreak = session.mode === 'study' ? getCurrentCorrectStreak(session.attempts) : 0;

  if (showExamReview) {
    return (
      <div className="mx-auto max-w-2xl space-y-6 pt-5">
        <header>
          <Pressable
            variant="ghost"
            size="sm"
            onClick={() => setShowExamReview(false)}
            leading={<Icon name="arrow-left" size={19} />}
            className="-ml-3 mb-3"
          >
            返回答题
          </Pressable>
          <p className="text-sm font-extrabold text-info-accent">考试模式</p>
          <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">交卷前检查</h1>
          <p className="mt-2 text-sm font-semibold text-muted">
            已答 {answeredCount}/{session.items.length} · 已标记 {flaggedCount} · 用时 {formatTime(elapsedSeconds)}
          </p>
        </header>

        <section aria-label="题目答题状态" className="rounded-[1.25rem] border-2 border-line bg-surface p-4 shadow-[0_4px_0_var(--ui-line-strong)]">
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-8">
            {session.items.map((item, index) => (
              <button
                type="button"
                key={item.key}
                onClick={() => {
                  moveToIndex(index);
                  setShowExamReview(false);
                }}
                aria-label={`第 ${index + 1} 题，${item.selectedAnswer ? '已答' : '未答'}${item.flagged ? '，已标记' : ''}`}
                className={`relative min-h-12 rounded-xl border-2 text-sm font-black transition-[transform,box-shadow] active:translate-y-0.5 ${
                  item.selectedAnswer
                    ? 'border-info-shadow bg-info-soft text-info-ink shadow-[0_3px_0_var(--ui-info-shadow)]'
                    : 'border-line bg-surface-soft text-muted shadow-[0_3px_0_var(--ui-line-strong)]'
                }`}
              >
                {index + 1}
                {item.flagged && (
                  <span className="absolute -right-1 -top-2 rounded-full bg-warning p-0.5 text-warning-solid-ink" aria-hidden="true">
                    <Icon name="flag" size={13} />
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-muted">
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-info-soft ring-1 ring-info" />已答</span>
            <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-surface-soft ring-1 ring-line-strong" />未答</span>
            <span className="flex items-center gap-1.5"><Icon name="flag" size={14} className="text-warning-ink" />待检查</span>
          </div>
        </section>

        <Pressable variant="featured" size="lg" block onClick={() => unansweredCount ? setConfirmation('exam') : submitCurrentExam()}>
          确认交卷
        </Pressable>
        {dialog}
      </div>
    );
  }

  return (
    <div className="practice-screen mx-auto max-w-2xl">
      {dialog}
      <header className="app-sticky-top quiz-header-edge quiz-safe-top sticky z-30 bg-surface pb-2">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setConfirmation('leave')}
            aria-label={session.studyDay ? '保存并返回学习卡' : '保存并返回首页'}
            className="grid size-11 shrink-0 place-items-center rounded-xl hover:bg-surface-soft"
          >
            <img src={quizClose} alt="" width={24} height={24} />
          </button>
          <ProgressBar
            value={progressValue}
            max={session.items.length}
            label={progressText}
            className="quiz-progress flex-1"
          />
          <button
            type="button"
            onClick={handleEnd}
            className={`size-11 shrink-0 rounded-xl text-xs font-medium hover:bg-surface-soft ${session.mode === 'exam' ? 'text-info-accent' : 'text-muted'}`}
          >
            {session.mode === 'exam' ? '交卷' : '结束'}
          </button>
        </div>
      </header>

      <div className="flex min-h-[54px] flex-wrap items-baseline justify-between gap-x-3 gap-y-1 pb-4 pt-5 text-xs font-medium leading-[18px] text-muted">
        <span className="min-w-0 flex-1">{getSessionTitle(session)}</span>
        <span className="flex shrink-0 items-center gap-2 tabular-nums">
          <span>{isFiniteSession || session.mode === 'exam' ? `${session.currentIndex + 1} / ${session.items.length}` : progressText}</span>
          <span aria-hidden="true">·</span>
          <span>{formatTime(elapsedSeconds)}</span>
        </span>
        <AnimatePresence initial={false}>
          {correctStreak >= 2 && <StreakChip key="streak-chip" streak={correctStreak} />}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait" initial={false} custom={questionDirection}>
        <m.div
          key={currentItem.key}
          className="flex flex-1 flex-col"
          custom={questionDirection}
          variants={{
            enter: (direction: number) => ({ opacity: 0, x: reduceMotion ? 0 : direction * 22 }),
            center: { opacity: 1, x: 0 },
            exit: (direction: number) => ({ opacity: 0, x: reduceMotion ? 0 : direction * -14 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduceMotion ? 0.08 : 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <QuizCard
            question={currentQuestion}
            mode={session.mode}
            selectedAnswer={currentItem.selectedAnswer ?? null}
            showResult={Boolean(currentItem.submitted)}
            soundEnabled={soundEnabled}
            correctStreak={correctStreak}
            scenarioRun={scenarioRun}
            onSelect={handleSelect}
            onSubmit={handleStudySubmit}
            onSkip={handleSkip}
            onNext={handleNext}
            onPrevious={
              // 学习模式原本提交后就回不去了，想重看上一题的解析只能重开一组。
              session.mode === 'study' && session.currentIndex > 0
                ? () => moveToIndex(session.currentIndex - 1)
                : undefined
            }
          />
        </m.div>
      </AnimatePresence>

      {session.mode === 'exam' && (
        <div className="quiz-footer-edge quiz-safe-bottom sticky bottom-0 z-20 mt-auto space-y-2 border-t-2 border-line bg-surface pt-4">
          <Pressable
            variant="featured"
            size="lg"
            block
            onClick={() => {
              if (session.currentIndex === session.items.length - 1) setShowExamReview(true);
              else moveToIndex(session.currentIndex + 1);
            }}
          >
            {session.currentIndex === session.items.length - 1 ? '检查交卷' : '下一题'}
          </Pressable>
          <div className="flex min-h-11 flex-wrap items-center justify-between gap-x-2 text-xs font-medium text-muted">
            <p>交卷后统一查看结果与解析</p>
            <div className="flex items-center gap-1.5">
              {session.currentIndex > 0 && (
                <button
                  type="button"
                  className="grid size-11 place-items-center rounded-lg hover:bg-surface-soft"
                  onClick={() => moveToIndex(session.currentIndex - 1)}
                  aria-label="上一题"
                >
                  <Icon name="arrow-left" size={17} />
                </button>
              )}
              <button
                type="button"
                onClick={() => updateCurrentItem({ flagged: !currentItem.flagged })}
                aria-pressed={Boolean(currentItem.flagged)}
                aria-label={currentItem.flagged ? '取消标记' : '稍后检查'}
                title={currentItem.flagged ? '取消标记' : '稍后检查'}
                className={`grid size-11 place-items-center rounded-lg transition-colors ${currentItem.flagged ? 'bg-warning-soft text-warning-ink' : 'hover:bg-surface-soft'}`}
              >
                <Icon name="flag" size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
