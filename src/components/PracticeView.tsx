import { useEffect, useMemo, useRef, useState } from 'react';
import type { PracticeAttempt, PracticeSession, Question } from '../types';
import { getSessionTitle } from '../domain/practice';
import { formatTime } from '../utils/helpers';
import { QuizCard } from './QuizCard';

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
  const [showExamReview, setShowExamReview] = useState(false);
  const questionStartedAt = useRef<number | null>(null);
  const currentItem = session.items[session.currentIndex];
  const questionMap = useMemo(
    () => new Map(questions.map((question) => [question.id, question])),
    [questions],
  );
  const currentQuestion = currentItem ? questionMap.get(currentItem.questionId) : undefined;

  useEffect(() => {
    const timer = window.setInterval(() => {
      updateSession((current) => ({
        ...current,
        elapsedSeconds: current.elapsedSeconds + 1,
      }));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [updateSession]);

  useEffect(() => {
    questionStartedAt.current = Date.now();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentItem?.key]);

  const updateCurrentItem = (changes: Partial<typeof currentItem>) => {
    if (!currentItem) return;
    updateSession((current) => ({
      ...current,
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
      items: current.items.map((item) =>
        item.key === currentItem.key ? { ...item, submitted: true } : item,
      ),
      attempts: [...current.attempts, attempt],
    }));
  };

  const moveToIndex = (index: number) => {
    updateSession((current) => ({ ...current, currentIndex: index }));
  };

  const handleNext = () => {
    if (session.currentIndex < session.items.length - 1) {
      moveToIndex(session.currentIndex + 1);
      return;
    }

    if (session.kind === 'all' || session.kind === 'topic') {
      onBoundary(session);
    } else {
      onFinish(session);
    }
  };

  const handleSkip = () => {
    if (!currentItem) return;
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
      onFinish(session);
    }
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
      ? Math.max(1, Math.round(session.elapsedSeconds / answeredItems.length))
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
    const finalSession = { ...session, attempts };
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
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
        <p className="font-semibold text-amber-900">这组练习没有可用题目</p>
        <button type="button" onClick={onDiscardEmpty} className="mt-4 text-sm font-semibold text-blue-700">
          返回首页
        </button>
      </div>
    );
  }

  const isFiniteSession = session.kind === 'random' || session.kind === 'mistakes';
  const progressText = isFiniteSession || session.mode === 'exam'
    ? `第 ${session.currentIndex + 1} / ${session.items.length} 题`
    : `本次已完成 ${session.attempts.length} 题`;
  const answeredCount = session.items.filter((item) => item.selectedAnswer).length;
  const flaggedCount = session.items.filter((item) => item.flagged).length;

  if (showExamReview) {
    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <div>
          <button
            type="button"
            onClick={() => setShowExamReview(false)}
            className="mb-4 text-sm font-medium text-gray-500 hover:text-gray-800"
          >
            ‹ 返回答题
          </button>
          <h1 className="text-2xl font-bold text-gray-900">交卷前检查</h1>
          <p className="mt-2 text-sm text-gray-600">
            已答 {answeredCount} / {session.items.length} 题 · 已标记 {flaggedCount} 题 · 用时 {formatTime(session.elapsedSeconds)}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-8">
            {session.items.map((item, index) => (
              <button
                type="button"
                key={item.key}
                onClick={() => {
                  moveToIndex(index);
                  setShowExamReview(false);
                }}
                className={`relative rounded-xl border-2 py-3 text-sm font-bold ${
                  item.selectedAnswer
                    ? 'border-blue-400 bg-blue-50 text-blue-800'
                    : 'border-gray-200 bg-white text-gray-500'
                }`}
              >
                {index + 1}
                {item.flagged && (
                  <span className="absolute -right-1 -top-2 text-xs" aria-label="已标记">🚩</span>
                )}
              </button>
            ))}
          </div>
          <div className="mt-4 flex gap-4 text-xs text-gray-500">
            <span>蓝色：已答</span>
            <span>白色：未答</span>
            <span>🚩：待检查</span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleExamSubmit}
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700"
        >
          确认交卷
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <header className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onPause}
            className="shrink-0 text-sm font-semibold text-gray-500 hover:text-gray-800"
          >
            ‹ 首页
          </button>
          <div className="min-w-0 text-center">
            <p className="truncate text-sm font-bold text-gray-900">{getSessionTitle(session)}</p>
            <p className="mt-0.5 text-xs text-gray-500">
              {progressText} · {formatTime(session.elapsedSeconds)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleEnd}
            className="shrink-0 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            {session.mode === 'exam' ? '提前交卷' : '结束练习'}
          </button>
        </div>
      </header>

      <QuizCard
        question={currentQuestion}
        mode={session.mode}
        selectedAnswer={currentItem.selectedAnswer ?? null}
        showResult={Boolean(currentItem.submitted)}
        soundEnabled={soundEnabled}
        onSelect={handleSelect}
        onSubmit={handleStudySubmit}
        onSkip={handleSkip}
        onNext={handleNext}
      />

      {session.mode === 'exam' && (
        <div className="sticky bottom-3 z-10 mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-lg backdrop-blur">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => updateCurrentItem({ flagged: !currentItem.flagged })}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                currentItem.flagged ? 'bg-amber-100 text-amber-800' : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              🚩 {currentItem.flagged ? '已标记' : '稍后检查'}
            </button>
            <span className="text-xs text-gray-500">已答 {answeredCount} / {session.items.length}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => moveToIndex(Math.max(0, session.currentIndex - 1))}
              disabled={session.currentIndex === 0}
              className="rounded-xl bg-gray-100 px-4 py-3 font-semibold text-gray-700 disabled:opacity-40"
            >
              ← 上一题
            </button>
            <button
              type="button"
              onClick={() => {
                if (session.currentIndex === session.items.length - 1) setShowExamReview(true);
                else moveToIndex(session.currentIndex + 1);
              }}
              className="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700"
            >
              {session.currentIndex === session.items.length - 1 ? '检查并交卷' : '下一题 →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
