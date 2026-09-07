import { motion, useReducedMotion } from 'framer-motion';
import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/helpers';
import { Icon } from './ui/Icons';
import { Pressable } from './ui/Pressable';

interface TimerProps {
  duration?: number;
  breakDuration?: number;
}

export function Timer({ duration = 15, breakDuration = 5 }: TimerProps) {
  const reduceMotion = useReducedMotion();
  const { timeLeft, isRunning, isBreak, progress, start, pause, reset } = useTimer(duration, breakDuration);
  const circumference = 2 * Math.PI * 44;
  const dashOffset = circumference * (1 - Math.min(1, Math.max(0, progress)));

  return (
    <div className="mx-auto max-w-xl space-y-7 text-center">
      <header>
        <p className="text-sm font-extrabold text-danger">专注一下</p>
        <h1 className="mt-1 text-3xl font-black tracking-[-0.025em] text-ink">番茄钟</h1>
        <p className="mt-2 text-sm font-semibold text-muted">
          {isBreak ? '让大脑休息一下，下一轮会更清晰。' : '只做眼前这一件事，到点就休息。'}
        </p>
      </header>

      <section className="rounded-[2rem] border-2 border-line bg-surface px-5 py-8 shadow-[0_5px_0_var(--ui-line-strong)]">
        <div
          className="relative mx-auto h-64 w-64 max-w-full"
          role="timer"
          aria-label={`${isBreak ? '休息' : '专注'}剩余 ${formatTime(timeLeft)}`}
        >
          <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="50" cy="50" r="44" fill="none" stroke="var(--ui-surface-soft)" strokeWidth="8" />
            <motion.circle
              cx="50"
              cy="50"
              r="44"
              fill="none"
              stroke={isBreak ? 'var(--ui-brand-strong)' : 'var(--ui-danger)'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={false}
              animate={{ strokeDashoffset: dashOffset }}
              transition={reduceMotion ? { duration: 0 } : { duration: 0.3, ease: 'linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`mb-2 flex h-11 w-11 items-center justify-center rounded-2xl ${isBreak ? 'bg-brand-soft text-brand-soft-ink' : 'bg-danger-soft text-danger-ink'}`}>
              <Icon name={isBreak ? 'leaf' : 'timer'} size={23} />
            </span>
            <span className="text-5xl font-black tabular-nums tracking-[-0.035em] text-ink">{formatTime(timeLeft)}</span>
            <span className="mt-2 text-sm font-extrabold text-muted">{isBreak ? '休息时间' : '专注时间'}</span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {!isRunning ? (
            <Pressable variant="primary" size="lg" onClick={start} leading={<Icon name="play" size={20} />}>
              开始
            </Pressable>
          ) : (
            <Pressable variant="warning" size="lg" onClick={pause} leading={<Icon name="pause" size={20} />}>
              暂停
            </Pressable>
          )}
          <Pressable variant="neutral" size="lg" onClick={reset} leading={<Icon name="rotate" size={20} />}>
            重置
          </Pressable>
        </div>
      </section>

      <p className="text-xs font-bold text-muted">专注 {duration} 分钟 · 休息 {breakDuration} 分钟</p>
    </div>
  );
}
