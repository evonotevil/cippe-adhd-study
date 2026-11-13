import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Pressable } from './ui/Pressable';
import { WebStateCard } from './ui/WebStateCard';

function canAddOnSafari() {
  const ios = /iPhone|iPad|iPod/.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return ios && /Safari/.test(navigator.userAgent)
    && !/CriOS|FxiOS|EdgiOS/.test(navigator.userAgent)
    && !(navigator as Navigator & { standalone?: boolean }).standalone
    && !window.matchMedia('(display-mode: standalone)').matches;
}

export function InstallHint() {
  const [dismissed, setDismissed] = useLocalStorage('cippe-install-hint-dismissed', false);
  const [showSteps, setShowSteps] = useState(false);
  if (dismissed || !canAddOnSafari()) return null;

  return (
    <WebStateCard
      title="添加到主屏幕，打开更方便"
      body="在 Safari 分享菜单中选择「添加到主屏幕」，按系统提示完成后，即可从图标打开学习网页。"
    >
      <Pressable variant="featured" size="lg" block aria-expanded={showSteps} aria-controls="install-steps" onClick={() => setShowSteps((value) => !value)}>
        {showSteps ? '收起添加步骤' : '查看添加步骤'}
      </Pressable>
        <ol id="install-steps" hidden={!showSteps} className="ml-5 list-decimal space-y-1 text-sm leading-[22px]">
          <li>在 Safari 打开分享菜单。</li>
          <li>选择「添加到主屏幕」。</li>
          <li>若看到「作为网页 App 打开」，保持开启，然后点「添加」。</li>
        </ol>
      <Pressable variant="neutral" size="lg" block onClick={() => setDismissed(true)}>稍后再说</Pressable>
    </WebStateCard>
  );
}
