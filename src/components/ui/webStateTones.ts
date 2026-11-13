export const webStateTones = {
  info: 'border-info-line bg-info-soft text-info-accent',
  success: 'border-brand-line bg-brand-soft text-brand-strong',
  warning: 'border-warning-line bg-warning-soft text-warning-ink',
  error: 'border-danger-line bg-danger-soft text-danger-accent',
};

export type WebStateTone = keyof typeof webStateTones;
