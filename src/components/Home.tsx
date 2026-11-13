import { usePendingAction } from '../hooks/usePendingAction';
import { getSessionTitle } from '../domain/practice';
import type { PracticeSession } from '../types';
import { STUDY_DAYS, STUDY_PHASES, type StudyDay } from '../data/studyPlan';
import { getLongestCorrectStreak } from '../utils/streak';
import { InstallHint } from './InstallHint';
import { Pressable } from './ui/Pressable';
import { WebStateCard } from './ui/WebStateCard';
import { V2Icon, type V2IconName } from './ui/V2Icon';
import book from '../assets/v2/shell-study-book.svg';
import sparkles from '../assets/v2/shell-study-sparkles.svg';

function ActionRow({ icon, title, detail, onClick }: {
  icon: V2IconName;
  title: string;
  detail: string;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="flex min-h-[82px] w-full items-center gap-3 rounded-2xl border-2 border-line bg-surface p-4 text-left text-muted hover:bg-surface-soft">
      <V2Icon name={icon} />
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold leading-6 text-ink">{title}</span>
        <span className="mt-1 block text-xs font-medium leading-[18px]">{detail}</span>
      </span>
      <V2Icon name="chevron" />
    </button>
  );
}

function Intro({ title, detail }: { title: string; detail: string }) {
  return (
    <>
      <h1 className="text-[26px] font-bold leading-9 text-ink">{title}</h1>
      <p className="text-sm leading-[22px] text-muted">{detail}</p>
    </>
  );
}

function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <p className="app-metric break-words text-[32px] font-extrabold leading-10 tabular-nums text-brand-strong">{value}</p>
      <p className="text-xs font-medium leading-[18px] text-muted">{label}</p>
    </div>
  );
}

function ResumeRow({ session, onResume, onDiscard }: {
  session: PracticeSession;
  onResume: () => Promise<void>;
  onDiscard: () => void;
}) {
  const { pendingKey, run } = usePendingAction();
  const done = session.mode === 'exam' ? session.items.filter((item) => item.selectedAnswer).length : session.attempts.length;
  return (
    <WebStateCard title="接着上次的进度？" body={`${getSessionTitle(session)} · 已答 ${done} / ${session.items.length} 题。你可以继续答题，或放弃这组进度。`}>
      <Pressable variant="featured" size="lg" block loading={pendingKey === 'resume'} onClick={() => { void run('resume', onResume); }}>
        继续答题
      </Pressable>
      <Pressable variant="neutral" size="lg" block disabled={pendingKey !== null} onClick={onDiscard}>
        放弃本次进度
      </Pressable>
    </WebStateCard>
  );
}

interface HomeProps {
  completedDays: number[];
  nextDay: StudyDay | undefined;
  activeSession: PracticeSession | null;
  focusMinutes: number;
  onOpenPlan: (day?: number) => void;
  onOpenPractice: () => void;
  onOpenMistakes: () => void;
  onOpenTimer: () => void;
  onResume: () => Promise<void>;
  onDiscard: () => void;
}

export function Home({ completedDays, nextDay, activeSession, focusMinutes, onOpenPlan, onOpenPractice, onOpenMistakes, onOpenTimer, onResume, onDiscard }: HomeProps) {
  const phaseIndex = Math.max(0, nextDay
    ? STUDY_PHASES.findIndex(({ days }) => days.some(({ day }) => day === nextDay.day))
    : STUDY_PHASES.length - 1);
  const phase = STUDY_PHASES[phaseIndex];

  return (
    <div className="space-y-5">
      <Intro title="今天，也前进一点。" detail="不用一次学很多，完成眼前这一关。" />

      {activeSession && <ResumeRow session={activeSession} onResume={onResume} onDiscard={onDiscard} />}

      <section aria-label="每日任务" className="space-y-3 rounded-3xl border-2 border-b-4 border-brand-line bg-brand-soft p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 space-y-2">
            <p className="text-xs font-medium leading-[18px] text-brand-strong">{nextDay ? `第 ${nextDay.day} 天 · ${phase.title}` : '30 天备考 · 已完成'}</p>
            <h2 className="max-w-[13ch] text-xl font-bold leading-7">{nextDay?.title ?? '恭喜完成备考路线！'}</h2>
            <p className="text-xs font-medium leading-[18px] text-muted">
              {nextDay ? `1 张学习卡${nextDay.practice ? ` · 约 ${nextDay.practice.count} 题` : ''}` : '随时回看课程，巩固知识点'}
            </p>
          </div>
          <div className="relative h-[91px] w-[104px] shrink-0" aria-hidden="true">
            <img src={book} alt="" width={57.85} height={67.8167} className="absolute left-[22.1px] top-[13px]" />
            <img src={sparkles} alt="" width={91.325} height={42.575} className="absolute left-[6.8px] top-[20.8px]" />
          </div>
        </div>
        <Pressable variant="featured" size="lg" block onClick={() => onOpenPlan(nextDay?.day)}>
          {nextDay ? '开始今日学习' : '回看备考路线'}
        </Pressable>
      </section>

      <section aria-label="备考进度" className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl border-2 border-line bg-surface p-4"><Metric value={`${completedDays.length} / ${STUDY_DAYS.length}`} label="已完成天数" /></div>
        <div className="rounded-2xl border-2 border-line bg-surface p-4"><Metric value={`${phaseIndex + 1} / ${STUDY_PHASES.length}`} label={`当前阶段 · ${phase.title}`} /></div>
      </section>

      <h2 className="text-base font-bold leading-6">把学过的变成记住的</h2>
      <ActionRow icon="refresh" title="错题复习" detail="从错题开始，补上一个知识缺口" onClick={onOpenMistakes} />
      <ActionRow icon="timer" title={`专注 ${focusMinutes} 分钟`} detail="只做眼前这一件事，到点就休息" onClick={onOpenTimer} />
      <button type="button" className="min-h-11 text-left text-xs font-medium text-info-accent hover:underline" onClick={onOpenPractice}>想换个节奏？到「练习」自由选题 →</button>
      <InstallHint />
    </div>
  );
}

