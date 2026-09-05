import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { UserProgress, UserStats } from '../types';

const DEFAULT_STATS: UserStats = {
  totalAnswered: 0,
  correctCount: 0,
  streakDays: 0,
  lastStudyDate: '',
  tomatoSessions: 0,
  achievements: [],
};

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress[]>('cippe-progress', []);
  const [stats, setStats] = useLocalStorage<UserStats>('cippe-stats', DEFAULT_STATS);

  const recordAnswer = useCallback((questionId: number, isCorrect: boolean, timeSpent: number) => {
    const newProgress: UserProgress = {
      questionId,
      isCorrect,
      timestamp: new Date().toISOString(),
      timeSpent,
    };

    setProgress(prev => [...prev, newProgress]);

    setStats(prev => ({
      ...prev,
      totalAnswered: prev.totalAnswered + 1,
      correctCount: prev.correctCount + (isCorrect ? 1 : 0),
    }));
  }, [setProgress, setStats]);

  const getQuestionStatus = useCallback((questionId: number) => {
    return progress.find(p => p.questionId === questionId);
  }, [progress]);

  const getMistakes = useCallback(() => {
    return progress.filter(p => !p.isCorrect);
  }, [progress]);

  return { progress, stats, recordAnswer, getQuestionStatus, getMistakes, setStats };
}
