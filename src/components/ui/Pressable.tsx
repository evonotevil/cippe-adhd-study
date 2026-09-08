import type { ButtonHTMLAttributes, ReactNode } from 'react';

type PressableVariant =
  | 'featured' | 'primary' | 'secondary' | 'neutral' | 'danger' | 'danger-soft' | 'warning' | 'ghost';
type PressableSize = 'sm' | 'md' | 'lg';

interface PressableProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PressableVariant;
  size?: PressableSize;
  block?: boolean;
  leading?: ReactNode;
  trailing?: ReactNode;
  loading?: boolean;
}

export function Pressable({
  variant = 'neutral',
  size = 'md',
  block = false,
  leading,
  trailing,
  loading = false,
  className = '',
  children,
  disabled,
  type = 'button',
  ...props
}: PressableProps) {
  return (
    <button
      type={type}
      className={`pressable pressable--${variant} pressable--${size} ${block ? 'pressable--block' : ''} ${className}`}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="h-5 w-5 animate-spin rounded-full border-[3px] border-current border-r-transparent"
        />
      ) : leading ? (
        <span className="shrink-0" aria-hidden="true">{leading}</span>
      ) : null}
      {children}
      {trailing && !loading ? <span className="shrink-0" aria-hidden="true">{trailing}</span> : null}
    </button>
  );
}
