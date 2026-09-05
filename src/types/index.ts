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
