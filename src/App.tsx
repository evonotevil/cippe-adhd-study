import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Home } from './components/Home';
import { TopicPicker } from './components/TopicPicker';
import { RandomSetup } from './components/RandomSetup';
import { PracticeView } from './components/PracticeView';
import { MilestoneView } from './components/MilestoneView';
import { ResultView } from './components/ResultView';
import { Timer } from './components/Timer';
import { Achievements } from './components/Achievements';
import { Settings } from './components/Settings';
import { PageTransition } from './components/ui/PageTransition';
import { Icon, type IconName } from './components/ui/Icons';
import { Pressable } from './components/ui/Pressable';
import { useProgress } from './hooks/useProgress';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTimer } from './hooks/useTimer';
import { useSound } from './hooks/useSound';
import {
  addReinforcementRound,
  createPracticeSession,
  getReinforcementCount,
  getTodayStats,
} from './domain/practice';
import type {
  PracticeSession,
  Question,
  RandomPracticeSettings,
  StudySettings,
} from './types';
import {
  getCatalogTopicProgress,
  getUnseenQuestionCount,
  QUESTION_COUNT,
} from './data/questionCatalog';

let questionBankPromise: Promise<Question[]> | null = null;

function loadQuestionBank(): Promise<Question[]> {
  questionBankPromise ??= import('./data/questions')
    .then(({ QUESTIONS }) => QUESTIONS)
    .catch((error) => {
      questionBankPromise = null;
      throw error;
    });
  return questionBankPromise;
}

const DEFAULT_SETTINGS: StudySettings = {
  tomatoDuration: 15,
  breakDuration: 5,
  soundEnabled: true,
  theme: 'light',
  fontSize: 'medium',
};

const DEFAULT_RANDOM_SETTINGS: RandomPracticeSettings = {
  count: 10,
  topic: null,
  mode: 'study',
};

type View =
  | 'home'
  | 'topics'
  | 'random'
  | 'practice'
  | 'milestone'
  | 'result'
  | 'timer'
  | 'achievements'
  | 'settings';

interface AnswerRecord {
  questionId: number;
  isCorrect: boolean;
  timeSpent: number;
}

interface NavigationItem {
  id: 'home' | 'timer' | 'achievements' | 'settings';
  label: string;
  icon: IconName;
  active: boolean;
}

/** 阶段结束超过这个时间就不再弹提示，只默默记账。 */
const ALERT_FRESHNESS_MS = 2 * 60 * 1000;

