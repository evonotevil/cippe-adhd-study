import { useMemo } from 'react';
import type { UserStats } from '../types';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: UserStats) => boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-try',
    title: '初次尝试',
    description: '完成第一道题',
    icon: '🎯',
    condition: (stats) => stats.totalAnswered >= 1,
  },
  {
    id: 'getting-better',
    title: '渐入佳境',
    description: '连续答对 5 道题',
    icon: '📈',
    condition: (stats) => stats.correctCount >= 5,
  },
  {
    id: 'tomato-master',
    title: '番茄达人',
    description: '完成 3 个番茄钟',
    icon: '🍅',
    condition: (stats) => stats.tomatoSessions >= 3,
  },
  {
    id: 'streak-7',
    title: '一周坚持',
    description: '连续学习 7 天',
    icon: '📅',
    condition: (stats) => stats.streakDays >= 7,
  },
  {
    id: 'mistake-cleared',
    title: '错题清零',
    description: '清空错题本',
    icon: '✨',
    condition: (stats) => stats.achievements.includes('mistake-cleared'),
  },
];

interface AchievementsProps {
  stats: UserStats;
}

export function Achievements({ stats }: AchievementsProps) {
  const unlockedAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter(a => a.condition(stats));
  }, [stats]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-900">成就 ({unlockedAchievements.length}/{ACHIEVEMENTS.length})</h3>

      <div className="grid grid-cols-2 gap-3">
        {ACHIEVEMENTS.map((achievement) => {
          const isUnlocked = achievement.condition(stats);

          return (
            <div
              key={achievement.id}
              className={`p-4 rounded-xl border-2 transition-all ${
                isUnlocked
                  ? 'bg-amber-50 border-amber-200'
                  : 'bg-gray-50 border-gray-200 opacity-60'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-medium text-sm">{achievement.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
              {isUnlocked && (
                <div className="text-xs text-amber-600 font-medium mt-2">
                  ✓ 已解锁
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
