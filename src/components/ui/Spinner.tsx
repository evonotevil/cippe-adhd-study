interface SpinnerProps {
  size?: number;
  className?: string;
}

/**
 * 加载指示器。转圈本身就是它要传达的全部信息，所以带 data-spinner 标记 ——
 * index.css 的 prefers-reduced-motion 块会把全局动画压到 0.01ms，那样它会
 * 冻成一个静止的残缺圆环，什么都说不出来。那里对这个标记做了例外处理。
 *
 * 它是纯装饰元素：状态由外层按钮的 aria-busy 播报给读屏，这里 aria-hidden。
 */
export function Spinner({ size = 20, className = '' }: SpinnerProps) {
  return (
    <span
      data-spinner
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`inline-block shrink-0 animate-spin rounded-full border-[3px] border-current border-r-transparent ${className}`}
    />
  );
}
