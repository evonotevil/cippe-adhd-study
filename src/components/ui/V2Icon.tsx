import home from '../../assets/v2/shell-home.svg';
import homeActive from '../../assets/v2/shell-home-active.svg';
import flag from '../../assets/v2/shell-flag.svg';
import flagActive from '../../assets/v2/shell-flag-active.svg';
import topics from '../../assets/v2/shell-topics.svg';
import topicsActive from '../../assets/v2/shell-topics-active.svg';
import settings from '../../assets/v2/shell-settings.svg';
import settingsActive from '../../assets/v2/shell-settings-active.svg';
import timer from '../../assets/v2/shell-timer.svg';
import chevron from '../../assets/v2/shell-chevron.svg';
import refresh from '../../assets/v2/shell-refresh.svg';
import trophy from '../../assets/v2/shell-trophy.svg';
import bolt from '../../assets/v2/shell-bolt.svg';
import back from '../../assets/v2/shell-back.svg';
import book from '../../assets/v2/shell-book.svg';

const assets = { home, flag, topics, settings, timer, chevron, refresh, trophy, bolt, book, back };
const activeAssets = { home: homeActive, flag: flagActive, topics: topicsActive, settings: settingsActive };
export type V2IconName = keyof typeof assets;

export function V2Icon({ name, active = false }: { name: V2IconName; active?: boolean }) {
  const source = active && name in activeAssets ? activeAssets[name as keyof typeof activeAssets] : assets[name];
  return <span aria-hidden="true" className="inline-block size-6 shrink-0 bg-current" style={{ mask: `url("${source}") center / 24px 24px no-repeat` }} />;
}
