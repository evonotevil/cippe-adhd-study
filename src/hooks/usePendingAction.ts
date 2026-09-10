import { useCallback, useRef, useState } from 'react';

/**
 * 管一组按钮里「哪一个正在忙」。
 *
 * 为什么不用一个全局的 isLoading：题库是懒加载的，点哪个入口都要等它，
 * 但转圈只该转在被点的那个按钮上。用一个 boolean 会让整页按钮一起转，
 * 反而看不出是谁在响应。
 *
 * 实测背景：慢速 4G 下，题库还没预取到就点专题卡，从点下去到进练习页有
 * 2229ms —— 这段时间里界面原来是完全静止的。
 */
export function usePendingAction() {
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  // 用 ref 做互斥判断：setState 是异步的，连点两下时读 state 会读到旧值。
  const busyRef = useRef(false);

  const run = useCallback(async (key: string, action: () => void | Promise<void>) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setPendingKey(key);
    try {
      await action();
    } finally {
      busyRef.current = false;
      // 动作成功时组件通常已经跳走并卸载了；React 18 之后对已卸载组件
      // setState 是静默 no-op，所以这里不需要额外的存活判断。
      setPendingKey(null);
    }
  }, []);

  return { pendingKey, run };
}
