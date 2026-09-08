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

const CATEGORIES: Array<{ id: Category; label: string; hint: string }> = [
  { id: 'progress', label: '题库进度', hint: '把 319 道题一点点走完' },
  { id: 'mastery', label: 'Topic 精通', hint: '按主题逐块攻下' },
  { id: 'habit', label: '学习习惯', hint: '规律比爆发更重要' },
  { id: 'challenge', label: '挑战', hint: '给自己一点难度' },
];

const ACHIEVEMENTS: Achievement[] = [
  // 题库进度
  { id: 'first-try', title: '初次尝试', description: '完成第一道题', icon: 'target', tone: 'info', category: 'progress', target: 1, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-25', title: '渐入佳境', description: '做过 25 道题', icon: 'bolt', tone: 'brand', category: 'progress', target: 25, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-100', title: '百题斩', description: '做过 100 道题', icon: 'book', tone: 'info', category: 'progress', target: 100, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-200', title: '过半有余', description: '做过 200 道题', icon: 'topics', tone: 'brand', category: 'progress', target: 200, unit: '题', measure: (m) => m.attempted },
  { id: 'attempted-all', title: '题库通关', description: `${QUESTION_COUNT} 道题全部做过`, icon: 'trophy', tone: 'warning', category: 'progress', target: QUESTION_COUNT, unit: '题', measure: (m) => m.attempted },

  // Topic 精通
  { id: 'topic-touch-all', title: '全域涉猎', description: '9 个 Topic 各做过至少 1 题', icon: 'topics', tone: 'info', category: 'mastery', target: 9, unit: '个主题', measure: (m) => m.topicsTouched },
  { id: 'topic-first', title: '首个 Topic 通关', description: '把任意一个 Topic 全部做完', icon: 'check', tone: 'brand', category: 'mastery', target: 1, unit: '个主题', measure: (m) => m.topicsCompleted },
  { id: 'topic-three', title: '三线并进', description: '完整做完 3 个 Topic', icon: 'sparkle', tone: 'brand', category: 'mastery', target: 3, unit: '个主题', measure: (m) => m.topicsCompleted },
  { id: 'gdpr-100', title: 'GDPR 攻坚', description: 'GDPR 主题做过 100 题', icon: 'book', tone: 'warning', category: 'mastery', target: 100, unit: '题', measure: (m) => m.gdprAttempted },

  // 学习习惯
  { id: 'streak-3', title: '三日不辍', description: '连续学习 3 天', icon: 'clock', tone: 'info', category: 'habit', target: 3, unit: '天', measure: (m) => m.streakDays },
  { id: 'streak-7', title: '一周坚持', description: '连续学习 7 天', icon: 'sparkle', tone: 'warning', category: 'habit', target: 7, unit: '天', measure: (m) => m.streakDays },
  { id: 'streak-30', title: '月度常客', description: '连续学习 30 天', icon: 'trophy', tone: 'warning', category: 'habit', target: 30, unit: '天', measure: (m) => m.streakDays },
  { id: 'tomato-3', title: '番茄达人', description: '完成 3 个番茄钟', icon: 'timer', tone: 'danger', category: 'habit', target: 3, unit: '个', measure: (m) => m.tomatoSessions },
  { id: 'tomato-25', title: '专注百分', description: '完成 25 个番茄钟', icon: 'timer', tone: 'danger', category: 'habit', target: 25, unit: '个', measure: (m) => m.tomatoSessions },

  // 挑战
  { id: 'streak-correct-5', title: '五连正解', description: '连续答对 5 题', icon: 'bolt', tone: 'brand', category: 'challenge', target: 5, unit: '连对', measure: (m) => m.longestStreak },
  { id: 'streak-correct-10', title: '十全十美', description: '连续答对 10 题', icon: 'sparkle', tone: 'warning', category: 'challenge', target: 10, unit: '连对', measure: (m) => m.longestStreak },
  { id: 'comeback-10', title: '错题翻盘', description: '10 道错题重新连对两次', icon: 'refresh', tone: 'info', category: 'challenge', target: 10, unit: '题', measure: (m) => m.comebacks },
  { id: 'mistake-cleared', title: '错题清零', description: '把错题本清空一次', icon: 'check', tone: 'brand', category: 'challenge', target: 1, unit: '次', measure: (m) => m.mistakeCleared },
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
    <div className="space-y-7">
      <header>
        <p className="text-sm font-extrabold text-warning-ink">每一步都算数</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">成就收藏</h1>
        <div className="mt-4 flex items-center gap-3">
          <ProgressBar
            value={unlockedCount}
            max={ACHIEVEMENTS.length}
            label={`已解锁 ${unlockedCount} / ${ACHIEVEMENTS.length} 个成就`}
            tone="warning"
            className="flex-1"
          />
          <span className="shrink-0 text-xs font-extrabold tabular-nums text-muted">
            {unlockedCount}/{ACHIEVEMENTS.length}
          </span>
        </div>
        {nextUp && (
          <p className="mt-3 rounded-2xl bg-surface-soft px-4 py-3 text-sm font-bold text-muted">
            <span className="text-ink">最接近的是「{nextUp.achievement.title}」</span>
            ，还差 {nextUp.achievement.target - nextUp.current} {nextUp.achievement.unit}。
          </p>
        )}
      </header>

      {CATEGORIES.map((category) => {
        const items = entries.filter((entry) => entry.achievement.category === category.id);
        const done = items.filter((entry) => entry.unlocked).length;

        return (
          <section key={category.id} aria-labelledby={`category-${category.id}`}>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h2 id={`category-${category.id}`} className="text-lg font-black tracking-[-0.02em] text-ink">
                {category.label}
              </h2>
              <span className="shrink-0 text-xs font-extrabold tabular-nums text-muted">{done}/{items.length}</span>
            </div>
            <p className="mb-3 text-xs font-semibold text-muted">{category.hint}</p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {items.map(({ achievement, current, unlocked }) => (
                <article
                  key={achievement.id}
                  className={`flex flex-col rounded-[1.25rem] border-2 p-4 text-center ${
                    unlocked
                      ? 'border-line bg-surface shadow-[0_4px_0_var(--ui-line-strong)]'
                      : 'border-line bg-surface-soft'
                  }`}
                >
                  <div
                    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 ${
                      unlocked ? unlockedTone[achievement.tone] : 'border-line-strong bg-surface text-faint'
                    }`}
                  >
                    <Icon name={unlocked ? achievement.icon : 'lock'} size={26} />
                  </div>
                  <h3 className="mt-3 text-sm font-black text-ink">{achievement.title}</h3>
                  <p className="mt-1 flex-1 text-xs font-semibold leading-relaxed text-muted">
                    {achievement.description}
                  </p>

                  {unlocked ? (
                    <p className="mt-3 text-[11px] font-extrabold text-brand-strong">已解锁</p>
                  ) : (
                    <div className="mt-3">
                      <div
                        className="h-1.5 overflow-hidden rounded-full bg-line"
                        role="progressbar"
                        aria-valuenow={current}
                        aria-valuemin={0}
                        aria-valuemax={achievement.target}
                        aria-label={`${achievement.title} 进度 ${current} / ${achievement.target}`}
                      >
                        <div
                          className="h-full rounded-full bg-line-strong"
                          style={{ width: `${Math.round((current / achievement.target) * 100)}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-[11px] font-extrabold tabular-nums text-muted">
                        还差 {achievement.target - current} {achievement.unit}
                      </p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
