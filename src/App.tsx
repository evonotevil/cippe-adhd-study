import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Home, PracticeHub, Profile } from './components/Home';
import { StudyPlan } from './components/StudyPlan';
import { STUDY_DAYS, type StudyDay } from './data/studyPlan';
import { TopicPicker } from './components/TopicPicker';
import { MistakeReview } from './components/MistakeReview';
import { RandomSetup } from './components/RandomSetup';
import { PracticeView } from './components/PracticeView';
import { MilestoneView } from './components/MilestoneView';
import { ResultView } from './components/ResultView';
import { Timer } from './components/Timer';
import { Achievements } from './components/Achievements';
import { Settings, type SettingsSection } from './components/Settings';
import { PageTransition } from './components/ui/PageTransition';
import { V2Icon, type V2IconName } from './components/ui/V2Icon';
import logo from './assets/v2/shell-brand-logo.svg';
import { Icon } from './components/ui/Icons';
import { Pressable } from './components/ui/Pressable';
import { ConfirmationDialog } from './components/ui/ConfirmationDialog';
import { WebStateCard } from './components/ui/WebStateCard';
import { ACTIVE_SESSION_STORAGE_KEY, savePracticeDraft } from './utils/persistentStorage';
import { Chip } from './components/ui/Chip';
import { useProgress } from './hooks/useProgress';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTimer } from './hooks/useTimer';
import { useSound } from './hooks/useSound';
import {
  addReinforcementRound,
  createPracticeSession,
  getReinforcementCount,
} from './domain/practice';
import type {
  PracticeSession,
  Question,
  RandomPracticeSettings,
  StudySettings,
} from './types';
import { getCatalogTopicProgress } from './data/questionCatalog';

let questionBankPromise: Promise<Question[]> | null = null;

