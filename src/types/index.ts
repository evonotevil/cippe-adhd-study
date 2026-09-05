export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  topic: string;
  verified: 'accurate' | 'qualified' | 'corrected';
}

export interface UserProgress {
  questionId: number;
  isCorrect: boolean;
  timestamp: string;
  timeSpent: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalAnswered: number;
  correctCount: number;
  streakDays: number;
  lastStudyDate: string;
  tomatoSessions: number;
  achievements: string[];
}

export interface StudySettings {
  tomatoDuration: number;
  breakDuration: number;
  soundEnabled: boolean;
  theme: 'light' | 'dark' | 'eye-care';
  fontSize: 'small' | 'medium' | 'large';
}

export type PracticeKind = 'all' | 'mistakes' | 'topic' | 'random';
export type PracticeMode = 'study' | 'exam';
export type PracticePhase = 'new' | 'reinforce';

export interface PracticeItem {
  key: string;
  questionId: number;
  selectedAnswer?: string;
  submitted?: boolean;
  flagged?: boolean;
  skippedCount: number;
}

export interface PracticeAttempt {
  itemKey: string;
  questionId: number;
  answer: string;
  isCorrect: boolean;
  timeSpent: number;
  timestamp: string;
}

export interface PracticeSession {
  id: string;
  kind: PracticeKind;
  mode: PracticeMode;
  phase: PracticePhase;
  topic: string | null;
  requestedCount: number | null;
  items: PracticeItem[];
  currentIndex: number;
  attempts: PracticeAttempt[];
  elapsedSeconds: number;
  round: number;
  createdAt: string;
}

export interface RandomPracticeSettings {
  count: number;
  topic: string | null;
  mode: PracticeMode;
}

export interface QuestionLearningState {
  attempted: boolean;
  everWrong: boolean;
  consecutiveCorrect: number;
  attempts: number;
  correctAttempts: number;
  lastAttemptAt: string | null;
}

export interface TopicProgress {
  topic: string;
  total: number;
  completed: number;
  correctAttempts: number;
  totalAttempts: number;
}
