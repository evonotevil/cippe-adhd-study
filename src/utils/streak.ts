import type { PracticeAttempt, PracticeItem } from '../types';

export type StreakTier = 'good' | 'nice' | 'excellent';

export interface StreakFeedback {
  tier: StreakTier;
  label: 'GOOD!' | 'NICE!' | 'EXCELLENT!';
  detail: string;
  emphasized: boolean;
}

export function getCurrentCorrectStreak(attempts: PracticeAttempt[]): number {
  let streak = 0;

  for (let index = attempts.length - 1; index >= 0; index -= 1) {
    if (!attempts[index].isCorrect) break;
    streak += 1;
  }

  return streak;
}

export function getLongestCorrectStreak(
  items: PracticeItem[],
  attempts: PracticeAttempt[],
): number {
  const attemptsByItem = new Map(attempts.map((attempt) => [attempt.itemKey, attempt]));
  let current = 0;
  let longest = 0;

  items.forEach((item) => {
    const attempt = attemptsByItem.get(item.key);
    if (attempt?.isCorrect) {
      current += 1;
      longest = Math.max(longest, current);
    } else {
      current = 0;
    }
  });

  return longest;
}

export function getStreakFeedback(streak: number): StreakFeedback {
  if (streak >= 3) {
    return {
      tier: 'excellent',
      label: 'EXCELLENT!',
      detail: `连续答对 ${streak} 题`,
      emphasized: streak === 3 || streak === 5 || streak === 10,
    };
  }

  if (streak === 2) {
    return {
      tier: 'nice',
      label: 'NICE!',
      detail: '连续答对 2 题',
      emphasized: false,
    };
  }

  return {
    tier: 'good',
    label: 'GOOD!',
    detail: '答对了',
    emphasized: false,
  };
}