function loadQuestionBank(): Promise<Question[]> {
  questionBankPromise ??= import('./data/questions')
    .then(({ QUESTIONS }) => QUESTIONS)
    .catch((error) => {
      // 这里把缓存清掉，只是让下一次调用能快速失败、不至于挂在一个已经拒绝的
      // promise 上。它并不能让重试成功：浏览器的 module map 会把「这个模块
      // 加载失败过」永久记下来，同一个 specifier 的 import() 之后直接返回同
      // 一个 rejection，连请求都不会再发（实测点重试后网络请求数没有增加）。
      // 所以真正的重试入口是整页重载，见界面上那个「重新载入」按钮。
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
  | 'plan'
  | 'hub'
  | 'profile'
  | 'mistakes'
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

type TopView = 'home' | 'plan' | 'hub' | 'profile';
const TOP_NAV: { id: TopView; label: string; icon: V2IconName }[] = [
  { id: 'home', label: '今日', icon: 'home' },
  { id: 'plan', label: '备考', icon: 'flag' },
  { id: 'hub', label: '练习', icon: 'topics' },
  { id: 'profile', label: '我的', icon: 'settings' },
];

/** 阶段结束超过这个时间就不再弹提示，只默默记账。 */
const ALERT_FRESHNESS_MS = 2 * 60 * 1000;

const VIEW_TITLES: Record<View, string> = {
  home: '今日',
  plan: '备考',
  hub: '练习',
  profile: '我的',
  mistakes: '错题复习',
  topics: '专题练习',
  random: '随机组卷',
  practice: '答题练习',
  milestone: '阶段完成',
  result: '练习结果',
  timer: '专注一下',
  achievements: '成就收藏',
  settings: '学习设置',
};

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const questionErrorRef = useRef<HTMLDivElement>(null);
  const hasMounted = useRef(false);
  const [currentView, setCurrentView] = useState<View>('home');
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [questionLoading, setQuestionLoading] = useState(false);
  const [questionLoadError, setQuestionLoadError] = useState<'offline' | 'load' | null>(null);
  const [transitionDirection, setTransitionDirection] = useState<-1 | 0 | 1>(1);
  const navigate = useCallback((view: View, direction: -1 | 0 | 1 = 1) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setTransitionDirection(direction);
    setCurrentView(view);
  }, []);
  const [settings, setSettings] = useLocalStorage<StudySettings>('cippe-settings', DEFAULT_SETTINGS);
  const [activeSession, setActiveSession] = useLocalStorage<PracticeSession | null>(
    ACTIVE_SESSION_STORAGE_KEY,
    null,
  );
  const [practiceConfirmation, setPracticeConfirmation] = useState<{ kind: 'replace'; session: PracticeSession } | { kind: 'discard' } | null>(null);
  const [draftSaveStatus, setDraftSaveStatus] = useState<'saved' | 'error' | null>(null);
  const [randomSettings, setRandomSettings] = useLocalStorage<RandomPracticeSettings>(
    'cippe-random-settings',
    DEFAULT_RANDOM_SETTINGS,
  );
  const planMapState = useRef({ scrollY: 0, view: 'map' as 'map' | 'list' });
  const [selectedStudyDay, setSelectedStudyDay] = useState<number>();
  const [completedStudyDays, setCompletedStudyDays] = useLocalStorage<number[]>('cippe-study-plan-v1', []);
  const selectedLesson = STUDY_DAYS.find(({ day }) => day === selectedStudyDay);
  const [lastResult, setLastResult] = useLocalStorage<PracticeSession | null>('cippe-last-result', null);
  const [settingsSection, setSettingsSection] = useState<SettingsSection>();
  const [timerReturnView, setTimerReturnView] = useState<View>('home');
  const [mistakesReturnView, setMistakesReturnView] = useState<View>('hub');
  const [settingsReturnView, setSettingsReturnView] = useState<View>('profile');
  const {
    progress,
    stats,
    learningStates,
    mistakeIds,
    recordAnswer,
    recordAnswers,
    recordTomatoSession,
    replaceProgress,
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

  useEffect(() => {
    if (!questionLoadError) return;
    const frame = requestAnimationFrame(() => questionErrorRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [questionLoadError]);

  const topicProgress = useMemo(
    () => getCatalogTopicProgress(learningStates),
    [learningStates],
  );
  const nextStudyDay = STUDY_DAYS.find(({ day }) => !completedStudyDays.includes(day));
  const recentWrongAnswers = useMemo(() => Object.fromEntries(
    (lastResult?.attempts ?? []).filter(({ isCorrect }) => !isCorrect).map(({ questionId, answer }) => [questionId, answer]),
  ), [lastResult]);
  const recentWrongIds = useMemo(() => Object.keys(recentWrongAnswers).map(Number), [recentWrongAnswers]);

  const ensureQuestionBank = useCallback(async () => {
    if (questions) return questions;

    setQuestionLoadError(null);
    setQuestionLoading(true);
    try {
      const loadedQuestions = await loadQuestionBank();
      setQuestions(loadedQuestions);
      return loadedQuestions;
    } catch {
      setQuestionLoadError(navigator.onLine ? 'load' : 'offline');
      return null;
    } finally {
      setQuestionLoading(false);
    }
  }, [questions]);

  const beginSession = useCallback((session: PracticeSession) => {
    setDraftSaveStatus(null);
    setActiveSession(session);
    navigate('practice', 1);
  }, [navigate, setActiveSession]);

  const launchSession = useCallback((session: PracticeSession) => {
    if (session.items.length === 0) return;
    if (activeSession) {
      setPracticeConfirmation({ kind: 'replace', session });
    } else {
      beginSession(session);
    }
  }, [activeSession, beginSession]);

  const openPlan = useCallback((day?: number) => {
    setSelectedStudyDay(day);
    navigate('plan', -1);
  }, [navigate]);

  const openSettings = (section?: SettingsSection) => {
    setSettingsReturnView(currentView);
    setSettingsSection(section);
    navigate('settings');
  };

  const openTimer = () => {
    setTimerReturnView(currentView);
    navigate('timer');
  };

  const openMistakes = () => {
    setMistakesReturnView(currentView);
    navigate('mistakes');
    void ensureQuestionBank();
  };

  const markStudyDayComplete = useCallback((day: number) => {
    setCompletedStudyDays((current) => current.includes(day) ? current : [...current, day]);
  }, [setCompletedStudyDays]);

  const startStudyPractice = useCallback(async (day: StudyDay) => {
    const practice = day.practice;
    if (!practice) return;
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;

    if (activeSession?.studyDay === day.day) {
      navigate('practice', 1);
      return;
    }

    const ids = practice.questionIds && new Set(practice.questionIds);
    const scope = questionBank.filter((question) =>
      (!ids || ids.has(question.id)) && (!practice.topics || practice.topics.includes(question.topic)),
    );
    const session = createPracticeSession(scope, learningStates, {
      kind: 'random',
      count: practice.count,
      mode: practice.mode,
    });
    launchSession({ ...session, studyDay: day.day });
  }, [activeSession, ensureQuestionBank, launchSession, learningStates, navigate]);

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
    if (session.studyDay && session.items.length > 0 && session.attempts.length === session.items.length) {
      markStudyDayComplete(session.studyDay);
    }
    setLastResult(session);
    setActiveSession(null);
    navigate('result', 1);
  }, [markStudyDayComplete, navigate, setActiveSession, setLastResult]);

  const submitExam = useCallback((session: PracticeSession, answers: AnswerRecord[]) => {
    recordAnswers(answers);
    finishSession(session);
  }, [finishSession, recordAnswers]);

  const activeStudyDay = activeSession?.studyDay;
  const discardEmptySession = useCallback(() => {
    setActiveSession(null);
    if (activeStudyDay) openPlan(activeStudyDay);
    else navigate('hub', -1);
  }, [activeStudyDay, navigate, openPlan, setActiveSession]);

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
    const lesson = STUDY_DAYS.find(({ day }) => day === lastResult.studyDay);
    if (lesson) {
      await startStudyPractice(lesson);
      return;
    }
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    launchSession(
      createPracticeSession(questionBank, learningStates, {
        kind: lastResult.kind,
        mode: lastResult.mode,
        topic: lastResult.topic,
        count: lastResult.requestedCount,
        questionIds: lastResult.kind === 'mistakes' ? [...new Set(lastResult.items.map(({ questionId }) => questionId))] : undefined,
      }),
    );
  }, [ensureQuestionBank, lastResult, launchSession, learningStates, startStudyPractice]);

  const handlePause = (session: PracticeSession) => {
    const saved = savePracticeDraft(session);
    setActiveSession(session);
    setDraftSaveStatus(saved ? 'saved' : 'error');
    if (session.studyDay) openPlan(session.studyDay);
    else navigate('hub', -1);
  };

  const confirmPracticeChange = () => {
    if (!practiceConfirmation) return;
    if (practiceConfirmation.kind === 'replace') beginSession(practiceConfirmation.session);
    else {
      const saved = savePracticeDraft(null);
      setActiveSession(null);
      setDraftSaveStatus(saved ? null : 'error');
    }
    setPracticeConfirmation(null);
  };

  const resumeSession = useCallback(async () => {
    const questionBank = await ensureQuestionBank();
    if (!questionBank) return;
    setDraftSaveStatus(null);
    navigate('practice', 1);
  }, [ensureQuestionBank, navigate]);

  const lessonOpen = currentView === 'plan' && selectedLesson !== undefined;
  const isTopView = TOP_NAV.some(({ id }) => id === currentView);
  const activeTab: View = ['topics', 'random', 'mistakes'].includes(currentView)
    ? 'hub'
    : ['settings', 'achievements'].includes(currentView) ? 'profile' : currentView;
  const showBottomNav = TOP_NAV.some(({ id }) => id === activeTab) && !lessonOpen;
  const customBar = lessonOpen || currentView === 'practice' || currentView === 'result';
  const showAppHeader = !customBar;
  const openTab = (view: TopView) => {
    setQuestionLoadError(null);
    if (view === 'plan') openPlan();
    else navigate(view, 0);
  };
  const goBackFromUtility = () => {
    if (currentView === 'timer') navigate(timerReturnView, -1);
    else if (currentView === 'settings') navigate(settingsReturnView, -1);
    else if (currentView === 'achievements') navigate('profile', -1);
    else if (currentView === 'mistakes') navigate(mistakesReturnView, -1);
    else if (currentView === 'milestone' && activeStudyDay) openPlan(activeStudyDay);
    else navigate('hub', -1);
  };

  return (
    <div
      data-theme={settings.theme}
      data-font-size={settings.fontSize}
      className={`app-page bg-app text-ink transition-colors duration-200 ${timerAlert ? 'app-has-timer-alert' : ''}`}
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
        <header className="app-safe-top app-sticky-top sticky z-40 bg-surface">
          <div className="mx-auto flex h-16 max-w-[680px] items-center gap-3 px-5 pt-2 pb-3">
            {isTopView ? (
              <button
                type="button"
                onClick={() => openTab('home')}
                aria-label="返回今日"
                className="flex min-h-11 min-w-11 items-center gap-3 rounded-xl text-left"
              >
                <img src={logo} alt="" width={36} height={36} className="size-9 rounded-xl shadow-[0_3px_0_#267716]" />
                <span className="text-base font-bold">{currentView === 'home' ? 'CIPPE' : VIEW_TITLES[currentView]}</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button type="button" aria-label="返回" onClick={goBackFromUtility} className="-ml-2 flex size-11 items-center justify-center rounded-xl text-muted hover:bg-surface-soft">
                  <V2Icon name="back" />
                </button>
                <span className="text-base font-bold">{VIEW_TITLES[currentView]}</span>
              </div>
            )}
            {currentView !== 'timer' && (
              <button type="button" aria-label="番茄钟" onClick={openTimer} className="ml-auto flex size-11 items-center justify-center rounded-xl text-muted hover:bg-surface-soft">
                <V2Icon name="timer" />
              </button>
            )}
          </div>
          {showBottomNav && (
            <nav aria-label="主导航" className="mx-auto hidden max-w-[680px] grid-cols-4 gap-3 px-5 pb-2 md:grid">
              {TOP_NAV.map((item) => (
                <Chip key={item.id} aria-current={item.id === activeTab ? 'page' : undefined} onClick={() => openTab(item.id)}>
                  {item.label}
                </Chip>
              ))}
            </nav>
          )}
        </header>
      )}

      <main
        ref={mainRef}
        tabIndex={-1}
        aria-label={VIEW_TITLES[currentView]}
        className={`mx-auto max-w-[680px] px-5 focus:outline-none ${showAppHeader ? 'pt-5' : ''} ${showBottomNav ? 'app-content-with-nav' : customBar ? '' : 'pb-8'}`}
      >
        {draftSaveStatus && currentView !== 'practice' && (
          <div className={`mb-5 ${lessonOpen ? 'mt-4' : ''}`}>
            <WebStateCard
              tone={draftSaveStatus === 'saved' ? 'success' : 'error'}
              role={draftSaveStatus === 'saved' ? 'status' : 'alert'}
              title={draftSaveStatus === 'saved' ? '学习进度已保存到本机' : '学习进度未能写入本机'}
              body={draftSaveStatus === 'saved' ? '你可以稍后回来继续学习。记录只保存在当前浏览器，建议定期导出备份。' : '请先保留此页面，检查浏览器的存储设置。关闭页面可能丢失未保存的进度。'}
            >
              <button type="button" onClick={() => setDraftSaveStatus(null)} className="min-h-11 text-sm font-bold underline">关闭提示</button>
            </WebStateCard>
          </div>
        )}
        <div hidden={currentView !== 'timer'}>
          <Timer
            duration={settings.tomatoDuration}
            breakDuration={settings.breakDuration}
            timer={timer}
            onOpenSettings={() => openSettings('focus')}
            onOpenLesson={nextStudyDay ? () => openPlan(nextStudyDay.day) : undefined}
            lessonLabel={nextStudyDay ? `第 ${nextStudyDay.day} 天 · ${nextStudyDay.title}` : undefined}
          />
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {currentView !== 'timer' && (
            <PageTransition key={currentView} direction={transitionDirection}>
              {currentView === 'home' && (
                <Home
                  completedDays={completedStudyDays}
                  nextDay={nextStudyDay}
                  activeSession={activeSession}
                  focusMinutes={settings.tomatoDuration}
                  onOpenPlan={openPlan}
                  onOpenPractice={() => openTab('hub')}
                  onOpenMistakes={openMistakes}
                  onOpenTimer={openTimer}
                  onResume={resumeSession}
                  onDiscard={() => setPracticeConfirmation({ kind: 'discard' })}
                />
              )}

              {currentView === 'hub' && (
                <PracticeHub
                  activeSession={activeSession}
                  topicCount={topicProgress.length}
                  onResume={resumeSession}
                  onDiscard={() => setPracticeConfirmation({ kind: 'discard' })}
                  onRecommended={startRecommended}
                  onTopics={() => navigate('topics')}
                  onRandom={() => navigate('random')}
                  onMistakes={openMistakes}
                />
              )}

              {currentView === 'profile' && (
                <Profile lastResult={lastResult} onAchievements={() => navigate('achievements')} onTimer={openTimer}
                  onSettings={() => openSettings()} onData={() => openSettings('data')} />
              )}

              {currentView === 'mistakes' && (
                <MistakeReview questions={questions} pendingMistakeIds={mistakeIds}
                  recentMistakeIds={recentWrongIds} recentAnswers={recentWrongAnswers}
                  onStart={reviewSpecificMistakes} />
              )}

              {currentView === 'plan' && (
                <StudyPlan
                  completedDays={completedStudyDays}
                  selectedDay={selectedLesson}
                  activeDay={activeStudyDay}
                  onSelect={(day) => {
                    setSelectedStudyDay(day);
                    window.scrollTo(0, 0);
                  }}
                  onBack={() => {
                    if (selectedLesson) setSelectedStudyDay(undefined);
                    else navigate('home', -1);
                  }}
                  onStart={startStudyPractice}
                  onOpenTimer={openTimer}
                  mapState={planMapState}
                  focusMinutes={settings.tomatoDuration}
                  onComplete={(day) => {
                    markStudyDayComplete(day);
                    openPlan();
                    window.scrollTo(0, 0);
                  }}
                />
              )}

              {currentView === 'topics' && (
                <TopicPicker
                  topics={topicProgress}
                  onSelect={startTopic}
                  onBack={() => navigate('hub', -1)}
                />
              )}

              {currentView === 'random' && (
                <RandomSetup
                  initialSettings={randomSettings}
                  topics={topicProgress}
                  onStart={startRandom}
                  onBack={() => navigate('hub', -1)}
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
                  onPause={handlePause}
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
                  onReviewMistakes={openMistakes}
                  onAgain={repeatLastSession}
                  onHome={() => navigate('home', -1)}
                  onOpenTimer={openTimer}
                  onPlan={lastResult.studyDay ? () => openPlan() : undefined}
                  studyDayCompleted={completedStudyDays.includes(lastResult.studyDay ?? 0)}
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
                <Settings
                  settings={settings}
                  initialSection={settingsSection}
                  onUpdate={setSettings}
                  progress={progress}
                  stats={stats}
                  onApplySynced={replaceProgress}
                />
              )}
            </PageTransition>
          )}
        </AnimatePresence>
        {questionLoading && (
          <div className="my-5">
            <WebStateCard role="status" title="正在准备这组练习" body="首次载入需要联网，请稍候。" />
          </div>
        )}
        {questionLoadError && (
          <div ref={questionErrorRef} tabIndex={-1} className={`my-5 focus:outline-none ${lessonOpen ? 'mb-32' : ''}`}>
            <WebStateCard
              role="alert"
              tone={questionLoadError === 'offline' ? 'warning' : 'error'}
              title={questionLoadError === 'offline' ? '暂时连接不上' : '内容暂时未能载入'}
              body={questionLoadError === 'offline' ? '当前内容暂时无法载入。请检查网络后重试，或返回今日。' : '请稍后重试，或返回上一页。重试不会清除已有的学习记录。'}
            >
              <Pressable
                variant={questionLoadError === 'offline' ? 'featured' : 'neutral'}
                size="lg" block
                onClick={() => {
                  // A failed lazy import is cached until the document is reloaded.
                  // Stay on the available page while the browser reports it is offline.
                  if (navigator.onLine) window.location.reload();
                  else setQuestionLoadError('offline');
                }}
              >
                {questionLoadError === 'offline' ? '重试连接' : '重新载入'}
              </Pressable>
              <Pressable variant="neutral" size="lg" block onClick={() => {
                if (questionLoadError === 'offline') openTab('home');
                else {
                  setQuestionLoadError(null);
                  if (currentView === 'mistakes') navigate(mistakesReturnView, -1);
                }
              }}>{questionLoadError === 'offline' ? '返回今日' : '返回上一页'}</Pressable>
            </WebStateCard>
          </div>
        )}
      </main>

      {showBottomNav && (
        <nav aria-label="主导航" className="app-bottom-nav fixed inset-x-0 bottom-0 z-40 border-t-2 border-line bg-surface pt-3 md:hidden">
          <div className="mx-auto grid max-w-[640px] grid-cols-4">
            {TOP_NAV.map((item) => {
              const active = item.id === activeTab;
              return (
                <button type="button" key={item.id} onClick={() => openTab(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-[54px] flex-col items-center gap-1 rounded-xl text-xs font-medium ${active ? 'text-brand-strong' : 'text-muted'}`}>
                  <span className={`flex h-8 w-14 items-center justify-center rounded-xl ${active ? 'bg-brand-soft' : ''}`}>
                    <V2Icon name={item.icon} active={active} />
                  </span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}
      {practiceConfirmation && (
        <ConfirmationDialog
          title={practiceConfirmation.kind === 'replace' ? '要开始一组新练习吗？' : '要放弃本次进度吗？'}
          description={practiceConfirmation.kind === 'replace'
            ? '当前有一组未完成的练习。开始新练习会丢失这组的未完成进度，已记录的学习数据不受影响。'
            : '这组练习将无法继续。已经记录的学习数据不会清除。'}
          confirmLabel={practiceConfirmation.kind === 'replace' ? '开始新练习' : '放弃进度'}
          cancelLabel={practiceConfirmation.kind === 'replace' ? '保留原练习' : '保留进度'}
          onConfirm={confirmPracticeChange}
          onCancel={() => setPracticeConfirmation(null)}
        />
      )}
    </div>
  );
}

export default App;
