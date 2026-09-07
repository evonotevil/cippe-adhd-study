import { m, useReducedMotion } from 'framer-motion';

interface CelebrationProps {
  tone?: 'brand' | 'warning' | 'info';
  compact?: boolean;
}

const particles = [
  { x: -56, y: -42, rotate: -30, delay: 0 },
  { x: -26, y: -68, rotate: 22, delay: 0.025 },
  { x: 12, y: -72, rotate: 50, delay: 0.05 },
  { x: 48, y: -50, rotate: 90, delay: 0.075 },
  { x: 62, y: -14, rotate: 130, delay: 0.1 },
  { x: -64, y: -10, rotate: -90, delay: 0.075 },
  { x: -42, y: 22, rotate: -140, delay: 0.1 },
  { x: 46, y: 24, rotate: 160, delay: 0.125 },
];

const toneClass = {
  brand: 'bg-brand-strong',
  warning: 'bg-warning',
  info: 'bg-info',
};

export function Celebration({ tone = 'brand', compact = false }: CelebrationProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-1/2 top-1/2 z-0 ${compact ? 'h-20 w-20' : 'h-28 w-28'} -translate-x-1/2 -translate-y-1/2`}
    >
      {particles.map((particle, index) => (
        <m.span
          key={`${particle.x}-${particle.y}`}
          className={`absolute left-1/2 top-1/2 block h-2.5 w-1.5 rounded-full ${toneClass[index % 3 === 0 ? tone : index % 3 === 1 ? 'warning' : 'info']}`}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.4 }}
          animate={{
            x: particle.x * (compact ? 0.72 : 1),
            y: particle.y * (compact ? 0.72 : 1),
            rotate: particle.rotate,
            opacity: [0, 1, 1, 0],
            scale: [0.4, 1, 1, 0.75],
          }}
          transition={{
            duration: 0.62,
            delay: particle.delay,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.18, 0.68, 1],
          }}
        />
      ))}
    </div>
  );
}

interface ScoreRingProps {
  value: number;
  label?: string;
}

export function ScoreRing({ value, label = '正确率' }: ScoreRingProps) {
  const reduceMotion = useReducedMotion();
  const safeValue = Math.min(100, Math.max(0, value));
  const circumference = 2 * Math.PI * 46;
  const dashOffset = circumference * (1 - safeValue / 100);
  const tone = safeValue >= 80 ? 'text-brand-strong' : safeValue >= 60 ? 'text-warning' : 'text-info';

  return (
    <div className="relative mx-auto h-32 w-32" role="img" aria-label={`${label} ${safeValue}%`}>
      <svg viewBox="0 0 108 108" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="54" cy="54" r="46" fill="none" stroke="var(--ui-surface-soft)" strokeWidth="10" />
        <m.circle
          cx="54"
          cy="54"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          className={tone}
          initial={false}
          animate={{ strokeDashoffset: dashOffset }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-black tabular-nums text-ink">{safeValue}%</span>
        <span className="text-xs font-bold text-muted">{label}</span>
      </div>
    </div>
  );
}
