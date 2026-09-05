import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { buildLearningStates, getPendingMistakeIds } from '../domain/practice';
import type { UserProgress, UserStats } from '../types';

const DEFAULT_STATS: UserStats = {
  totalAnswered: 0,
  correctCount: 0,
  streakDays: 0,
  lastStudyDate: '',
  tomatoSessions: 0,
  achievements: [],
};

interface AnswerRecord {
  questionId: number;
  isCorrect: boolean;
  timeSpent: number;
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress[]>('cippe-progress', []);
  const [stats, setStats] = useLocalStorage<UserStats>('cippe-stats', DEFAULT_STATS);

  const recordAnswers = useCallback((answers: AnswerRecord[]) => {
    if (answers.length === 0) return;

    const timestamp = Date.now();
    const newProgress = answers.map((answer, index): UserProgress => ({
      ...answer,
      timestamp: new Date(timestamp + index).toISOString(),
    }));

    setProgress((previous) => [...previous, ...newProgress]);
    setStats((previous) => ({
      ...previous,
      totalAnswered: previous.totalAnswered + answers.length,
      correctCount:
        previous.correctCount + answers.filter((answer) => answer.isCorrect).length,
      lastStudyDate: new Date().toISOString(),
    }));
  }, [setProgress, setStats]);

  const recordAnswer = useCallback((questionId: number, isCorrect: boolean, timeSpent: number) => {
    recordAnswers([{ questionId, isCorrect, timeSpent }]);
  }, [recordAnswers]);

  const learningStates = useMemo(() => buildLearningStates(progress), [progress]);
  const mistakeIds = useMemo(() => getPendingMistakeIds(progress), [progress]);

  const getQuestionStatus = useCallback((questionId: number) => {
    return learningStates[questionId];
  }, [learningStates]);

  return {
    progress,
    stats,
    learningStates,
    mistakeIds,
    recordAnswer,
    recordAnswers,
    getQuestionStatus,
    setStats,
  };
}
