import { m, useReducedMotion } from 'framer-motion';
import type { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/helpers';
import { Pressable } from './ui/Pressable';
import focusTrack from './assets/v2-utility/focus-track.svg';
import { V2Icon } from './ui/V2Icon';

interface TimerProps {
  duration: number;
  breakDuration: number;
  timer: ReturnType<typeof useTimer>;
  onOpenSettings?: () => void;
  onOpenLesson?: () => void;
  lessonLabel?: string;
  onBack?: () => void;
}

export function Timer({ duration, breakDuration, timer, onOpenSettings, onOpenLesson, lessonLabel }: TimerProps) {
  const reduceMotion = useReducedMotion();
  const { timeLeft, isRunning, isBreak, progress, start, pause, reset } = timer;
  const circumference = 2 * Math.PI * 111;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header className="space-y-5 text-center">
        <h1 className="text-[26px] font-bold leading-9 text-ink">
          {isBreak ? '休息一下，再继续。' : '只做眼前这一件事。'}
        </h1>
        <p className="text-sm leading-[22px] text-muted">到点就休息，慢慢来，也会走得很远。</p>
      </header>

      <div
        className="relative mx-auto grid size-[260px] max-w-full place-items-center"
        role="timer"
        aria-label={`${isBreak ? '休息' : '专注'}剩余 ${formatTime(timeLeft)}`}
      >
        <div className="relative grid size-[236px] place-items-center">
          <img
            src={focusTrack}
            width={236}
            height={236}
            alt=""
            className="absolute inset-0 [html[data-theme=dark]_&]:hidden"
          />
          <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 236 236" aria-hidden="true">
            <circle cx="118" cy="118" r="111" fill="none" stroke="var(--ui-brand-soft)" strokeWidth="14" className="hidden [html[data-theme=dark]_&]:block" />
            {progress > 0 && <m.circle
              cx="118"
              cy="118"
              r="111"
              fill="none"
              stroke="var(--ui-brand)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={false}
              animate={{ strokeDashoffset: dashOffset }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'linear' }}
            />}
          </svg>
          <div className="relative flex flex-col items-center gap-2">
            <span className="flex text-muted"><V2Icon name="timer" /></span>
            <span className="app-metric text-[40px] font-extrabold leading-[48px] tracking-tight tabular-nums text-ink">{formatTime(timeLeft)}</span>
            <span className="text-xs font-medium leading-[18px] text-muted">{isBreak ? '休息时间' : '专注时间'}</span>
          </div>
        </div>
      </div>

      <p className="text-sm font-bold leading-[22px] text-muted">专注 {duration} 分钟 / 休息 {breakDuration} 分钟</p>

      <Pressable
        variant="featured"
        size="lg"
        block
        className="min-h-14"
        onClick={isRunning ? pause : start}
      >
        {isRunning ? '暂停计时' : isBreak ? '开始休息' : '开始专注'}
      </Pressable>

      <Pressable variant="neutral" size="lg" block className="min-h-14" onClick={reset}>重置计时</Pressable>

      {onOpenLesson && lessonLabel && (
        <button
          type="button"
          onClick={onOpenLesson}
          className="w-full space-y-2 rounded-[20px] border-2 border-info-line bg-info-soft p-5 text-left text-info-accent"
        >
          <span className="block text-base font-bold leading-6">配合今天的学习卡</span>
          <span className="block text-sm leading-[22px]">{lessonLabel}</span>
        </button>
      )}

      {onOpenSettings && (
        <button type="button" onClick={onOpenSettings} className="min-h-11 text-xs font-medium text-info-accent hover:underline">
          调整专注与休息时长 →
        </button>
      )}
    </div>
  );
}
