import { useMemo } from 'react';
import type { QuestionLearningState, TopicProgress, UserProgress, UserStats } from '../types';
import {
  getAttemptedCount,
  getComebackCount,
  getLongestAnswerStreak,
} from '../domain/practice';
import { QUESTION_COUNT } from '../data/questionCatalog';
import { Icon, type IconName } from './ui/Icons';
import { ProgressBar } from './ui/ProgressBar';
import { V2Icon } from './ui/V2Icon';

/** Everything the achievement list can be measured against, computed once. */
interface Metrics {
  attempted: number;
  topicsCompleted: number;
  topicsTouched: number;
  gdprAttempted: number;
  longestStreak: number;
  comebacks: number;
  streakDays: number;
  tomatoSessions: number;
  mistakeCleared: number;
}

type Category = 'progress' | 'mastery' | 'habit' | 'challenge';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  tone: 'brand' | 'info' | 'warning' | 'danger';
  category: Category;
  target: number;
  unit: string;
  measure: (metrics: Metrics) => number;
}

const CATEGORIES: Array<{ id: Category; label: string }> = [
  { id: 'progress', label: '题库进度' },
  { id: 'mastery', label: 'Topic 精通' },
  { id: 'habit', label: '学习习惯' },
  { id: 'challenge', label: '挑战' },
];

const ACHIEVEMENTS: Achievement[] = [
  // 题库进度
  { id: 'first-try', title: '初次尝试', description: '完成第一道题', icon: 'sprout', tone: 'info', category: 'progress', target: 1, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-25', title: '渐入佳境', description: '做过 25 道题', icon: 'bars-rising', tone: 'brand', category: 'progress', target: 25, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-100', title: '百题斩', description: '做过 100 道题', icon: 'pages', tone: 'info', category: 'progress', target: 100, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-200', title: '过半有余', description: '做过 200 道题', icon: 'gauge', tone: 'brand', category: 'progress', target: 200, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-all', title: '题库通关', description: `${QUESTION_COUNT} 道题全部做过`, icon: 'summit', tone: 'warning', category: 'progress', target: QUESTION_COUNT, unit: '题', measure: (m) => m.attempted },

  // Topic 精通
  { id: 'topic-touch-all', title: '全域涉猎', description: '9 个 Topic 各做过至少 1 题', icon: 'grid-nine', tone: 'info', category: 'mastery', target: 9, unit: '个主题', measure: (m) => m.topicsTouched },
  { id: 'topic-first', title: '首个 Topic 通关', description: '把任意一个 Topic 全部做完', icon: 'square-check', tone: 'brand', category: 'mastery', target: 1, unit: '个主题', measure: (m) => m.topicsCompleted },
  { id: 'topic-three', title: '三线并进', description: '完整做完 3 个 Topic', icon: 'panels', tone: 'brand', category: 'mastery', target: 3, unit: '个主题', measure: (m) => m.topicsCompleted },
  { id: 'gdpr-100', title: 'GDPR 攻坚', description: 'GDPR 主题做过 100 题', icon: 'doc-lock', tone: 'warning', category: 'mastery', target: 100, unit: '题', measure: (m) => m.gdprAttempted },

  // 学习习惯
  { id: 'streak-3', title: '三日不辍', description: '连续学习 3 天', icon: 'days', tone: 'info', category: 'habit', target: 3, unit: '天', measure: (m) => m.streakDays },
  { id: 'streak-7', title: '一周坚持', description: '连续学习 7 天', icon: 'flame', tone: 'warning', category: 'habit', target: 7, unit: '天', measure: (m) => m.streakDays },
  { id: 'streak-30', title: '月度常客', description: '连续学习 30 天', icon: 'calendar-check', tone: 'warning', category: 'habit', target: 30, unit: '天', measure: (m) => m.streakDays },
  { id: 'tomato-3', title: '番茄达人', description: '完成 3 个番茄钟', icon: 'tomato', tone: 'danger', category: 'habit', target: 3, unit: '个', measure: (m) => m.tomatoSessions },
  { id: 'tomato-25', title: '专注百分', description: '完成 25 个番茄钟', icon: 'hourglass', tone: 'danger', category: 'habit', target: 25, unit: '个', measure: (m) => m.tomatoSessions },

  // 挑战
  { id: 'streak-correct-5', title: '五连正解', description: '连续答对 5 题', icon: 'bolt', tone: 'brand', category: 'challenge', target: 5, unit: '连对', measure: (m) => m.longestStreak },
  { id: 'streak-correct-10', title: '十全十美', description: '连续答对 10 题', icon: 'medal', tone: 'warning', category: 'challenge', target: 10, unit: '连对', measure: (m) => m.longestStreak },
  { id: 'comeback-10', title: '错题翻盘', description: '10 道错题重新连对两次', icon: 'comeback', tone: 'info', category: 'challenge', target: 10, unit: '题', measure: (m) => m.comebacks },
  { id: 'mistake-cleared', title: '错题清零', description: '把错题本清空一次', icon: 'archive-check', tone: 'brand', category: 'challenge', target: 1, unit: '次', measure: (m) => m.mistakeCleared },
];

