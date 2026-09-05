import type {
  PracticeItem,
  PracticeKind,
  PracticeMode,
  PracticeSession,
  Question,
  QuestionLearningState,
  TopicProgress,
  UserProgress,
} from '../types';
import { shuffleArray } from '../utils/helpers';

export const TOPIC_ORDER = [
  '历史沿革/95-46-EC',
  'Convention 108/108+',
  '监管机构',
  'GDPR',
  'ePrivacy指令',
  'LED执法指令',
  '判例法',
  'AI Act',
  'Data Act',
] as const;

interface CreateSessionOptions {
  kind: PracticeKind;
  mode?: PracticeMode;
  topic?: string | null;
  count?: number | null;
  questionIds?: number[];
}

function createSessionId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createItems(sessionId: string, round: number, questionIds: number[]): PracticeItem[] {
  return questionIds.map((questionId, index) => ({
    key: `${sessionId}-${round}-${index}-${questionId}`,
    questionId,
    skippedCount: 0,
  }));
}

export function buildLearningStates(progress: UserProgress[]): Record<number, QuestionLearningState> {
  const states: Record<number, QuestionLearningState> = {};
  const chronological = [...progress].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );

  chronological.forEach((attempt) => {
    const state = states[attempt.questionId] ?? {
      attempted: false,
      everWrong: false,
      consecutiveCorrect: 0,
      attempts: 0,
      correctAttempts: 0,
      lastAttemptAt: null,
    };

    state.attempted = true;
    state.attempts += 1;
    state.lastAttemptAt = attempt.timestamp;

    if (attempt.isCorrect) {
      state.correctAttempts += 1;
      state.consecutiveCorrect += 1;
    } else {
      state.everWrong = true;
      state.consecutiveCorrect = 0;
    }

    states[attempt.questionId] = state;
  });

  return states;
}

export function getPendingMistakeIds(progress: UserProgress[]): number[] {
  const states = buildLearningStates(progress);
  return Object.entries(states)
    .filter(([, state]) => state.everWrong && state.consecutiveCorrect < 2)
    .map(([questionId]) => Number(questionId));
}

export function getTodayStats(progress: UserProgress[]): { answered: number; correct: number } {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const todayAttempts = progress.filter((attempt) => {
    const date = new Date(attempt.timestamp);
    const localDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    return localDate === today;
  });

  return {
    answered: todayAttempts.length,
    correct: todayAttempts.filter((attempt) => attempt.isCorrect).length,
  };
}

export function getTopicProgress(
  questions: Question[],
  progress: UserProgress[],
): TopicProgress[] {
  const states = buildLearningStates(progress);
  const topics = Array.from(new Set(questions.map((question) => question.topic)));
  const orderedTopics = [
    ...TOPIC_ORDER.filter((topic) => topics.includes(topic)),
    ...topics.filter((topic) => !TOPIC_ORDER.includes(topic as (typeof TOPIC_ORDER)[number])).sort(),
  ];

  return orderedTopics.map((topic) => {
    const topicQuestions = questions.filter((question) => question.topic === topic);
    return topicQuestions.reduce<TopicProgress>(
      (summary, question) => {
        const state = states[question.id];
        if (state?.attempted) summary.completed += 1;
        summary.correctAttempts += state?.correctAttempts ?? 0;
        summary.totalAttempts += state?.attempts ?? 0;
        return summary;
      },
      {
        topic,
        total: topicQuestions.length,
        completed: 0,
        correctAttempts: 0,
        totalAttempts: 0,
      },
    );
  });
}

function getScopeQuestions(questions: Question[], topic: string | null): Question[] {
  return topic ? questions.filter((question) => question.topic === topic) : questions;
}

function getReinforcementIds(
  questions: Question[],
  progress: UserProgress[],
  topic: string | null,
): number[] {
  const states = buildLearningStates(progress);
  const pendingMistakes = new Set(getPendingMistakeIds(progress));
  const scope = getScopeQuestions(questions, topic);
  const mistakes = shuffleArray(scope.filter((question) => pendingMistakes.has(question.id))).map(
    (question) => question.id,
  );
  const mistakeIdSet = new Set(mistakes);
  const remaining = scope
    .filter((question) => !mistakeIdSet.has(question.id))
    .sort((a, b) => {
      const aTime = states[a.id]?.lastAttemptAt
        ? new Date(states[a.id].lastAttemptAt as string).getTime()
        : 0;
      const bTime = states[b.id]?.lastAttemptAt
        ? new Date(states[b.id].lastAttemptAt as string).getTime()
        : 0;
      return aTime - bTime;
    })
    .map((question) => question.id);

  return [...mistakes, ...remaining];
}

export function createPracticeSession(
  questions: Question[],
  progress: UserProgress[],
  options: CreateSessionOptions,
): PracticeSession {
  const id = createSessionId();
  const topic = options.topic ?? null;
  const mode = options.mode ?? 'study';
  const states = buildLearningStates(progress);
  let phase: PracticeSession['phase'] = 'new';
  let questionIds: number[];

  if (options.questionIds) {
    questionIds = shuffleArray(options.questionIds);
  } else if (options.kind === 'mistakes') {
    questionIds = shuffleArray(getPendingMistakeIds(progress));
  } else {
    const scope = getScopeQuestions(questions, topic);
    const unseen = shuffleArray(scope.filter((question) => !states[question.id]?.attempted)).map(
      (question) => question.id,
    );

    if (options.kind === 'random') {
      const seen = shuffleArray(scope.filter((question) => states[question.id]?.attempted)).map(
        (question) => question.id,
      );
      const requestedCount = Math.max(1, options.count ?? 10);
      questionIds = [...unseen, ...seen].slice(0, Math.min(requestedCount, scope.length));
    } else if (unseen.length > 0) {
      questionIds = unseen;
    } else {
      phase = 'reinforce';
      questionIds = getReinforcementIds(questions, progress, topic);
    }
  }

  return {
    id,
    kind: options.kind,
    mode,
    phase,
    topic,
    requestedCount: options.kind === 'random' ? options.count ?? 10 : null,
    items: createItems(id, 0, questionIds),
    currentIndex: 0,
    attempts: [],
    elapsedSeconds: 0,
    round: 0,
    createdAt: new Date().toISOString(),
  };
}

export function addReinforcementRound(
  session: PracticeSession,
  questions: Question[],
  progress: UserProgress[],
): PracticeSession {
  const round = session.round + 1;
  const questionIds = getReinforcementIds(questions, progress, session.topic);

  return {
    ...session,
    phase: 'reinforce',
    items: [...session.items, ...createItems(session.id, round, questionIds)],
    currentIndex: session.items.length,
    round,
  };
}

export function getSessionTitle(session: PracticeSession): string {
  if (session.kind === 'mistakes') return '错题复习';
  if (session.kind === 'topic') return session.topic ? `${session.topic} · 专题练习` : '专题练习';
  if (session.kind === 'random') {
    const scope = session.topic ?? '全部 Topic';
    return `${scope} · ${session.mode === 'exam' ? '考试模式' : '学习模式'}`;
  }
  return session.phase === 'reinforce' ? '全库巩固练习' : '全库刷题';
}
