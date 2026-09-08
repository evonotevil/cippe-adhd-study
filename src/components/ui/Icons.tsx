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
  | 'rotate'
  // 品牌标记
  | 'logo'
  // 成就：题库进度
  | 'sprout'
  | 'bars-rising'
  | 'pages'
  | 'gauge'
  | 'summit'
  // 成就：Topic 精通
  | 'grid-nine'
  | 'square-check'
  | 'panels'
  | 'doc-lock'
  // 成就：学习习惯
  | 'days'
  | 'flame'
  | 'calendar-check'
  | 'tomato'
  | 'hourglass'
  // 成就：挑战
  | 'medal'
  | 'comeback'
  | 'archive-check';

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

    // 品牌：翻开的书 + 对勾，学习与答对
    logo: <><path d="M12 2.6 4.3 5.5v6.1c0 4.4 3.2 7.8 7.7 9.8 4.5-2 7.7-5.4 7.7-9.8V5.5L12 2.6Z" /><path d="M7.7 8.5c1.7 0 3.2.45 4.3 1.35 1.1-.9 2.6-1.35 4.3-1.35v5.7c-1.7 0-3.2.45-4.3 1.35-1.1-.9-2.6-1.35-4.3-1.35V8.5Z" /><path d="M12 9.85v5.7" /></>,

    // 题库进度
    sprout: <><path d="M12 21v-7.5" /><path d="M12 13.5c-3.6 0-6.2-2.3-6.2-5.7 3.6 0 6.2 2.3 6.2 5.7Z" /><path d="M12 13.5c0-4 2.8-6.7 6.2-6.7 0 4-2.8 6.7-6.2 6.7Z" /></>,
    'bars-rising': <><path d="M3.5 20.5h17" /><path d="M6.5 20.5V16" /><path d="M12 20.5v-8.5" /><path d="M17.5 20.5V7" /></>,
    pages: <><path d="M12 3.2 3.8 7.3 12 11.4l8.2-4.1L12 3.2Z" /><path d="m3.8 12 8.2 4.1 8.2-4.1" /><path d="m3.8 16.7 8.2 4.1 8.2-4.1" /></>,
    gauge: <><circle cx="12" cy="12" r="8.5" opacity="0.35" /><path d="M12 3.5A8.5 8.5 0 1 1 4.64 16.25" strokeWidth="3.6" /></>,
    summit: <><path d="M2.5 20.5h19" /><path d="m5 20.5 6.2-10.5 3.4 5.2 2.6-3.4 4.3 8.7" /><path d="M11.2 10V3.5l4.3 1.7-4.3 1.8" /></>,

    // Topic 精通
    'grid-nine': <><circle cx="6" cy="6" r="1.5" /><circle cx="12" cy="6" r="1.5" /><circle cx="18" cy="6" r="1.5" /><circle cx="6" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="18" cy="12" r="1.5" /><circle cx="6" cy="18" r="1.5" /><circle cx="12" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></>,
    'square-check': <><rect x="3.5" y="3.5" width="17" height="17" rx="3.5" /><path d="m8.2 12 2.6 2.6 5-5.4" /></>,
    panels: <><rect x="2.5" y="7.5" width="5.5" height="9" rx="1.8" /><rect x="9.2" y="7.5" width="5.5" height="9" rx="1.8" /><rect x="15.9" y="7.5" width="5.5" height="9" rx="1.8" /></>,
    'doc-lock': <><path d="M4.8 3.2h14.4v17.6H4.8z" /><rect x="8.8" y="11.4" width="6.4" height="5.4" rx="1.4" /><path d="M10.2 11.4v-1.6a1.8 1.8 0 0 1 3.6 0v1.6" /></>,

    // 学习习惯
    days: <><circle cx="5" cy="12" r="2.2" /><circle cx="12" cy="12" r="2.2" /><circle cx="19" cy="12" r="2.2" /><path d="M7.4 12h2.2M14.4 12h2.2" /></>,
    flame: <><path d="M12 21c3.5 0 6.2-2.5 6.2-5.9 0-4.6-4.4-6-3.4-11.6-3.1 1.6-4.9 4.5-4.9 6.9 0 0-1.5-1-1.5-3.2C6.5 9 5.8 12 5.8 15.1 5.8 18.5 8.5 21 12 21Z" /></>,
    'calendar-check': <><rect x="3.5" y="5" width="17" height="16" rx="2.8" /><path d="M3.5 10h17M8 2.8v4M16 2.8v4" /><path d="m9.2 15.4 2.2 2.2 4.4-4.8" /></>,
    tomato: <><path d="M12 7.2c-4.3 0-7.4 3-7.4 6.9 0 3.7 3.1 6.7 7.4 6.7s7.4-3 7.4-6.7c0-3.9-3.1-6.9-7.4-6.9Z" /><path d="M12 7.2V5" /><path d="M12 5C10.6 3.4 9 3.3 7.4 3.8 7.9 5.4 9.1 6.4 10.7 6.4M12 5c1.4-1.6 3-1.7 4.6-1.2-.5 1.6-1.7 2.6-3.3 2.6" /></>,
    hourglass: <><path d="M6.5 3h11M6.5 21h11" /><path d="M7.6 3v3.2c0 2.3 4.4 3.6 4.4 5.8s-4.4 3.5-4.4 5.8V21" /><path d="M16.4 3v3.2c0 2.3-4.4 3.6-4.4 5.8s4.4 3.5 4.4 5.8V21" /></>,

    // 挑战
    medal: <><circle cx="12" cy="8.8" r="5.8" /><path d="m9.6 8.8 1.8 1.8 3.4-3.7" /><path d="m7.8 13.9-1.4 7.3 5.6-3 5.6 3-1.4-7.3" /></>,
    comeback: <><path d="M20.4 12a8.4 8.4 0 1 1-2.6-6.1" /><path d="M18.6 2.6v3.6H15" /><path d="m8.6 12 2.4 2.4 4.4-4.8" /></>,
    'archive-check': <><path d="M4 8.5h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-10Z" /><path d="M2.8 3.8h18.4v4.7H2.8z" /><path d="m9 14.2 2.2 2.2 4.2-4.6" /></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}