export function PracticeHub({ activeSession, topicCount, onResume, onDiscard, onRecommended, onTopics, onRandom, onMistakes }: {
  activeSession: PracticeSession | null;
  topicCount: number;
  onResume: () => Promise<void>;
  onDiscard: () => void;
  onRecommended: () => Promise<void>;
  onTopics: () => void;
  onRandom: () => void;
  onMistakes: () => void;
}) {
  const { pendingKey, run } = usePendingAction();
  return (
    <div className="space-y-5">
      <Intro title="按你的节奏练。" detail="补弱项，或来一组小挑战。" />
      {activeSession && <ResumeRow session={activeSession} onResume={onResume} onDiscard={onDiscard} />}
      <section className="space-y-3 rounded-3xl border-2 border-info-line bg-info-soft p-5">
        <span className="block text-muted"><V2Icon name="bolt" /></span>
        <h2 className="text-xl font-bold leading-7">先来 5 题，找找手感</h2>
        <p className="text-sm leading-[22px] text-muted">约 4 分钟 · 每题都有即时反馈</p>
        <Pressable variant="featured" size="lg" block loading={pendingKey === 'recommended'} onClick={() => { void run('recommended', onRecommended); }}>开始 5 题练习</Pressable>
      </section>
      <h2 className="text-base font-bold leading-6">选择一种练法</h2>
      <ActionRow icon="topics" title="专题练习" detail={`${topicCount} 个专题 · 一次突破一个主题`} onClick={onTopics} />
      <ActionRow icon="bolt" title="随机组卷" detail="自选题数、范围和答题模式" onClick={onRandom} />
      <ActionRow icon="refresh" title="错题复习" detail="答错的自动收集，练会为止" onClick={onMistakes} />
      <section className="space-y-2 rounded-[20px] border-2 border-line bg-surface p-5">
        <h2 className="text-base font-bold leading-6">练习与考试，有不同节奏</h2>
        <p className="text-sm leading-[22px] text-muted">学习模式：每题即时反馈<br />考试模式：交卷后统一看结果</p>
      </section>
    </div>
  );
}

export function Profile({ lastResult, onAchievements, onTimer, onSettings, onData }: {
  lastResult: PracticeSession | null;
  onAchievements: () => void;
  onTimer: () => void;
  onSettings: () => void;
  onData: () => void;
}) {
  const answered = lastResult?.attempts.length ?? 0;
  const total = lastResult?.mode === 'exam' ? lastResult.items.length : answered;
  const accuracy = lastResult && total > 0
    ? `${Math.round(lastResult.attempts.filter((attempt) => attempt.isCorrect).length / total * 100)}%` : '—';
  return (
    <div className="space-y-5">
      <Intro title="每一步，都算数。" detail="记录积累，也找到适合自己的节奏。" />
      <section className="space-y-3 rounded-[20px] border-2 border-brand-line bg-brand-soft p-5">
        <h2 className="text-base font-bold leading-6 text-brand-strong">最近一组练习</h2>
        {lastResult && answered > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            <Metric value={answered} label="完成题数" />
            <Metric value={accuracy} label="正确率" />
            <Metric value={getLongestCorrectStreak(lastResult.items, lastResult.attempts)} label="最长连对" />
          </div>
        ) : <p className="text-sm leading-[22px] text-muted">完成一组练习后，就能在这里回看小结。</p>}
      </section>
      <ActionRow icon="trophy" title="成就收藏" detail="18 个里程碑，收藏你的学习足迹" onClick={onAchievements} />
      <ActionRow icon="timer" title="专注节奏" detail="番茄钟 · 专注与休息时长" onClick={onTimer} />
      <ActionRow icon="settings" title="学习设置" detail="主题、字体大小与答题声音" onClick={onSettings} />
      <ActionRow icon="book" title="学习数据" detail="导入与导出，备份你的学习记录" onClick={onData} />
      <section className="space-y-2 rounded-[20px] border-2 border-warning-line bg-warning-soft p-5 text-warning-ink">
        <h2 className="text-base font-bold leading-6">不需要完美，保持前进就好。</h2>
        <p className="text-sm leading-[22px]">做错的题，也是下一次进步的起点。</p>
      </section>
      {import.meta.env.MODE === 'pages-v2' && (
        <a href="../" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-info-accent hover:underline">
          返回经典版 <V2Icon name="chevron" />
        </a>
      )}
    </div>
  );
}
