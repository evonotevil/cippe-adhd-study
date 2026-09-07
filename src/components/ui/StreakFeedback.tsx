import { m, useReducedMotion } from 'framer-motion';
import { getStreakFeedback } from '../../utils/streak';
import { Celebration } from './Celebration';
import { Icon } from './Icons';

interface StreakFeedbackBadgeProps {
  streak: number;
}

const badgeStyles = {
  good: 'bg-brand text-brand-ink shadow-[0_3px_0_var(--ui-brand-strong)]',
  nice: 'bg-info text-white shadow-[0_3px_0_var(--ui-info-shadow)]',
  excellent: 'bg-warning text-warning-ink shadow-[0_3px_0_var(--ui-warning-shadow)]',
};

export function StreakFeedbackBadge({ streak }: StreakFeedbackBadgeProps) {
  const reduceMotion = useReducedMotion();
  const feedback = getStreakFeedback(streak);

  return (
    <div className="relative min-w-0">
      {feedback.tier === 'excellent' && (
        <Celebration tone="warning" compact={!feedback.emphasized} />
      )}
      {feedback.tier === 'nice' && !reduceMotion && (
        <>
          <m.span
            aria-hidden="true"
            className="absolute -left-3 top-2 h-1 w-3 rounded-full bg-info"
            initial={{ opacity: 0, x: 5, rotate: -32 }}
            animate={{ opacity: [0, 1, 0], x: 0, rotate: -32 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          />
          <m.span
            aria-hidden="true"
            className="absolute -right-2 top-1 h-1 w-3 rounded-full bg-info"
            initial={{ opacity: 0, x: -5, rotate: 28 }}
            animate={{ opacity: [0, 1, 0], x: 0, rotate: 28 }}
            transition={{ duration: 0.38, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
          />
        </>
      )}
      {feedback.emphasized && !reduceMotion && (
        <m.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-warning"
          initial={{ opacity: 0.7, scale: 0.55 }}
          animate={{ opacity: 0, scale: 1.75 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
      <m.div
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: reduceMotion ? 0.08 : 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <span className={`inline-flex rounded-xl px-3 py-1.5 text-base font-black tracking-wide ${badgeStyles[feedback.tier]}`}>
          {feedback.label}
        </span>
        <p className="mt-2 text-sm font-extrabold">{feedback.detail}</p>
      </m.div>
    </div>
  );
}

interface StreakChipProps {
  streak: number;
}

export function StreakChip({ streak }: StreakChipProps) {
  const reduceMotion = useReducedMotion();

  if (streak < 2) return null;

  const tier = getStreakFeedback(streak).tier;
  const classes = tier === 'excellent'
    ? 'bg-warning-soft text-warning-ink'
    : 'bg-info-soft text-info-ink';

  return (
    <m.span
      key={streak}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.86 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.08 : 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-flex min-h-7 shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-xs font-black ${classes}`}
      aria-label={`当前连续答对 ${streak} 题`}
    >
      <Icon name="bolt" size={14} />
      连对 {streak}
    </m.span>
  );
}
