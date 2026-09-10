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
  type = 'button',
  ...props
}: PressableProps) {
  return (
    <button
      type={type}
      className={`pressable pressable--${variant} pressable--${size} ${block ? 'pressable--block' : ''} ${className}`}
      /* 正在加载时不用 disabled：浏览器会把焦点从 disabled 元素上收走，键盘用户
         按下回车之后焦点直接掉回 body，接下来几秒钟不知道自己在哪。改用
         aria-disabled —— 语义一样是「现在不能用」，但按钮还在 Tab 序列里，焦点环
         也还在。重复触发由调用方的 usePendingAction 拦住。 */
      disabled={disabled}
      aria-disabled={loading || undefined}
      aria-busy={loading || undefined}
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
