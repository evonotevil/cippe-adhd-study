import { useRef, useState } from 'react';
import { LESSON_WALKTHROUGHS } from '../data/lessonWalkthroughs';
import { EXAM_PROMPTS } from '../data/examPrompts';
import { GUIDED_LESSONS } from '../data/guidedLessons';
import type { StudyDay } from '../data/studyPlan';
import { Pressable } from './ui/Pressable';

const STEPS = ['learn', 'variant1', 'variant2', 'recall', 'map'] as const;
type Step = (typeof STEPS)[number];

export function GuidedLesson({ lesson }: { lesson: StudyDay }) {
  const guide = GUIDED_LESSONS[lesson.day];
  const walkthrough = LESSON_WALKTHROUGHS[lesson.day];
  const [step, setStep] = useState<Step>('learn');
  const [revealed, setRevealed] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);

  const go = (next: Step) => {
    setRevealed(false);
    setStep(next);
    requestAnimationFrame(() => {
      heading.current?.focus({ preventScroll: true });
      heading.current?.scrollIntoView({ block: 'start' });
    });
  };

  const titles: Record<Step, string> = {
    learn: '先学讲义要点',
    variant1: '原创变式 1 / 2', variant2: '原创变式 2 / 2',
    recall: '合上笔记，自己说一遍', map: '本课思维导图',
  };
  const stepIndex = STEPS.indexOf(step);
  const variation = step === 'variant1' ? walkthrough.variations[0] : step === 'variant2' ? walkthrough.variations[1] : undefined;
  const question = variation?.question ?? lesson.recall;
  const isQuestionStep = Boolean(variation) || step === 'recall';
  const nextLabel = step === 'learn' ? '试第 1 道变式'
    : step === 'variant1' ? '试第 2 道变式' : step === 'recall' ? '打开本课导图'
    : step === 'map' ? '重读这一课' : '进入课末回忆';

  function renderBranches() {
    return (
      <ul className="space-y-3">
        {lesson.notes.map((note, index) => (
          <li key={note} className="rounded-xl border border-line bg-surface p-4">
            <h3 className="font-bold text-brand-strong">{guide.branches[index]}</h3>
            <p className="mt-1 text-sm leading-relaxed">{note}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="space-y-4 rounded-[20px] border-2 border-brand-line bg-brand-soft p-4 sm:p-5" aria-labelledby="guided-heading">
      <p className="text-xs font-bold text-brand-strong">{stepIndex + 1} / {STEPS.length} · 本课导学</p>
      <h2 id="guided-heading" ref={heading} tabIndex={-1} className="scroll-mt-24 text-xl font-bold">{titles[step]}</h2>
      {step === 'learn' && (
        <>
          <div className="rounded-xl bg-surface p-4">
            <h3 className="font-bold text-brand-strong">先看这个例子</h3>
            <p className="mt-1 text-sm leading-relaxed">{walkthrough.context}</p>
          </div>
          <ol className="list-decimal space-y-3 pl-6 text-sm leading-relaxed">
            {walkthrough.walkthrough.map((reason) => <li key={reason}>{reason}</li>)}
          </ol>
          <details className="rounded-xl bg-surface px-4">
            <summary className="min-h-11 cursor-pointer py-3 text-sm font-bold">展开讲义要点</summary>
            <div className="pb-4">{renderBranches()}</div>
          </details>
        </>
      )}
      {(step === 'learn' || step === 'map') && (
        <aside className="rounded-xl border border-info-line bg-info-soft p-4">
          <h3 className="font-bold text-info-accent">题库怎么问</h3>
          <p className="mt-1 text-sm leading-relaxed">{EXAM_PROMPTS[lesson.day]}</p>
        </aside>
      )}
      {isQuestionStep && (
        <>
          {variation && (
            <>
              <details className="rounded-xl bg-surface px-4">
                <summary className="min-h-11 cursor-pointer py-3 text-sm font-bold">回看原例</summary>
                <p className="pb-4 text-sm leading-relaxed">{walkthrough.context}</p>
              </details>
              <p className="rounded-xl border border-info-line bg-info-soft p-4 text-sm leading-relaxed">
                <strong>回到原例，只改这一点。</strong> {variation.change}
              </p>
            </>
          )}
          <p className="text-base font-bold leading-relaxed">{question}</p>
          <p className="text-sm text-muted">先在心里回答，或者试着用一句话说出理由。</p>
          {revealed && (variation ? (
            <div className="rounded-xl border border-info-line bg-info-soft p-4">
              <h3 className="font-bold text-info-accent">关键判断</h3>
              <p className="mt-1 text-sm leading-relaxed">{variation.answer}</p>
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className="font-bold text-brand-strong">用这几条检查自己的答案</h3>
              {renderBranches()}
            </div>
          ))}
        </>
      )}
      {step === 'map' && (
        <>
          <p className="rounded-xl bg-surface px-4 py-3 font-bold text-brand-strong">{lesson.title}</p>
          <div className="ml-4 border-l-2 border-brand-line pl-4">
            <ul className="space-y-2">
              {walkthrough.map.map((line) => <li key={line} className="rounded-xl bg-surface p-3 text-sm font-bold">{line}</li>)}
            </ul>
          </div>
          <p className="text-sm text-muted">接下来用下方的题库练习检验自己，错题会照常记入错题本。</p>
        </>
      )}
      {isQuestionStep && !revealed ? (
        <Pressable variant="featured" block onClick={() => setRevealed(true)}>
          {step === 'recall' ? '查看回忆提示' : '查看解析'}
        </Pressable>
      ) : (
        <Pressable variant={step === 'map' ? 'neutral' : 'featured'} block onClick={() => go(STEPS[stepIndex + 1] ?? 'learn')}>
          {nextLabel}
        </Pressable>
      )}
    </section>
  );
}
