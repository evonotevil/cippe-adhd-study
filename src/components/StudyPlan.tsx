import { GuidedLesson } from './GuidedLesson';
import { GUIDED_LESSONS } from '../data/guidedLessons';
import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import book from '../assets/study-plan/book.svg';
import sparkles from '../assets/study-plan/sparkles.svg';
import { STUDY_DAYS, STUDY_PHASES, STUDY_SOURCES, type StudyDay } from '../data/studyPlan';
import { usePendingAction } from '../hooks/usePendingAction';
import { Icon } from './ui/Icons';
import { Chip } from './ui/Chip';
import { Pressable } from './ui/Pressable';
import { V2Icon } from './ui/V2Icon';

type MapView = 'map' | 'list';

export interface StudyPlanMapState {
  view: MapView;
  scrollY: number;
}

interface StudyPlanProps {
  completedDays: number[];
  selectedDay: StudyDay | undefined;
  activeDay: number | undefined;
  onSelect: (day: number) => void;
  onBack: () => void;
  onStart: (day: StudyDay) => Promise<void>;
  onComplete: (day: number) => void;
  onOpenTimer?: () => void;
  focusMinutes?: number;
  mapState?: RefObject<StudyPlanMapState>;
}

const milestoneDays = new Set([16, 28, 30]);
const chapterTones = [
  'border-brand-line bg-brand-soft text-brand-strong',
  'border-info-line bg-info-soft text-info-accent',
  'border-info-line bg-info-soft text-info-accent',
  'border-warning-line bg-warning-soft text-warning-ink',
];
const lanes = [175, 255, 175, 95];

