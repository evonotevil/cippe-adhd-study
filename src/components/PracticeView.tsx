import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { PracticeAttempt, PracticeItem, PracticeSession, Question } from '../types';
import { getSessionTitle } from '../domain/practice';
import { formatTime } from '../utils/helpers';
import { getCurrentCorrectStreak } from '../utils/streak';
import { QuizCard } from './QuizCard';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';
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
  onPause: () => void;
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
      items.push({ ...skipped, skippedCount: skipped.skippedCount + 1 });
      return {
        ...current,
        items,
        currentIndex: Math.min(index, items.length - 1),
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

    if (window.confirm('结束本次练习并查看结果吗？')) {
      onFinish({ ...session, elapsedSeconds });
    }
  };

  const handlePause = () => {
    updateSession((current) => ({
      ...current,
      elapsedSeconds: elapsedSecondsRef.current,
    }));
    onPause();
  };

  const handleExamSubmit = () => {
    const answeredItems = session.items.filter((item) => item.selectedAnswer);
    const unansweredCount = session.items.length - answeredItems.length;
    if (
      unansweredCount > 0 &&
      !window.confirm(`还有 ${unansweredCount} 题未答。确定现在交卷吗？`)
    ) {
      return;
    }

    const averageTime = answeredItems.length > 0
      ? Math.max(1, Math.round(elapsedSeconds / answeredItems.length))
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
    const finalSession = { ...session, attempts, elapsedSeconds };
    onSubmitExam(
      finalSession,
      attempts.map(({ questionId, isCorrect, timeSpent }) => ({
        questionId,
        isCorrect,
        timeSpent,
      })),
    );
  };

  if (!currentItem || !currentQuestion) {
    return (
      <div className="mx-auto max-w-lg rounded-[1.25rem] border-2 border-warning-shadow bg-warning-soft p-6 text-center text-warning-ink">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warning">
          <Icon name="bolt" size={24} />
        </span>
        <p className="mt-4 font-black">这组练习没有可用题目</p>
        <Pressable variant="neutral" block onClick={onDiscardEmpty} className="mt-5">
          返回首页
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
      <div className="mx-auto max-w-2xl space-y-6">
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

        <Pressable variant="secondary" size="lg" block onClick={handleExamSubmit}>
          确认交卷
        </Pressable>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <header className="app-sticky-top sticky z-30 -mx-4 -mt-3 border-b-2 border-line bg-app px-4 pb-3 pt-3">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3">
            <Pressable
              variant="ghost"
              size="sm"
              onClick={handlePause}
              aria-label="保存并返回首页"
              className="shrink-0 px-2.5"
            >
              <Icon name="close" size={23} />
            </Pressable>
            <ProgressBar
              value={progressValue}
              max={session.items.length}
              label={progressText}
              tone={session.mode === 'exam' ? 'info' : 'brand'}
              className="flex-1"
            />
            <Pressable
              variant="danger-soft"
              size="sm"
              onClick={handleEnd}
              className="shrink-0 px-3"
            >
              {session.mode === 'exam' ? '交卷' : '结束'}
            </Pressable>
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 px-1 text-xs font-bold text-muted">
            <span className="min-w-0 flex-1 truncate">{getSessionTitle(session)}</span>
            <span className="flex shrink-0 items-center gap-2 tabular-nums">
              <AnimatePresence initial={false}>
                {correctStreak >= 2 && <StreakChip key="streak-chip" streak={correctStreak} />}
              </AnimatePresence>
              <span>{progressText}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Icon name="clock" size={14} />
                {formatTime(elapsedSeconds)}
              </span>
            </span>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait" initial={false} custom={questionDirection}>
        <m.div
          key={currentItem.key}
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
        <div className="mt-6 mx-auto max-w-2xl rounded-[1.25rem] border-2 border-line bg-surface p-3 shadow-[0_4px_0_var(--ui-line-strong)]">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => updateCurrentItem({ flagged: !currentItem.flagged })}
              aria-pressed={Boolean(currentItem.flagged)}
              className={`flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-extrabold transition-colors ${
                currentItem.flagged ? 'bg-warning-soft text-warning-ink' : 'text-muted hover:bg-surface-soft'
              }`}
            >
              <Icon name="flag" size={18} />
              {currentItem.flagged ? '已标记' : '稍后检查'}
            </button>
            <span className="text-xs font-bold text-muted">已答 {answeredCount}/{session.items.length}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Pressable
              variant="neutral"
              onClick={() => moveToIndex(Math.max(0, session.currentIndex - 1))}
              disabled={session.currentIndex === 0}
              leading={<Icon name="arrow-left" size={19} />}
            >
              上一题
            </Pressable>
            <Pressable
              variant="secondary"
              onClick={() => {
                if (session.currentIndex === session.items.length - 1) setShowExamReview(true);
                else moveToIndex(session.currentIndex + 1);
              }}
              trailing={<Icon name="arrow-right" size={19} />}
            >
              {session.currentIndex === session.items.length - 1 ? '检查交卷' : '下一题'}
            </Pressable>
          </div>
        </div>
      )}
    </div>
  );
}
