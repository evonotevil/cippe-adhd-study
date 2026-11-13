import type { ButtonHTMLAttributes } from 'react';

export function Chip({ className = '', type = 'button', ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} type={type} className={`v2-chip ${className}`} />;
}
