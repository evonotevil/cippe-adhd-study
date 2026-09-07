import { useMemo } from 'react';
import type { UserStats } from '../types';
import { Icon, type IconName } from './ui/Icons';
import { ProgressBar } from './ui/ProgressBar';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  tone: 'brand' | 'info' | 'warning' | 'danger';
  condition: (stats: UserStats) => boolean;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-try',
    title: '初次尝试',
    description: '完成第一道题',
    icon: 'target',
    tone: 'info',
    condition: (stats) => stats.totalAnswered >= 1,
  },
  {
    id: 'getting-better',
    title: '渐入佳境',
    description: '累计答对 5 道题',
    icon: 'bolt',
    tone: 'brand',
    condition: (stats) => stats.correctCount >= 5,
  },
  {
    id: 'tomato-master',
    title: '番茄达人',
    description: '完成 3 个番茄钟',
    icon: 'timer',
    tone: 'danger',
    condition: (stats) => stats.tomatoSessions >= 3,
  },
  {
    id: 'streak-7',
    title: '一周坚持',
    description: '连续学习 7 天',
    icon: 'sparkle',
    tone: 'warning',
    condition: (stats) => stats.streakDays >= 7,
  },
  {
    id: 'mistake-cleared',
    title: '错题清零',
    description: '清空错题本',
    icon: 'check',
    tone: 'brand',
    condition: (stats) => stats.achievements.includes('mistake-cleared'),
  },
];

const unlockedTone = {
  brand: 'border-brand-shadow bg-brand text-brand-ink shadow-[0_4px_0_var(--ui-brand-shadow)]',
  info: 'border-info-shadow bg-info text-white shadow-[0_4px_0_var(--ui-info-shadow)]',
  warning: 'border-warning-shadow bg-warning text-warning-ink shadow-[0_4px_0_var(--ui-warning-shadow)]',
  danger: 'border-danger-shadow bg-danger text-white shadow-[0_4px_0_var(--ui-danger-shadow)]',
};

interface AchievementsProps {
  stats: UserStats;
}

export function Achievements({ stats }: AchievementsProps) {
  const unlockedAchievements = useMemo(() => {
    return ACHIEVEMENTS.filter((achievement) => achievement.condition(stats));
  }, [stats]);

  return (
    <div className="space-y-6">
      <header>
        <p className="text-sm font-extrabold text-warning-ink">每一步都算数</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">成就收藏</h1>
        <div className="mt-4 flex items-center gap-3">
          <ProgressBar
            value={unlockedAchievements.length}
            max={ACHIEVEMENTS.length}
            label={`已解锁 ${unlockedAchievements.length} / ${ACHIEVEMENTS.length} 个成就`}
            tone="warning"
            className="flex-1"
          />
          <span className="text-xs font-extrabold text-muted">
            {unlockedAchievements.length}/{ACHIEVEMENTS.length}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {ACHIEVEMENTS.map((achievement) => {
          const isUnlocked = achievement.condition(stats);

          return (
            <article
              key={achievement.id}
              className={`rounded-[1.25rem] border-2 p-4 text-center ${
                isUnlocked
                  ? 'border-line bg-surface shadow-[0_4px_0_var(--ui-line-strong)]'
                  : 'border-line bg-surface-soft'
              }`}
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                  isUnlocked
                    ? unlockedTone[achievement.tone]
                    : 'border-line-strong bg-surface text-faint'
                }`}
              >
                <Icon name={isUnlocked ? achievement.icon : 'lock'} size={29} />
              </div>
              <h2 className="mt-4 text-sm font-black text-ink">{achievement.title}</h2>
              <p className="mt-1 text-xs font-semibold leading-relaxed text-muted">{achievement.description}</p>
              <p className={`mt-3 text-[11px] font-extrabold ${isUnlocked ? 'text-brand-strong' : 'text-muted'}`}>
                {isUnlocked ? '已解锁' : '继续学习'}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
