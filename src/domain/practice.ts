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

// Timestamps are ISO-8601 UTC strings, so lexicographic order is chronological
// order. Comparing strings avoids allocating a Date per comparison.
function compareTimestamps(a: UserProgress, b: UserProgress): number {
  return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0;
}

function toChronological(progress: UserProgress[]): UserProgress[] {
  for (let index = 1; index < progress.length; index += 1) {
    if (progress[index - 1].timestamp > progress[index].timestamp) {
      return [...progress].sort(compareTimestamps);
    }
  }

  // Answers are appended in order, so the common case needs no copy and no sort.
  return progress;
}

export function buildLearningStates(progress: UserProgress[]): Record<number, QuestionLearningState> {
  const states: Record<number, QuestionLearningState> = {};

  for (const attempt of toChronological(progress)) {
    let state = states[attempt.questionId];
    if (!state) {
      state = {
        attempted: true,
        everWrong: false,
        consecutiveCorrect: 0,
        attempts: 0,
        correctAttempts: 0,
        lastAttemptAt: null,
      };
      states[attempt.questionId] = state;
    }

    state.attempts += 1;
    state.lastAttemptAt = attempt.timestamp;

    if (attempt.isCorrect) {
      state.correctAttempts += 1;
      state.consecutiveCorrect += 1;
    } else {
      state.everWrong = true;
      state.consecutiveCorrect = 0;
    }
  }

  return states;
}

export function getPendingMistakeIds(
  states: Record<number, QuestionLearningState>,
): number[] {
  return Object.entries(states)
    .filter(([, state]) => state.everWrong && state.consecutiveCorrect < 2)
    .map(([questionId]) => Number(questionId));
}

export function getTodayStats(progress: UserProgress[]): { answered: number; correct: number } {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  let answered = 0;
  let correct = 0;

  // Today's answers sit at the tail of the chronological log, so walk backwards
  // and stop at the first attempt from before midnight instead of scanning all
  // of history on every answer.
  const chronological = toChronological(progress);
  for (let index = chronological.length - 1; index >= 0; index -= 1) {
    const attempt = chronological[index];
    const time = Date.parse(attempt.timestamp);
    if (Number.isNaN(time)) continue;
    if (time < startOfToday) break;

    answered += 1;
    if (attempt.isCorrect) correct += 1;
  }

  return { answered, correct };
}

/** Longest run of consecutive correct answers across the whole answer log. */
export function getLongestAnswerStreak(progress: UserProgress[]): number {
  let current = 0;
  let longest = 0;

  for (const attempt of toChronological(progress)) {
    if (attempt.isCorrect) {
      current += 1;
      if (current > longest) longest = current;
    } else {
      current = 0;
    }
  }

  return longest;
}

/** Questions that were answered wrong at some point and are now held twice over. */
export function getComebackCount(states: Record<number, QuestionLearningState>): number {
  let count = 0;
  for (const state of Object.values(states)) {
    if (state.everWrong && state.consecutiveCorrect >= 2) count += 1;
  }
  return count;
}

export function getAttemptedCount(states: Record<number, QuestionLearningState>): number {
  let count = 0;
  for (const state of Object.values(states)) {
    if (state.attempted) count += 1;
  }
  return count;
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
  states: Record<number, QuestionLearningState>,
  topic: string | null,
): number[] {
  const pendingMistakes = new Set(getPendingMistakeIds(states));
  const scope = getScopeQuestions(questions, topic);
  const mistakes = shuffleArray(scope.filter((question) => pendingMistakes.has(question.id))).map(
    (question) => question.id,
  );
  const mistakeIdSet = new Set(mistakes);
  const remaining = scope
    .filter((question) => !mistakeIdSet.has(question.id))
    // ISO-8601 UTC strings sort chronologically as strings; '' sorts first, which
    // keeps never-attempted questions at the front as before.
    .map((question) => [question.id, states[question.id]?.lastAttemptAt ?? ''] as const)
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map(([questionId]) => questionId);

  return [...mistakes, ...remaining];
}

/** 「继续巩固」会往当前这组里追加多少题 —— 界面得先告诉人再让人点。 */
export function getReinforcementCount(
  questions: Question[],
  states: Record<number, QuestionLearningState>,
  topic: string | null,
): number {
  return getReinforcementIds(questions, states, topic).length;
}

export function createPracticeSession(
  questions: Question[],
  states: Record<number, QuestionLearningState>,
  options: CreateSessionOptions,
): PracticeSession {
  const id = createSessionId();
  const topic = options.topic ?? null;
  const mode = options.mode ?? 'study';
  let phase: PracticeSession['phase'] = 'new';
  let questionIds: number[];

  if (options.questionIds) {
    questionIds = shuffleArray(options.questionIds);
  } else if (options.kind === 'mistakes') {
    questionIds = shuffleArray(getPendingMistakeIds(states));
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
      questionIds = getReinforcementIds(questions, states, topic);
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
  states: Record<number, QuestionLearningState>,
): PracticeSession {
  const round = session.round + 1;
  const questionIds = getReinforcementIds(questions, states, session.topic);

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