const VIEW_TITLES: Record<View, string> = {
  home: '首页',
  topics: '专题练习',
  random: '随机组卷',
  practice: '答题练习',
  milestone: '阶段完成',
  result: '练习结果',
  timer: '番茄钟',
  achievements: '成就',
  settings: '设置',
};

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const hasMounted = useRef(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [questionLoadError, setQuestionLoadError] = useState<string | null>(null);
  const [transitionDirection, setTransitionDirection] = useState<-1 | 0 | 1>(1);
  const navigate = useCallback((view: View, direction: -1 | 0 | 1 = 1) => {
    setTransitionDirection(direction);
    setCurrentView(view);
  }, []);
  const [settings, setSettings] = useLocalStorage<StudySettings>('cippe-settings', DEFAULT_SETTINGS);
  const [activeSession, setActiveSession] = useLocalStorage<PracticeSession | null>(
    'cippe-active-session',
    null,
  );
  const [randomSettings, setRandomSettings] = useLocalStorage<RandomPracticeSettings>(
    'cippe-random-settings',
    DEFAULT_RANDOM_SETTINGS,
  );
  const [lastResult, setLastResult] = useState<PracticeSession | null>(null);
  const {
    progress,
    stats,
    learningStates,
    mistakeIds,
    recordAnswer,
    recordAnswers,
    recordTomatoSession,
  } = useProgress();

  const timer = useTimer(settings.tomatoDuration, settings.breakDuration);
  const { playComplete } = useSound(settings.soundEnabled);
  const [timerAlert, setTimerAlert] = useState<'focus' | 'break' | null>(null);
  const alertRef = useRef<HTMLDivElement>(null);
  const handledFocus = useRef(0);
  const handledBreak = useRef(0);
  const { claimFocusCompletion, claimBreakCompletion, completionSequence, breakSequence, phaseEndedAt } = timer;

  // 专注阶段走完：计一次番茄钟，弹提示，响一声。以前这里只有计数，
  // 人在答题页时对专注结束毫无察觉，连休息都在无声流走。
  useEffect(() => {
    if (completionSequence <= handledFocus.current) return;
    handledFocus.current = completionSequence;
    if (!claimFocusCompletion()) return;
    recordTomatoSession();
    // 关着应用的那几天里番茄钟早就走完了，此刻再弹「休息 5 分钟」毫无意义。
    // 计数照记，提示只留给刚刚发生的。读时钟属于副作用，放在 effect 里。
    if (phaseEndedAt === null || Date.now() - phaseEndedAt > ALERT_FRESHNESS_MS) return;
    // 计时器到点是墙钟事件，不是能在渲染期算出来的值，只能在这里落状态。
    // eslint-disable-next-line react/set-state-in-effect
    setTimerAlert('focus');
    void playComplete();
  }, [claimFocusCompletion, completionSequence, phaseEndedAt, playComplete, recordTomatoSession]);

  useEffect(() => {
    if (breakSequence <= handledBreak.current) return;
    handledBreak.current = breakSequence;
    if (!claimBreakCompletion()) return;
    if (phaseEndedAt === null || Date.now() - phaseEndedAt > ALERT_FRESHNESS_MS) return;
    // eslint-disable-next-line react/set-state-in-effect
    setTimerAlert('break');
    void playComplete();
  }, [breakSequence, claimBreakCompletion, phaseEndedAt, playComplete]);

  // 横幅自己占位；把实测高度直接写成 CSS 变量，吸顶的页头据此下移，
  // 不然它会盖住答题页的进度条和「结束」。走 CSS 变量而不是 React state，
  // 是因为这纯粹是布局尺寸，没必要为它多渲染一轮。
  useEffect(() => {
    const root = document.documentElement;
    if (!timerAlert) {
      root.style.removeProperty('--alert-offset');
      return undefined;
    }
    const measure = () => {
      root.style.setProperty('--alert-offset', `${alertRef.current?.offsetHeight ?? 0}px`);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('resize', measure);
      root.style.removeProperty('--alert-offset');
    };
  }, [timerAlert]);

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.dataset.fontSize = settings.fontSize;
  }, [settings.fontSize, settings.theme]);

  useEffect(() => {
    // Every practice mode needs the question bank, so warm it while the browser
    // is idle instead of making the first tap wait on a ~170 kB download.
    if (typeof window.requestIdleCallback !== 'function') {
      const timeout = window.setTimeout(() => void loadQuestionBank().catch(() => {}), 1200);
      return () => window.clearTimeout(timeout);
    }

    const handle = window.requestIdleCallback(
      () => void loadQuestionBank().catch(() => {}),
      { timeout: 3000 },
    );
    return () => window.cancelIdleCallback(handle);
  }, []);

  useEffect(() => {
    document.title = `${VIEW_TITLES[currentView]} · CIPPE 学习终端`;
    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      mainRef.current?.focus({ preventScroll: true });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [currentView]);

  const topicProgress = useMemo(
    () => getCatalogTopicProgress(learningStates),
    [learningStates],
  );
  const todayStats = useMemo(() => getTodayStats(progress), [progress]);
  const unseenCount = useMemo(() => getUnseenQuestionCount(learningStates), [learningStates]);

  const ensureQuestionBank = useCallback(async () => {
    if (questions) return questions;

    setIsLoadingQuestions(true);
    setQuestionLoadError(null);
    try {
      const loadedQuestions = await loadQuestionBank();
      setQuestions(loadedQuestions);
      return loadedQuestions;
    } catch {
      setQuestionLoadError('题库加载失败，请检查网络后重试。');
      return null;
    } finally {
      setIsLoadingQuestions(false);
    }
  }, [questions]);

  const launchSession = useCallback((session: PracticeSession) => {
    if (session.items.length === 0) return;
    if (
      activeSession &&
      !window.confirm('已有一组未完成练习。结束旧练习并开始新练习吗？')
    ) {
      return;
    }
    setActiveSession(session);
    navigate('practice', 1);
  }, [activeSession, navigate, setActiveSession]);

  const startRecommended = useCallback(async () => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(createPracticeSession(questionBank, learningStates, {
      kind: 'random',
      mode: 'study',
      topic: null,
      count: 5,
    }));
  }, [ensureQuestionBank, launchSession, learningStates]);

  const startMistakes = useCallback(async () => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(createPracticeSession(questionBank, learningStates, { kind: 'mistakes' }));
  }, [ensureQuestionBank, launchSession, learningStates]);

  const startTopic = useCallback(async (topic: string) => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(createPracticeSession(questionBank, learningStates, { kind: 'topic', topic }));
  }, [ensureQuestionBank, launchSession, learningStates]);

  const startRandom = useCallback(async (nextSettings: RandomPracticeSettings) => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    setRandomSettings(nextSettings);
    launchSession(
      createPracticeSession(questionBank, learningStates, {
        kind: 'random',
        mode: nextSettings.mode,
        topic: nextSettings.topic,
        count: nextSettings.count,
      }),
    );
  }, [ensureQuestionBank, launchSession, learningStates, setRandomSettings]);

  const updateActiveSession = useCallback(
    (updater: (session: PracticeSession) => PracticeSession) => {
      setActiveSession((current) => (current ? updater(current) : current));
    },
    [setActiveSession],
  );

  const finishSession = useCallback((session: PracticeSession) => {
    setLastResult(session);
    setActiveSession(null);
    navigate('result', 1);
  }, [navigate, setActiveSession]);

  const submitExam = useCallback((session: PracticeSession, answers: AnswerRecord[]) => {
    recordAnswers(answers);
    finishSession(session);
  }, [finishSession, recordAnswers]);

  const discardEmptySession = useCallback(() => {
    setActiveSession(null);
    navigate('home', -1);
  }, [navigate, setActiveSession]);

  const reachBoundary = useCallback((session: PracticeSession) => {
    setActiveSession(session);
    navigate('milestone', 1);
  }, [navigate, setActiveSession]);

  const continueReinforcement = useCallback(async () => {
    if (!activeSession) return;
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    const nextSession = addReinforcementRound(activeSession, questionBank, learningStates);
    setActiveSession(nextSession);
    navigate('practice', 1);
  }, [activeSession, ensureQuestionBank, learningStates, navigate, setActiveSession]);

  const reviewSpecificMistakes = useCallback(async (questionIds: number[]) => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(
      createPracticeSession(questionBank, learningStates, {
        kind: 'mistakes',
        questionIds,
      }),
    );
  }, [ensureQuestionBank, launchSession, learningStates]);

  const repeatLastSession = useCallback(async () => {
    if (!lastResult) return;
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(
      createPracticeSession(questionBank, learningStates, {
        kind: lastResult.kind,
        mode: lastResult.mode,
        topic: lastResult.topic,
        count: lastResult.requestedCount,
      }),
    );
  }, [ensureQuestionBank, lastResult, launchSession, learningStates]);

  const resumeSession = useCallback(async () => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    navigate('practice', 1);
  }, [ensureQuestionBank, navigate]);

  const isFirstRun = stats.totalAnswered === 0;
  const showAppHeader = currentView !== 'practice';
  const showBottomNav = !['practice', 'milestone', 'result'].includes(currentView);
  const homeTabActive = ['home', 'topics', 'random'].includes(currentView);
  const completedCount = QUESTION_COUNT - unseenCount;
  const navItems: NavigationItem[] = [
    { id: 'home', label: '首页', icon: 'home', active: homeTabActive },
    { id: 'timer', label: '番茄钟', icon: 'timer', active: currentView === 'timer' },
    { id: 'achievements', label: '成就', icon: 'trophy', active: currentView === 'achievements' },
    { id: 'settings', label: '设置', icon: 'settings', active: currentView === 'settings' },
  ];

  return (
    <div
      data-theme={settings.theme}
      data-font-size={settings.fontSize}
      className="min-h-screen bg-app text-ink transition-colors duration-200"
    >
      {timerAlert && (
        <div ref={alertRef} className="app-safe-top sticky top-0 z-50 bg-app px-3 pb-3 pt-3">
          <div
            role="alert"
            className={`mx-auto flex max-w-md items-start gap-3 rounded-[1.25rem] border-2 p-4 shadow-[0_5px_0_var(--ui-shadow-color)] ${
              timerAlert === 'focus'
                ? 'border-brand-shadow bg-brand-soft text-brand-soft-ink'
                : 'border-danger-shadow bg-danger-soft text-danger-ink'
            }`}
          >
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                timerAlert === 'focus' ? 'bg-brand text-brand-ink' : 'bg-danger text-white'
              }`}
            >
              <Icon name={timerAlert === 'focus' ? 'leaf' : 'timer'} size={23} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-black">
                {timerAlert === 'focus' ? '专注结束了' : '休息结束了'}
              </p>
              <p className="mt-0.5 text-sm font-semibold">
                {timerAlert === 'focus'
                  ? `已完成 ${stats.tomatoSessions} 个番茄钟，休息 ${settings.breakDuration} 分钟。`
                  : '可以开始下一轮专注了。'}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pressable variant="neutral" size="sm" onClick={() => setTimerAlert(null)}>
                  知道了
                </Pressable>
                {timerAlert === 'focus' && (
                  <Pressable
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      timer.skipBreak();
                      setTimerAlert(null);
                    }}
                  >
                    跳过休息
                  </Pressable>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {showAppHeader && (
        <header className="app-safe-top app-sticky-top sticky z-40 border-b-2 border-line bg-surface">
          <div className="mx-auto max-w-4xl px-4 pt-3">
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => navigate('home', -1)}
                aria-label="返回首页"
                className="flex min-h-11 shrink-0 items-center gap-2 rounded-xl pr-2 font-black tracking-[-0.02em] text-ink"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-ink shadow-[0_3px_0_var(--ui-brand-strong)]">
                  <Icon name="logo" size={21} />
                </span>
                <span className="max-[359px]:hidden">CIPPE</span>
              </button>

              {isFirstRun ? (
                <span className="whitespace-nowrap rounded-lg bg-brand-soft px-2.5 py-1.5 text-xs font-extrabold text-brand-soft-ink">
                  从这里开始
                </span>
              ) : (
              <div className="flex min-w-0 items-center gap-1.5">
                <span
                  role="img"
                  className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-warning-soft px-2 py-1.5 text-xs font-extrabold text-warning-ink"
                  aria-label={
                    stats.streakDays > 0
                      ? `已连续学习 ${stats.streakDays} 天`
                      : '还没有开始连续学习'
                  }
                >
                  <Icon name="sparkle" size={15} aria-hidden="true" />
                  <span className="tabular-nums" aria-hidden="true">{stats.streakDays} 天</span>
                </span>
                <span
                  role="img"
                  className="flex items-center gap-1 whitespace-nowrap rounded-lg bg-brand-soft px-2 py-1.5 text-xs font-extrabold text-brand-soft-ink"
                  aria-label={`今天已完成 ${todayStats.answered} 题`}
                >
                  <Icon name="check" size={15} aria-hidden="true" />
                  <span className="tabular-nums" aria-hidden="true">今日 {todayStats.answered}</span>
                </span>
              </div>
              )}
            </div>

            <div className={`flex items-center gap-2 pb-2.5 ${isFirstRun ? 'hidden' : 'mt-2'}`}>
              <div
                className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-soft"
                role="progressbar"
                aria-valuenow={completedCount}
                aria-valuemin={0}
                aria-valuemax={QUESTION_COUNT}
                aria-label={`题库进度 ${completedCount} / ${QUESTION_COUNT} 题`}
              >
                <div
                  className="h-full rounded-full bg-brand-strong transition-[width] duration-500"
                  style={{ width: `${Math.round((completedCount / QUESTION_COUNT) * 100)}%` }}
                />
              </div>
              <span className="shrink-0 text-[11px] font-extrabold tabular-nums text-muted" aria-hidden="true">
                {completedCount}/{QUESTION_COUNT}
              </span>
            </div>
          </div>
        </header>
      )}

      <main
        ref={mainRef}
        tabIndex={-1}
        aria-label={VIEW_TITLES[currentView]}
        className={`mx-auto max-w-4xl px-4 focus:outline-none ${showAppHeader ? 'py-5' : 'py-3'} ${showBottomNav ? 'pb-28' : 'pb-8'}`}
      >
        <div hidden={currentView !== 'timer'}>
          <Timer
            duration={settings.tomatoDuration}
            breakDuration={settings.breakDuration}
            timer={timer}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {currentView !== 'timer' && (
            <PageTransition key={currentView} direction={transitionDirection}>
              {currentView === 'home' && (
                <Home
                  unseenCount={unseenCount}
                  mistakeCount={mistakeIds.length}
                  todayAnswered={todayStats.answered}
                  todayCorrect={todayStats.correct}
                  topicCount={topicProgress.length}
                  isFirstRun={isFirstRun}
                  isStarting={isLoadingQuestions}
                  activeSession={activeSession}
                  onStartRecommended={startRecommended}
                  onStartMistakes={startMistakes}
                  onOpenTopics={() => navigate('topics', 1)}
                  onOpenRandom={() => navigate('random', 1)}
                  onResume={resumeSession}
                />
              )}

              {currentView === 'topics' && (
                <TopicPicker
                  topics={topicProgress}
                  onSelect={startTopic}
                  onBack={() => navigate('home', -1)}
                />
              )}

              {currentView === 'random' && (
                <RandomSetup
                  initialSettings={randomSettings}
                  topics={topicProgress}
                  onStart={startRandom}
                  onBack={() => navigate('home', -1)}
                />
              )}

              {currentView === 'practice' && activeSession && questions && (
                <PracticeView
                  key={activeSession.id}
                  session={activeSession}
                  questions={questions}
                  soundEnabled={settings.soundEnabled}
                  updateSession={updateActiveSession}
                  onRecordAnswer={recordAnswer}
                  onSubmitExam={submitExam}
                  onPause={() => navigate('home', -1)}
                  onFinish={finishSession}
                  onDiscardEmpty={discardEmptySession}
                  onBoundary={reachBoundary}
                />
              )}

              {currentView === 'milestone' && activeSession && (
                <MilestoneView
                  session={activeSession}
                  reinforcementCount={
                    questions ? getReinforcementCount(questions, learningStates, activeSession.topic) : null
                  }
                  onContinue={continueReinforcement}
                  onFinish={() => finishSession(activeSession)}
                />
              )}

              {currentView === 'result' && lastResult && (
                <ResultView
                  session={lastResult}
                  remainingMistakeCount={mistakeIds.length}
                  onReviewMistakes={reviewSpecificMistakes}
                  onAgain={repeatLastSession}
                  onHome={() => navigate('home', -1)}
                />
              )}

              {currentView === 'achievements' && (
                <Achievements
                  stats={stats}
                  learningStates={learningStates}
                  topicProgress={topicProgress}
                  progress={progress}
                />
              )}

              {currentView === 'settings' && (
                <Settings settings={settings} onUpdate={setSettings} />
              )}
            </PageTransition>
          )}
        </AnimatePresence>
        {questionLoadError && (
          <p role="alert" className="mx-auto mt-4 max-w-2xl rounded-xl bg-danger-soft px-4 py-3 text-sm font-bold text-danger-ink">
            {questionLoadError}
          </p>
        )}
      </main>

      {showBottomNav && (
        <nav
          aria-label="主导航"
          className="app-safe-bottom fixed bottom-0 left-0 right-0 z-40 border-t-2 border-line bg-surface shadow-[0_-4px_18px_var(--ui-shadow-color)]"
        >
          <div className="mx-auto flex max-w-4xl justify-around px-2 pt-2">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => navigate(item.id, item.id === 'home' ? -1 : 0)}
                aria-current={item.active ? 'page' : undefined}
                className={`relative flex min-h-14 min-w-[68px] flex-col items-center justify-center gap-1 rounded-2xl px-3 py-1.5 font-bold transition-colors duration-150 ${
                  item.active ? 'bg-brand-soft text-brand-soft-ink' : 'text-muted hover:bg-surface-soft hover:text-ink'
                }`}
              >
                <Icon name={item.icon} size={23} />
                <span className="text-[11px]">{item.label}</span>
                {item.active && (
                  <span className="absolute -bottom-0.5 h-1 w-5 rounded-full bg-brand-strong" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;
