import type { SVGProps } from 'react';

export type IconName =
  | 'home'
  | 'timer'
  | 'trophy'
  | 'settings'
  | 'play'
  | 'refresh'
  | 'topics'
  | 'bolt'
  | 'book'
  | 'chevron-right'
  | 'chevron-left'
  | 'arrow-right'
  | 'arrow-left'
  | 'close'
  | 'check'
  | 'x'
  | 'flag'
  | 'clock'
  | 'sparkle'
  | 'target'
  | 'download'
  | 'upload'
  | 'volume'
  | 'volume-off'
  | 'sun'
  | 'moon'
  | 'leaf'
  | 'lock'
  | 'unlock'
  | 'pause'
  | 'rotate';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 24, ...props }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
    ...props,
  };

  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    timer: <><circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3" /></>,
    trophy: <><path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" /><path d="M8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 12v5M8 21h8M9 17h6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.14.38.36.72.66 1 .3.27.7.4 1.1.4H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" /></>,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    refresh: <><path d="M20 6v5h-5" /><path d="M18.5 9A7.5 7.5 0 1 0 19 15" /></>,
    topics: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /></>,
    bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16ZM20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" /></>,
    'chevron-right': <path d="m9 18 6-6-6-6" />,
    'chevron-left': <path d="m15 18-6-6 6-6" />,
    'arrow-right': <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    'arrow-left': <><path d="M19 12H5" /><path d="m10 17-5-5 5-5" /></>,
    close: <><path d="m6 6 12 12" /><path d="M18 6 6 18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    x: <><path d="m7 7 10 10" /><path d="M17 7 7 17" /></>,
    flag: <><path d="M5 21V4" /><path d="M5 4h10l-1 4 3 3H5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    sparkle: <><path d="m12 2 1.5 5.1L18 9l-4.5 1.9L12 16l-1.5-5.1L6 9l4.5-1.9L12 2Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    upload: <><path d="M12 17V5" /><path d="m7 10 5-5 5 5" /><path d="M5 21h14" /></>,
    volume: <><path d="M11 5 6 9H3v6h3l5 4V5Z" /><path d="M15 9a4 4 0 0 1 0 6M17.5 6.5a8 8 0 0 1 0 11" /></>,
    'volume-off': <><path d="M11 5 6 9H3v6h3l5 4V5ZM16 9l5 5M21 9l-5 5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41" /></>,
    moon: <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" />,
    leaf: <><path d="M20 4C10 4 5 9 5 16c0 2 1 4 3 4 7 0 12-6 12-16Z" /><path d="M5 20c3-5 7-8 12-11" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    unlock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 7.5-2" /></>,
    pause: <><path d="M9 5v14" /><path d="M15 5v14" /></>,
    rotate: <><path d="M4 12a8 8 0 1 0 2.3-5.7L4 8.6" /><path d="M4 4v4.6h4.6" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
