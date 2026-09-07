import { useCallback, useMemo, useState } from 'react';
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
import { useProgress } from './hooks/useProgress';
import { useLocalStorage } from './hooks/useLocalStorage';
import {
  addReinforcementRound,
  createPracticeSession,
  getTodayStats,
  getTopicProgress,
} from './domain/practice';
import type {
  PracticeSession,
  RandomPracticeSettings,
  StudySettings,
} from './types';
import { QUESTIONS } from './data/questions';

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

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
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
  } = useProgress();

  const topicProgress = useMemo(() => getTopicProgress(QUESTIONS, progress), [progress]);
  const todayStats = useMemo(() => getTodayStats(progress), [progress]);
  const unseenCount = useMemo(
    () => QUESTIONS.filter((question) => !learningStates[question.id]?.attempted).length,
    [learningStates],
  );

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

  const startAll = useCallback(() => {
    launchSession(createPracticeSession(QUESTIONS, progress, { kind: 'all' }));
  }, [launchSession, progress]);

  const startMistakes = useCallback(() => {
    launchSession(createPracticeSession(QUESTIONS, progress, { kind: 'mistakes' }));
  }, [launchSession, progress]);

  const startTopic = useCallback((topic: string) => {
    launchSession(createPracticeSession(QUESTIONS, progress, { kind: 'topic', topic }));
  }, [launchSession, progress]);

  const startRandom = useCallback((nextSettings: RandomPracticeSettings) => {
    setRandomSettings(nextSettings);
    launchSession(
      createPracticeSession(QUESTIONS, progress, {
        kind: 'random',
        mode: nextSettings.mode,
        topic: nextSettings.topic,
        count: nextSettings.count,
      }),
    );
  }, [launchSession, progress, setRandomSettings]);

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

  const continueReinforcement = useCallback(() => {
    if (!activeSession) return;
    const nextSession = addReinforcementRound(activeSession, QUESTIONS, progress);
    setActiveSession(nextSession);
    navigate('practice', 1);
  }, [activeSession, navigate, progress, setActiveSession]);

  const reviewSpecificMistakes = useCallback((questionIds: number[]) => {
    launchSession(
      createPracticeSession(QUESTIONS, progress, {
        kind: 'mistakes',
        questionIds,
      }),
    );
  }, [launchSession, progress]);

  const repeatLastSession = useCallback(() => {
    if (!lastResult) return;
    launchSession(
      createPracticeSession(QUESTIONS, progress, {
        kind: lastResult.kind,
        mode: lastResult.mode,
        topic: lastResult.topic,
        count: lastResult.requestedCount,
      }),
    );
  }, [lastResult, launchSession, progress]);

  const fontSizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }[settings.fontSize];

  const showAppHeader = currentView !== 'practice';
  const showBottomNav = !['practice', 'milestone', 'result'].includes(currentView);
  const homeTabActive = ['home', 'topics', 'random'].includes(currentView);
  const completedCount = QUESTIONS.length - unseenCount;
  const navItems: NavigationItem[] = [
    { id: 'home', label: '首页', icon: 'home', active: homeTabActive },
    { id: 'timer', label: '番茄钟', icon: 'timer', active: currentView === 'timer' },
    { id: 'achievements', label: '成就', icon: 'trophy', active: currentView === 'achievements' },
    { id: 'settings', label: '设置', icon: 'settings', active: currentView === 'settings' },
  ];

  return (
    <div
      data-theme={settings.theme}
      className={`min-h-screen bg-app text-ink transition-colors duration-200 ${fontSizeClass}`}
    >
      {showAppHeader && (
        <header className="app-safe-top sticky top-0 z-40 border-b-2 border-line bg-surface">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={() => navigate('home', -1)}
              aria-label="返回首页"
              className="flex min-h-11 items-center gap-2 rounded-xl pr-2 font-black tracking-[-0.02em] text-ink"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-brand-ink shadow-[0_3px_0_var(--ui-brand-strong)]">
                <Icon name="book" size={21} />
              </span>
              <span>CIPPE</span>
            </button>
            <div className="flex items-center gap-2 rounded-xl bg-surface-soft px-3 py-2 text-xs font-extrabold text-muted">
              <Icon name="target" size={17} className="text-brand-strong" />
              <span className="tabular-nums">{completedCount}/{QUESTIONS.length}</span>
            </div>
          </div>
        </header>
      )}

      <main className={`mx-auto max-w-4xl px-4 ${showAppHeader ? 'py-5' : 'py-3'} ${showBottomNav ? 'pb-28' : 'pb-8'}`}>
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={currentView} direction={transitionDirection}>
            {currentView === 'home' && (
              <Home
                totalQuestions={QUESTIONS.length}
                unseenCount={unseenCount}
                mistakeCount={mistakeIds.length}
                todayAnswered={todayStats.answered}
                todayCorrect={todayStats.correct}
                topicCount={topicProgress.length}
                activeSession={activeSession}
                onStartAll={startAll}
                onStartMistakes={startMistakes}
                onOpenTopics={() => navigate('topics', 1)}
                onOpenRandom={() => navigate('random', 1)}
                onResume={() => navigate('practice', 1)}
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

            {currentView === 'practice' && activeSession && (
              <PracticeView
                session={activeSession}
                questions={QUESTIONS}
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

            {currentView === 'timer' && (
              <Timer
                duration={settings.tomatoDuration}
                breakDuration={settings.breakDuration}
              />
            )}

            {currentView === 'achievements' && <Achievements stats={stats} />}

            {currentView === 'settings' && (
              <Settings settings={settings} onUpdate={setSettings} />
            )}
          </PageTransition>
        </AnimatePresence>
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
