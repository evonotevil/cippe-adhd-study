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
import { SCENARIO_GROUP_OF } from '../data/scenarioGroups';

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

// —— 情景题成组 ——
// 题库里约四分之一的题共享一段很长的英文背景（见 data/scenarioGroups.ts）。
// 单题洗牌会把同一段背景的几道题打散，人就得为同一段文字反复付一次阅读成本。
// 下面这几个函数把"情景组"当成洗牌的最小单位：组和组之间随机，组内的题始终相邻。

/**
 * 把题目 id 列表按情景分组：同组的题聚到一起，不属于任何情景组的题各自成组。
 * 组的先后、以及组内的顺序，都沿用传入列表原有的顺序（调用方已经洗过了）。
 */
function collectScenarioBlocks(questionIds: number[]): number[][] {
  const blocks: number[][] = [];
  const blockOfGroup = new Map<number, number[]>();

  for (const questionId of questionIds) {
    const groupIndex = SCENARIO_GROUP_OF.get(questionId);
    if (groupIndex === undefined) {
      blocks.push([questionId]);
      continue;
    }

    const existing = blockOfGroup.get(groupIndex);
    if (existing) {
      existing.push(questionId);
      continue;
    }

    const block = [questionId];
    blockOfGroup.set(groupIndex, block);
    blocks.push(block);
  }

  return blocks;
}

/** 洗牌，但同一情景的题绝不拆开：先洗组，再展开。 */
function shuffleKeepingScenariosTogether(questionIds: number[]): number[] {
  const blocks = collectScenarioBlocks(questionIds);
  if (blocks.length === questionIds.length) return shuffleArray(questionIds);
  return shuffleArray(blocks).flat();
}

/** 保持给定顺序，只把同一情景的题收拢到该组第一题的位置上。 */
function regroupScenarios(questionIds: number[]): number[] {
  const blocks = collectScenarioBlocks(questionIds);
  return blocks.length === questionIds.length ? questionIds : blocks.flat();
}

/**
 * 按「组」而不是按「题」来数题数。一个 6 题的情景组要么整组进来，要么不进来，
 * 所以实际题数会略微超出请求值 —— 背景都读了，就该一次用完，界面上写「约 N 题」。
 */
function takeAtLeast(questionIds: number[], requestedCount: number): number[] {
  const taken: number[] = [];
  for (const block of collectScenarioBlocks(questionIds)) {
    if (taken.length >= requestedCount) break;
    taken.push(...block);
  }
  return taken;
}

/** 这一组题里，和它同属一个情景组的题一共有几道（用于「本组还有 N 题」提示）。 */
export function getScenarioGroupIndex(questionId: number): number | undefined {
  return SCENARIO_GROUP_OF.get(questionId);
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
  const mistakes = shuffleKeepingScenariosTogether(
    shuffleArray(scope.filter((question) => pendingMistakes.has(question.id))).map(
      (question) => question.id,
    ),
  );
  const mistakeIdSet = new Set(mistakes);
  const remaining = scope
    .filter((question) => !mistakeIdSet.has(question.id))
    // ISO-8601 UTC strings sort chronologically as strings; '' sorts first, which
    // keeps never-attempted questions at the front as before.
    .map((question) => [question.id, states[question.id]?.lastAttemptAt ?? ''] as const)
    .sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0))
    .map(([questionId]) => questionId);

  // 错题在前、其余按"最久没做"排在后 —— 这个优先级保持不变，
  // 只是各自内部把同一情景的题收拢，免得读完背景只答一题。
  return [...mistakes, ...regroupScenarios(remaining)];
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
    questionIds = shuffleKeepingScenariosTogether(options.questionIds);
  } else if (options.kind === 'mistakes') {
    questionIds = shuffleKeepingScenariosTogether(getPendingMistakeIds(states));
  } else {
    const scope = getScopeQuestions(questions, topic);
    const unseen = shuffleKeepingScenariosTogether(
      shuffleArray(scope.filter((question) => !states[question.id]?.attempted)).map(
        (question) => question.id,
      ),
    );

    if (options.kind === 'random') {
      const seen = shuffleKeepingScenariosTogether(
        shuffleArray(scope.filter((question) => states[question.id]?.attempted)).map(
          (question) => question.id,
        ),
      );
      const requestedCount = Math.max(1, options.count ?? 10);
      // 按组取，所以可能略多于 requestedCount：一个情景组不会被拦腰截断。
      questionIds = takeAtLeast([...unseen, ...seen], Math.min(requestedCount, scope.length));
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
