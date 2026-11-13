import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from './Spinner';

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
  onClick,
  'aria-disabled': ariaDisabled,
  'aria-busy': ariaBusy,
  type = 'button',
  ...props
}: PressableProps) {
  return (
    <button
      type={type}
      className={`pressable pressable--${variant} pressable--${size} ${block ? 'pressable--block' : ''} ${className}`}
      // Loading stays focusable, but cannot trigger the underlying action.
      disabled={disabled}
      aria-disabled={loading || ariaDisabled}
      aria-busy={loading || ariaBusy}
      onClick={onClick || loading || ariaDisabled ? (event) => {
        if (loading || ariaDisabled === true || ariaDisabled === 'true') event.preventDefault();
        else onClick?.(event);
      } : undefined}
      {...props}
    >
      {loading ? (
        <Spinner size={20} />
      ) : leading ? (
        <span className="shrink-0" aria-hidden="true">{leading}</span>
      ) : null}
      {children}
      {trailing && !loading ? <span className="shrink-0" aria-hidden="true">{trailing}</span> : null}
    </button>
  );
}
