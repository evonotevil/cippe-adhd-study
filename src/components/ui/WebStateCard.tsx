import { useId, type ReactNode } from 'react';

import { webStateTones, type WebStateTone } from './webStateTones';

export function WebStateCard({ title, body, children, tone = 'info', role, headingLevel = 2 }: {
  title: string;
  body: ReactNode;
  children?: ReactNode;
  tone?: WebStateTone;
  role?: 'alert' | 'status';
  headingLevel?: 2 | 3;
}) {
  const titleId = useId();
  const Heading = headingLevel === 3 ? 'h3' : 'h2';
  return (
    <section
      aria-labelledby={titleId}
      role={role}
      className={`space-y-3 rounded-[20px] border-2 p-5 ${webStateTones[tone]}`}
    >
      <Heading id={titleId} className="text-base font-bold leading-6">{title}</Heading>
      <p className="text-sm leading-[22px]">{body}</p>
      {children}
    </section>
  );
}
