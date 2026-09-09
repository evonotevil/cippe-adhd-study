import { useCallback, useEffect, useMemo, useRef } from 'react';
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

function normalizeStats(stats: Partial<UserStats> | null | undefined): UserStats {
  return {
    totalAnswered: stats?.totalAnswered ?? DEFAULT_STATS.totalAnswered,
    correctCount: stats?.correctCount ?? DEFAULT_STATS.correctCount,
    streakDays: stats?.streakDays ?? DEFAULT_STATS.streakDays,
    lastStudyDate: stats?.lastStudyDate ?? DEFAULT_STATS.lastStudyDate,
    tomatoSessions: stats?.tomatoSessions ?? DEFAULT_STATS.tomatoSessions,
    achievements: Array.isArray(stats?.achievements) ? stats.achievements : [],
  };
}

function recordStudyDay(stats: UserStats, now: Date): Pick<UserStats, 'lastStudyDate' | 'streakDays'> {
  const previousDate = stats.lastStudyDate ? new Date(stats.lastStudyDate) : null;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (!previousDate || Number.isNaN(previousDate.getTime())) {
    return { lastStudyDate: now.toISOString(), streakDays: 1 };
  }

  const previousDay = new Date(
    previousDate.getFullYear(),
    previousDate.getMonth(),
    previousDate.getDate(),
  );
  const dayDifference = Math.round((today.getTime() - previousDay.getTime()) / 86_400_000);

  return {
    lastStudyDate: now.toISOString(),
    streakDays:
      dayDifference === 0
        ? Math.max(1, stats.streakDays)
        : dayDifference === 1
          ? Math.max(1, stats.streakDays) + 1
          : 1,
  };
}

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<UserProgress[]>('cippe-progress', []);
  const [storedStats, setStats] = useLocalStorage<UserStats>('cippe-stats', DEFAULT_STATS);
  const stats = useMemo(() => normalizeStats(storedStats), [storedStats]);

  const recordAnswers = useCallback((answers: AnswerRecord[]) => {
    if (answers.length === 0) return;

    const timestamp = Date.now();
    const newProgress = answers.map((answer, index): UserProgress => ({
      ...answer,
      timestamp: new Date(timestamp + index).toISOString(),
    }));

    setProgress((previous) => [...previous, ...newProgress]);
    setStats((previous) => {
      const normalized = normalizeStats(previous);
      return {
        ...normalized,
        totalAnswered: normalized.totalAnswered + answers.length,
        correctCount:
          normalized.correctCount + answers.filter((answer) => answer.isCorrect).length,
        ...recordStudyDay(normalized, new Date()),
      };
    });
  }, [setProgress, setStats]);

  const recordAnswer = useCallback((questionId: number, isCorrect: boolean, timeSpent: number) => {
    recordAnswers([{ questionId, isCorrect, timeSpent }]);
  }, [recordAnswers]);

  const learningStates = useMemo(() => buildLearningStates(progress), [progress]);
  const mistakeIds = useMemo(() => getPendingMistakeIds(learningStates), [learningStates]);
  const previousMistakeCount = useRef(mistakeIds.length);

  useEffect(() => {
    const currentMistakeCount = mistakeIds.length;
    if (previousMistakeCount.current > 0 && currentMistakeCount === 0) {
      setStats((previous) => {
        const normalized = normalizeStats(previous);
        if (normalized.achievements.includes('mistake-cleared')) return normalized;
        return {
          ...normalized,
          achievements: [...normalized.achievements, 'mistake-cleared'],
        };
      });
    }
    previousMistakeCount.current = currentMistakeCount;
  }, [mistakeIds.length, setStats]);

  const recordTomatoSession = useCallback(() => {
    setStats((previous) => {
      const normalized = normalizeStats(previous);
      return {
        ...normalized,
        tomatoSessions: normalized.tomatoSessions + 1,
        ...recordStudyDay(normalized, new Date()),
      };
    });
  }, [setStats]);

  const getQuestionStatus = useCallback((questionId: number) => {
    return learningStates[questionId];
  }, [learningStates]);

  /**
   * 用一份新的进度整体替换本机数据 —— 目前只有设备同步的合并会用到。
   * progress 和 stats 必须一起换：stats 里的 totalAnswered / correctCount
   * 是从 progress 数出来的，分两次写会在中间留下一个自相矛盾的状态。
   */
  const replaceProgress = useCallback((nextProgress: UserProgress[], nextStats: UserStats) => {
    setProgress(nextProgress);
    setStats(nextStats);
  }, [setProgress, setStats]);

  return {
    progress,
    stats,
    replaceProgress,
    learningStates,
    mistakeIds,
    recordAnswer,
    recordAnswers,
    recordTomatoSession,
    getQuestionStatus,
    setStats,
  };
}