function DayPath({
  days, completed, currentDay, onSelect,
}: {
  days: StudyDay[];
  completed: Set<number>;
  currentDay: number | undefined;
  onSelect: (day: number) => void;
}) {
  const currentIndex = days.findIndex(({ day }) => day === currentDay);
  const positions = days.map((_, index) => {
    const current = index === currentIndex;
    const lane = lanes[index % lanes.length];
    // Move the active circle away from the center to make space for its callout.
    const nextLane = lanes[(index + 1) % lanes.length];
    const x = current && lane === 175 ? (nextLane === 255 ? 95 : 255) : lane;
    const top = 16 + index * 146 + (currentIndex >= 0 && index > currentIndex ? 40 : 0);
    const y = top + (current ? 54 : 34);
    return { x, y, top, current };
  });
  const height = 24 + days.length * 146 + (currentIndex >= 0 ? 40 : 0);

  return (
    <div className="relative mx-auto mt-5 w-full max-w-[350px]" style={{ height }}>
      <svg aria-hidden="true" width="350" height={height} viewBox={`0 0 350 ${height}`} preserveAspectRatio="none" className="pointer-events-none absolute inset-0 w-full">
        {positions.slice(1).map(({ x, y }, index) => {
          const previous = positions[index];
          const mid = (previous.y + y) / 2;
          const progressed = completed.has(days[index].day)
            && (completed.has(days[index + 1].day) || days[index + 1].day === currentDay);
          return (
            <path
              key={days[index + 1].day}
              d={`M ${previous.x},${previous.y} C ${previous.x},${mid} ${x},${mid} ${x},${y}`}
              fill="none"
              stroke={progressed ? 'var(--ui-brand)' : 'var(--ui-line)'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={progressed ? undefined : '2 12'}
            />
          );
        })}
      </svg>
      <ol>
        {days.map(({ day, title }, index) => {
          const done = completed.has(day);
          const { x, y, top, current } = positions[index];
          const milestone = milestoneDays.has(day);
          const label = `第 ${day} 天${done ? ' · 已完成' : milestone ? ' · 里程碑' : ''}`;
          const tone = current || done
            ? 'border-brand-shadow bg-brand text-brand-ink'
            : milestone ? 'border-warning-line bg-warning-soft text-warning-ink' : 'border-line bg-surface-soft text-muted';

          return (
            <li key={day} id={`study-day-${day}`} className="absolute inset-x-0 scroll-mt-24" style={{ top }}>
              {current && (
                <div className={`absolute -top-2.5 z-10 w-[53.7%] space-y-2 rounded-[20px] border-2 border-brand-line bg-surface p-3 min-[380px]:p-4 ${x > 175 ? 'left-0' : 'right-0'}`}>
                  <p className="text-xs leading-[18px] font-medium text-brand-strong">第 {day} 天 · 今天这一关</p>
                  <p className="text-base leading-6 font-bold text-ink">{title}</p>
                  <Pressable variant="featured" block onClick={() => onSelect(day)} className="min-h-14 text-sm">
                    开始学习
                  </Pressable>
                </div>
              )}
              <button
                type="button"
                aria-current={current ? 'step' : undefined}
                aria-label={`${label}：${title}${current ? ' · 今天这一关' : ''}`}
                onClick={() => onSelect(day)}
                className={`absolute flex h-[68px] w-[76px] -translate-x-1/2 items-center justify-center rounded-full border-2 border-b-[7px] text-xl font-bold active:translate-y-0.5 ${tone} ${current ? 'outline-2 outline-offset-4 outline-brand' : ''}`}
                style={{ left: `${x / 3.5}%`, top: y - top - 34 }}
              >
                <span aria-hidden="true">{done ? '✓' : milestone && !current ? '★' : day}</span>
              </button>
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute w-[min(46%,160px)] -translate-x-1/2 rounded-lg bg-app px-1 py-1 text-center ${current || done ? 'text-brand-strong' : milestone ? 'text-warning-ink' : 'text-muted'}`}
                style={{ left: `${x / 3.5}%`, top: y - top + 44 }}
              >
                <p className="text-xs leading-[18px] font-medium">{current ? '你在这里' : label}</p>
                {!current && <p className="mt-1 text-sm leading-[22px] text-muted">{title}</p>}
              </div>
            </li>
          );
        })}
      </ol>
      {days[0]?.day === 1 && currentDay !== 4 && (
        <div className="pointer-events-none absolute right-0 w-[110px] text-center" style={{ top: positions[3].top + 28 }}>
          <div className="relative mx-auto h-[84px] w-24" aria-hidden="true">
            <img src={book} alt="" className="absolute top-3 left-[20.4px]" />
            <img src={sparkles} alt="" className="absolute top-[19.2px] left-[6.3px]" />
          </div>
          <p className="mt-2.5 text-xs leading-[18px] font-medium text-muted">不用赶路，<br />每天前进一点。</p>
        </div>
      )}
    </div>
  );
}

export function StudyPlan({
  completedDays, selectedDay, activeDay, onSelect, onBack, onStart, onComplete, onOpenTimer, focusMinutes = 15, mapState,
}: StudyPlanProps) {
  const { pendingKey, run } = usePendingAction();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const localMapState = useRef<StudyPlanMapState>({ view: 'map', scrollY: 0 });
  const mapMemory = mapState ?? localMapState;
  const [view, setView] = useState<MapView>(() => mapMemory.current.view);
  const [referencesOpen, setReferencesOpen] = useState(false);
  const dayNumber = selectedDay?.day;
  useLayoutEffect(() => {
    if (dayNumber === undefined) window.scrollTo({ top: mapMemory.current.scrollY, behavior: 'instant' });
  }, [dayNumber, mapMemory]);

  const selectFromMap = (day: number) => {
    mapMemory.current = { view, scrollY: window.scrollY };
    setReferencesOpen(false);
    onSelect(day);
  };
  const switchView = (nextView: MapView) => {
    mapMemory.current = { view: nextView, scrollY: window.scrollY };
    setView(nextView);
  };

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, [dayNumber]);

  const completed = new Set(completedDays);
  const nextDay = STUDY_DAYS.find(({ day }) => !completed.has(day));
  const nextDayNumber = nextDay?.day;

  if (selectedDay) {
    const practice = selectedDay.practice;
    const practiceLabel = activeDay === selectedDay.day
      ? '继续这组练习'
      : practice
        ? `${practice.mode === 'exam' ? '进入模拟考试' : '开始今日练习'} · 约 ${practice.count} 题`
        : completed.has(selectedDay.day) ? '返回学习路线' : '标记为已完成';

    return (
      <div className="mx-auto max-w-[640px] pb-[calc(9rem+env(safe-area-inset-bottom))]">
        <header className="app-safe-top app-sticky-top sticky z-40 -mx-5 bg-app px-5">
          <div className="flex h-16 items-center gap-3 pt-2 pb-3">
            <button type="button" aria-label="返回学习路线" className="grid size-11 shrink-0 place-items-center rounded-xl text-muted" onClick={() => { setReferencesOpen(false); onBack(); }}>
              <V2Icon name="back" />
            </button>
            <p className="flex-1 text-base leading-6 font-bold">第 {selectedDay.day} 天 · 学习卡</p>
            {onOpenTimer && (
              <button type="button" aria-label="打开番茄钟" className="grid size-11 shrink-0 place-items-center rounded-xl text-muted" onClick={onOpenTimer}>
                <V2Icon name="timer" />
              </button>
            )}
          </div>
        </header>

        <div className="space-y-5 pt-5">
          <p className="text-xs leading-[18px] font-medium text-brand-strong">
            先学一点，再练一组。{completed.has(selectedDay.day) ? ' · 已完成' : ''}
          </p>
          <h1 ref={headingRef} tabIndex={-1} className="text-[26px] leading-9 font-bold text-ink focus:outline-none">{selectedDay.title}</h1>
          <p className="text-sm leading-[22px] text-muted">今天学会：{selectedDay.goal}</p>

          <GuidedLesson key={selectedDay.day} lesson={selectedDay} />

          <div>
            <Pressable
              variant="neutral"
              block
              className="min-h-14 text-sm"
              aria-expanded={referencesOpen}
              aria-controls="study-lesson-sources"
              onClick={() => setReferencesOpen((open) => !open)}
            >
              {referencesOpen ? '收起本课参考资料' : '查看本课参考资料'}
            </Pressable>
            <div id="study-lesson-sources" hidden={!referencesOpen} className="mt-3 rounded-xl border-2 border-line bg-surface p-4">
              {GUIDED_LESSONS[selectedDay.day].reference && (
                <p className="mb-3 text-sm font-bold text-ink">{GUIDED_LESSONS[selectedDay.day].reference}</p>
              )}
              <ul className="space-y-2 text-sm leading-[22px] text-muted">
                {selectedDay.sources.map((id) => <li key={id} className="break-words">{STUDY_SOURCES[id]}</li>)}
              </ul>
            </div>
          </div>

          {onOpenTimer && (
            <button type="button" className="flex min-h-11 w-full items-center text-left text-xs leading-[18px] font-medium text-info-accent" onClick={onOpenTimer}>
              想专注一点？打开 {focusMinutes} 分钟番茄钟 →
            </button>
          )}
        </div>

        {createPortal(
          <section aria-label="今日练习" className="fixed inset-x-0 bottom-0 z-30 border-t-2 border-line bg-surface px-5 pt-4 pb-[calc(20px+env(safe-area-inset-bottom))]">
            <div className="mx-auto max-w-[640px] space-y-3">
              <Pressable
                variant="featured"
                block
                className="min-h-14 text-sm"
                loading={pendingKey === 'practice'}
                onClick={() => {
                  if (practice) void run('practice', () => onStart(selectedDay));
                  else if (completed.has(selectedDay.day)) onBack();
                  else onComplete(selectedDay.day);
                }}
              >
                {practiceLabel}
              </Pressable>
              {practice && (
                <p className="text-xs leading-[18px] font-medium text-muted">
                  {practice.mode === 'exam'
                    ? `考试模式 · 建议用时约 ${Math.round(practice.count * 150 / 90)} 分钟 · 交卷后看结果`
                    : '学习模式 · 每题即时反馈'}
                </p>
              )}
            </div>
          </section>,
          document.body,
        )}
      </div>
    );
  }

  const jumpToCurrent = () => {
    if (!nextDayNumber) return;
    const target = document.getElementById(`study-day-${nextDayNumber}`);
    const current = target?.querySelector<HTMLButtonElement>('button[aria-current="step"]');
    current?.scrollIntoView({ block: 'center' });
    current?.focus({ preventScroll: true });
  };

  return (
    <div className="mx-auto max-w-[640px] space-y-5 pb-16">
      <h1 ref={headingRef} tabIndex={-1} className="text-[26px] leading-9 font-bold text-ink focus:outline-none">一步一步，走向通过。</h1>
      <p className="text-sm leading-[22px] text-muted">已完成 {completed.size} / {STUDY_DAYS.length} 天 · {completed.size === STUDY_DAYS.length ? '恭喜走完全部路线' : '中断也能接着学'}</p>
      <div role="group" aria-label="路线视图" className="grid grid-cols-2 gap-2">
        {([['map', '学习地图'], ['list', '列表总览']] as const).map(([value, label]) => (
          <Chip
            key={value}
            aria-pressed={view === value}
            onClick={() => switchView(value)}
          >
            {label}
          </Chip>
        ))}
      </div>

      {view === 'list' && (
        <div className="space-y-2 pt-1">
          <h2 className="text-xl leading-7 font-bold">30 天，从起点走到收尾。</h2>
          <p className="text-sm leading-[22px] text-muted">四个阶段 · 每天先读学习卡，再练对应题 · 可随时回看</p>
        </div>
      )}
      {STUDY_PHASES.map((phase, index) => (
        <section key={phase.title} aria-label={`第 ${index + 1} 章：${phase.title}`} className={view === 'list' ? 'space-y-4 rounded-[20px] border-2 border-line bg-surface p-5' : ''}>
          <div className={view === 'map'
            ? `space-y-2 rounded-[20px] border-2 p-4 ${chapterTones[index]}`
            : 'space-y-2'}
          >
            <p className={`text-xs leading-[18px] font-medium ${view === 'list' ? (index ? 'text-info-accent' : 'text-brand-strong') : ''}`}>
              {view === 'map'
                ? `第 ${index + 1} 章 / ${STUDY_PHASES.length} · 第 ${phase.days[0].day}–${phase.days.at(-1)?.day} 天`
                : `阶段 ${index + 1}`}
            </p>
            <h2 className="text-xl leading-7 font-bold">{phase.title}</h2>
            <p className={`text-sm leading-[22px] ${view === 'list' ? 'text-muted' : ''}`}>{phase.summary}</p>
          </div>
          {view === 'map' ? (
            <DayPath days={phase.days} completed={completed} currentDay={nextDayNumber} onSelect={selectFromMap} />
          ) : (
            <ol className="space-y-1">
              {phase.days.map(({ day, title }) => (
                <li key={day} id={`study-day-${day}`} className="scroll-mt-24">
                  <button
                    type="button"
                    onClick={() => selectFromMap(day)}
                    aria-current={day === nextDayNumber ? 'step' : undefined}
                    aria-label={`第 ${day} 天：${title}${completed.has(day) ? ' · 已完成' : ''}`}
                    className={`flex min-h-11 w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm leading-[22px] ${day === nextDayNumber ? 'bg-brand-soft' : 'hover:bg-surface-soft'}`}
                  >
                    <span className="w-7 shrink-0 text-center text-xs font-medium tabular-nums text-muted">{String(day).padStart(2, '0')}</span>
                    <span className="min-w-0 flex-1">{title}</span>
                    {completed.has(day) && <Icon name="check" size={18} className="shrink-0 text-brand-strong" />}
                    {day === nextDayNumber && <span className="shrink-0 text-xs font-bold text-brand-strong">今天</span>}
                  </button>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}
      <section className="space-y-3 rounded-[20px] border-2 border-brand-line bg-brand-soft p-5 text-brand-strong">
        <h2 className="text-xl leading-7 font-bold">30 天，是完整的一次积累。</h2>
        <p className="text-sm leading-[22px]">回看学习卡，复习错题，再检验一次掌握程度。</p>
        <Pressable variant="featured" block onClick={onBack} className="min-h-14 text-sm">返回今日学习</Pressable>
      </section>

      <details className="rounded-xl border-2 border-line bg-surface px-4">
        <summary className="min-h-11 cursor-pointer py-3 text-sm font-bold text-muted">资料索引 · {Object.keys(STUDY_SOURCES).length} 份</summary>
        <dl className="divide-y divide-line pb-3">
          {Object.entries(STUDY_SOURCES).map(([id, title]) => (
            <div key={id} className="py-3 text-sm">
              <dt className="break-words font-bold text-ink">{title}</dt>
              <dd className="mt-1 leading-relaxed text-muted">
                第 {STUDY_DAYS.filter((day) => day.sources.includes(id)).map(({ day }) => day).join('、')} 天
              </dd>
            </div>
          ))}
        </dl>
      </details>

      {nextDay && createPortal(
        <div className="fixed inset-x-0 bottom-[calc(var(--app-nav-height,88px)+env(safe-area-inset-bottom))] z-30 bg-app px-5 py-2 md:bottom-0">
          <button
            type="button"
            onClick={jumpToCurrent}
            className="mx-auto flex min-h-11 w-full max-w-[640px] items-center justify-center rounded-xl border-2 border-line bg-surface px-3 text-sm font-bold text-muted"
          >
            ↑ 回到当前关卡 · 第 {nextDay.day} 天
          </button>
        </div>,
        document.body,
      )}
    </div>
  );
}
