import { motion, useReducedMotion } from 'framer-motion';

type ProgressTone = 'brand' | 'info' | 'warning' | 'danger';

interface ProgressBarProps {
  value: number;
  max?: number;
  label: string;
  tone?: ProgressTone;
  className?: string;
}

const toneClasses: Record<ProgressTone, string> = {
  brand: 'bg-brand-strong',
  info: 'bg-info',
  warning: 'bg-warning',
  danger: 'bg-danger',
};

export function ProgressBar({
  value,
  max = 100,
  label,
  tone = 'brand',
  className = '',
}: ProgressBarProps) {
  const reduceMotion = useReducedMotion();
  const safeMax = Math.max(1, max);
  const normalized = Math.min(1, Math.max(0, value / safeMax));

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={safeMax}
      aria-valuenow={Math.min(safeMax, Math.max(0, value))}
      className={`h-3 overflow-hidden rounded-full bg-surface-soft shadow-[inset_0_1px_2px_var(--ui-shadow-color)] ${className}`}
    >
      <motion.div
        className={`h-full w-full origin-left rounded-full ${toneClasses[tone]}`}
        initial={false}
        animate={{ scaleX: normalized }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
