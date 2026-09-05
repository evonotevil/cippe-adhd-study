import { useState, useCallback, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { QuizCard } from './components/QuizCard';
import { Timer } from './components/Timer';
import { Achievements } from './components/Achievements';
import { Settings } from './components/Settings';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { StudySettings, UserProgress, UserStats } from './types';
import { QUESTIONS } from './data/questions';
import { shuffleArray } from './utils/helpers';

const DEFAULT_SETTINGS: StudySettings = {
  tomatoDuration: 15,
  breakDuration: 5,
  soundEnabled: true,
  theme: 'light',
  fontSize: 'medium',
};

const DEFAULT_STATS: UserStats = {
  totalAnswered: 0,
  correctCount: 0,
  streakDays: 0,
  lastStudyDate: '',
  tomatoSessions: 0,
  achievements: [],
};

type View = 'quiz' | 'timer' | 'achievements' | 'settings';

function App() {
  const [currentView, setCurrentView] = useState<View>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [settings, setSettings] = useLocalStorage<StudySettings>('cippe-settings', DEFAULT_SETTINGS);
  const [progress, setProgress] = useLocalStorage<UserProgress[]>('cippe-progress', []);
  const [stats, setStats] = useLocalStorage<UserStats>('cippe-stats', DEFAULT_STATS);

  const questions = useMemo(() => shuffleArray(QUESTIONS), []);
  const currentQuestion = questions[currentQuestionIndex];

  const quizProgress = useMemo(() => {
    const answered = progress.filter(p => p.isCorrect).length;
    return answered / questions.length;
  }, [progress, questions.length]);

  const handleAnswer = useCallback((isCorrect: boolean, timeSpent: number) => {
    if (currentQuestion) {
      const newProgress: UserProgress = {
        questionId: currentQuestion.id,
        isCorrect,
        timestamp: new Date().toISOString(),
        timeSpent,
      };
      setProgress(prev => [...prev, newProgress]);
      setStats(prev => ({
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
        correctCount: prev.correctCount + (isCorrect ? 1 : 0),
      }));
    }
  }, [currentQuestion, setProgress, setStats]);

  const handleNext = useCallback(() => {
    setCurrentQuestionIndex(prev => (prev + 1) % questions.length);
  }, [questions.length]);

  const handleSkip = useCallback(() => {
    setCurrentQuestionIndex(prev => (prev + 1) % questions.length);
  }, [questions.length]);

  const fontSizeClass = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  }[settings.fontSize];

  return (
    <div className={`min-h-screen bg-gray-50 ${fontSizeClass}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">CIPPE 学习终端</h1>
          <div className="text-sm text-gray-600">
            {progress.filter(p => p.isCorrect).length} / {questions.length} 题
          </div>
        </div>
      </header>

      {/* Progress bar */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${quizProgress * 100}%` }}
          />
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        <AnimatePresence mode="wait">
          {currentView === 'quiz' && currentQuestion && (
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <QuizCard
                question={currentQuestion}
                onAnswer={handleAnswer}
                onSkip={handleSkip}
                soundEnabled={settings.soundEnabled}
              />

              <div className="mt-6 text-center">
                <button
                  onClick={handleNext}
                  className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                >
                  下一题 →
                </button>
              </div>
            </motion.div>
          )}

          {currentView === 'timer' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Timer
                duration={settings.tomatoDuration}
                breakDuration={settings.breakDuration}
              />
            </motion.div>
          )}

          {currentView === 'achievements' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Achievements stats={stats} />
            </motion.div>
          )}

          {currentView === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Settings settings={settings} onUpdate={setSettings} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-around py-2">
          {[
            { id: 'quiz' as View, label: '刷题', icon: '📝' },
            { id: 'timer' as View, label: '番茄钟', icon: '🍅' },
            { id: 'achievements' as View, label: '成就', icon: '🏆' },
            { id: 'settings' as View, label: '设置', icon: '⚙️' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                currentView === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;