const unlockedTone = {
  brand: 'border-brand-shadow bg-brand text-brand-ink shadow-[0_4px_0_var(--ui-brand-shadow)]',
  info: 'border-info-shadow bg-info text-white shadow-[0_4px_0_var(--ui-info-shadow)]',
  warning: 'border-warning-shadow bg-warning text-warning-solid-ink shadow-[0_4px_0_var(--ui-warning-shadow)]',
  danger: 'border-danger-shadow bg-danger text-white shadow-[0_4px_0_var(--ui-danger-shadow)]',
};

interface AchievementsProps {
  stats: UserStats;
  learningStates: Record<number, QuestionLearningState>;
  topicProgress: TopicProgress[];
  progress: UserProgress[];
  onBack?: () => void;
}

export function Achievements({ stats, learningStates, topicProgress, progress }: AchievementsProps) {
  const metrics = useMemo<Metrics>(() => ({
    attempted: getAttemptedCount(learningStates),
    topicsCompleted: topicProgress.filter((topic) => topic.total > 0 && topic.completed >= topic.total).length,
    topicsTouched: topicProgress.filter((topic) => topic.completed > 0).length,
    gdprAttempted: topicProgress.find((topic) => topic.topic === 'GDPR')?.completed ?? 0,
    longestStreak: getLongestAnswerStreak(progress),
    comebacks: getComebackCount(learningStates),
    streakDays: stats.streakDays,
    tomatoSessions: stats.tomatoSessions,
    mistakeCleared: stats.achievements.includes('mistake-cleared') ? 1 : 0,
  }), [learningStates, progress, stats.achievements, stats.streakDays, stats.tomatoSessions, topicProgress]);

  const entries = useMemo(
    () => ACHIEVEMENTS.map((achievement) => {
      const current = Math.min(achievement.target, achievement.measure(metrics));
      return { achievement, current, unlocked: current >= achievement.target };
    }),
    [metrics],
  );

  const unlockedCount = entries.filter((entry) => entry.unlocked).length;
  const nextUp = entries
    .filter((entry) => !entry.unlocked && entry.current > 0)
    .sort((a, b) => b.current / b.achievement.target - a.current / a.achievement.target)[0];

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header className="space-y-5">
        <h1 className="text-[26px] font-bold leading-9 text-ink">收藏每一个小进步。</h1>
        <p className="text-sm leading-[22px] text-muted">刷题、专题、专注和挑战，都有自己的里程碑。</p>
      </header>

      <section aria-label="收藏进度" className="space-y-3 rounded-[20px] border-2 border-brand-line bg-brand-soft p-5">
        <h2 className="text-xl font-bold leading-7 text-brand-strong">已解锁 {unlockedCount} / {ACHIEVEMENTS.length}</h2>
        <ProgressBar value={unlockedCount} max={ACHIEVEMENTS.length} label="成就解锁进度" className="h-3" />
        {nextUp && (
          <p className="text-xs leading-[18px] text-brand-soft-ink">
            离「{nextUp.achievement.title}」还差 {nextUp.achievement.target - nextUp.current} {nextUp.achievement.unit}。
          </p>
        )}
      </section>

      {CATEGORIES.map((category) => {
        const items = entries.filter((entry) => entry.achievement.category === category.id);
        return (
          <section key={category.id} aria-labelledby={`category-${category.id}`} className="space-y-5">
            <h2 id={`category-${category.id}`} className="text-base font-bold leading-6 text-ink">{category.label}</h2>

            <div className="grid grid-cols-2 gap-3">
              {items.map(({ achievement, current, unlocked }) => (
                <article
                  key={achievement.id}
                  className={`flex flex-col gap-3 rounded-2xl border-2 p-4 ${
                    unlocked ? 'border-brand-line bg-brand-soft' : 'border-line bg-surface'
                  }`}
                >
                  {unlocked
                    ? <span className={`flex size-6 items-center justify-center rounded-md ${unlockedTone[achievement.tone]}`}>
                        <Icon name={achievement.icon} size={16} />
                      </span>
                    : <span className="flex text-muted"><V2Icon name="trophy" /></span>}
                  <h3 className="text-base font-bold leading-6 text-ink">{achievement.title}</h3>
                  <div className="text-xs font-medium leading-[18px] text-muted">
                    <p>{unlocked ? '已解锁' : '尚未解锁'}</p>
                    <p className="mt-1">{achievement.description}</p>
                  </div>
                  {!unlocked && current > 0 && (
                    <>
                      <ProgressBar
                        value={current}
                        max={achievement.target}
                        label={`${achievement.title}进度`}
                        className="h-1.5"
                      />
                      <p className="text-xs leading-[18px] text-muted">还差 {achievement.target - current} {achievement.unit}</p>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}

      <p className="text-xs leading-[18px] text-muted">完成学习后，回来查看解锁的成就。</p>
    </div>
  );
}
