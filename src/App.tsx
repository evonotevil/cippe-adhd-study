import { useCallback, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from './components/Home';
import { TopicPicker } from './components/TopicPicker';
import { RandomSetup } from './components/RandomSetup';
import { PracticeView } from './components/PracticeView';
import { MilestoneView } from './components/MilestoneView';
import { ResultView } from './components/ResultView';
import { Timer } from './components/Timer';
import { Achievements } from './components/Achievements';
import { Settings } from './components/Settings';
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

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
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
    setCurrentView('practice');
  }, [activeSession, setActiveSession]);

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
    setCurrentView('result');
  }, [setActiveSession]);

  const submitExam = useCallback((session: PracticeSession, answers: AnswerRecord[]) => {
    recordAnswers(answers);
    finishSession(session);
  }, [finishSession, recordAnswers]);

  const discardEmptySession = useCallback(() => {
    setActiveSession(null);
    setCurrentView('home');
  }, [setActiveSession]);

  const reachBoundary = useCallback((session: PracticeSession) => {
    setActiveSession(session);
    setCurrentView('milestone');
  }, [setActiveSession]);

  const continueReinforcement = useCallback(() => {
    if (!activeSession) return;
    const nextSession = addReinforcementRound(activeSession, QUESTIONS, progress);
    setActiveSession(nextSession);
    setCurrentView('practice');
  }, [activeSession, progress, setActiveSession]);

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

  return (
    <div className={`min-h-screen bg-slate-50 text-gray-900 ${fontSizeClass}`}>
      {showAppHeader && (
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
            <span className="font-bold tracking-tight text-gray-900">CIPPE 学习终端</span>
            <span className="text-xs font-medium text-gray-500">
              已覆盖 {completedCount} / {QUESTIONS.length}
            </span>
          </div>
        </header>
      )}

      <main className={`mx-auto max-w-4xl px-4 ${showAppHeader ? 'py-5' : 'py-3'} ${showBottomNav ? 'pb-24' : 'pb-8'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.16 }}
          >
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
                onOpenTopics={() => setCurrentView('topics')}
                onOpenRandom={() => setCurrentView('random')}
                onResume={() => setCurrentView('practice')}
              />
            )}

            {currentView === 'topics' && (
              <TopicPicker
                topics={topicProgress}
                onSelect={startTopic}
                onBack={() => setCurrentView('home')}
              />
            )}

            {currentView === 'random' && (
              <RandomSetup
                initialSettings={randomSettings}
                topics={topicProgress}
                onStart={startRandom}
                onBack={() => setCurrentView('home')}
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
                onPause={() => setCurrentView('home')}
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
                onHome={() => setCurrentView('home')}
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
          </motion.div>
        </AnimatePresence>
      </main>

      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white/95 shadow-lg backdrop-blur">
          <div className="mx-auto flex max-w-4xl justify-around px-2 py-2">
            {[
              { id: 'home' as const, label: '首页', icon: '⌂', active: homeTabActive },
              { id: 'timer' as const, label: '番茄钟', icon: '🍅', active: currentView === 'timer' },
              { id: 'achievements' as const, label: '成就', icon: '🏆', active: currentView === 'achievements' },
              { id: 'settings' as const, label: '设置', icon: '⚙️', active: currentView === 'settings' },
            ].map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-2 transition-colors ${
                  item.active ? 'bg-blue-50 text-blue-700' : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                <span className="text-xl leading-none">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;
