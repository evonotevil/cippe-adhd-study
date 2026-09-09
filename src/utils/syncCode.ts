import type { UserProgress, UserStats } from '../types';
import { buildLearningStates } from '../domain/practice';

/**
 * 设备间同步：把学习进度压成一段文本，用二维码从一台设备传到另一台。
 *
 * 为什么不传完整的答题流水：满负载（319 题全做过）的流水 JSON 有 38.8 KB，
 * gzip 之后 6.3 KB，转成 base64 是 8.4 KB —— 一个二维码最多装 2331 个字符
 * （byte 模式、纠错 M），装不下。而"每道题的掌握状态"只要 5 个字节，全库
 * 1605 B，gzip + base64 之后约 1032 个字符，单个二维码绰绰有余。
 *
 * 代价说清楚：同步过去的是**每题的掌握状态**，不是逐次答题的流水。所以
 * 「今日做了 N 题」这类当天统计不会跟着过去，接收端会按状态重建一份流水。
 * 错题本、专题进度、成就这些真正要紧的东西都完整保留。
 */

const MAGIC = 'CQ1';
const HEADER_BYTES = 3 + 4 + 2 + 2 + 2 + 2; // magic + baseDay + 条目数 + 连续天数 + 番茄数 + 成就串长度
const ENTRY_BYTES = 5;
const DAY_MS = 86_400_000;
/** 单个二维码在 byte 模式、纠错 M 下的容量。超过就没法扫了，编码时直接拦住。 */
export const QR_CAPACITY = 2331;

export interface QuestionSyncState {
  questionId: number;
  attempts: number;
  correctAttempts: number;
  consecutiveCorrect: number;
  everWrong: boolean;
  /** 最后一次作答的日期（当地时区的零点，毫秒时间戳）。 */
  lastAttemptDay: number;
}

export interface SyncSnapshot {
  baseDay: number;
  questions: QuestionSyncState[];
  streakDays: number;
  tomatoSessions: number;
  achievements: string[];
}

function startOfDay(time: number): number {
  const date = new Date(time);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

function clampByte(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value)));
}

// —— 从本机数据造快照 ——

export function buildSnapshot(progress: UserProgress[], stats: UserStats): SyncSnapshot {
  const states = buildLearningStates(progress);
  const baseDay = startOfDay(Date.now());

  const questions: QuestionSyncState[] = Object.entries(states)
    .map(([id, state]) => ({
      questionId: Number(id),
      attempts: state.attempts,
      correctAttempts: state.correctAttempts,
      consecutiveCorrect: state.consecutiveCorrect,
      everWrong: state.everWrong,
      lastAttemptDay: state.lastAttemptAt ? startOfDay(Date.parse(state.lastAttemptAt)) : baseDay,
    }))
    .filter((entry) => entry.attempts > 0)
    .sort((a, b) => a.questionId - b.questionId);

  return {
    baseDay,
    questions,
    streakDays: stats.streakDays,
    tomatoSessions: stats.tomatoSessions,
    achievements: [...stats.achievements],
  };
}

// —— 二进制编解码 ——

function encodeBinary(snapshot: SyncSnapshot): Uint8Array {
  const achievementBlob = new TextEncoder().encode(snapshot.achievements.join(','));
  // 题号升序存差值，正常情况差值都很小；差值超过一个字节时用 0xFF 转义，后面跟两字节绝对题号。
  const body: number[] = [];
  let previousId = 0;
  for (const entry of snapshot.questions) {
    const delta = entry.questionId - previousId;
    previousId = entry.questionId;
    if (delta > 0 && delta < 255) {
      body.push(delta);
    } else {
      body.push(255, entry.questionId & 0xff, (entry.questionId >> 8) & 0xff);
    }
    body.push(
      clampByte(entry.attempts),
      clampByte(entry.correctAttempts),
      (Math.min(15, entry.consecutiveCorrect) & 0x0f) | (entry.everWrong ? 0x10 : 0),
      clampByte((snapshot.baseDay - entry.lastAttemptDay) / DAY_MS),
    );
  }

  const buffer = new Uint8Array(HEADER_BYTES + achievementBlob.length + body.length);
  const view = new DataView(buffer.buffer);
  for (let i = 0; i < MAGIC.length; i += 1) buffer[i] = MAGIC.charCodeAt(i);
  view.setUint32(3, Math.floor(snapshot.baseDay / DAY_MS), true);
  view.setUint16(7, snapshot.questions.length, true);
  view.setUint16(9, Math.min(65535, snapshot.streakDays), true);
  view.setUint16(11, Math.min(65535, snapshot.tomatoSessions), true);
  view.setUint16(13, achievementBlob.length, true);
  buffer.set(achievementBlob, HEADER_BYTES);
  buffer.set(body, HEADER_BYTES + achievementBlob.length);
  return buffer;
}

function decodeBinary(buffer: Uint8Array): SyncSnapshot {
  if (buffer.length < HEADER_BYTES) throw new Error('同步码太短，可能没扫全');
  for (let i = 0; i < MAGIC.length; i += 1) {
    if (buffer[i] !== MAGIC.charCodeAt(i)) throw new Error('这不是本应用的同步码');
  }

  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  const baseDay = view.getUint32(3, true) * DAY_MS;
  const count = view.getUint16(7, true);
  const streakDays = view.getUint16(9, true);
  const tomatoSessions = view.getUint16(11, true);
  const achievementLength = view.getUint16(13, true);

  let offset = HEADER_BYTES;
  const achievementText = new TextDecoder().decode(buffer.subarray(offset, offset + achievementLength));
  offset += achievementLength;

  const questions: QuestionSyncState[] = [];
  let previousId = 0;
  for (let i = 0; i < count; i += 1) {
    if (offset >= buffer.length) throw new Error('同步码不完整，可能没扫全');
    let questionId: number;
    const delta = buffer[offset];
    offset += 1;
    if (delta === 255) {
      questionId = buffer[offset] | (buffer[offset + 1] << 8);
      offset += 2;
    } else {
      questionId = previousId + delta;
    }
    previousId = questionId;

    if (offset + ENTRY_BYTES - 1 > buffer.length) throw new Error('同步码不完整，可能没扫全');
    const attempts = buffer[offset];
    const correctAttempts = buffer[offset + 1];
    const flags = buffer[offset + 2];
    const daysAgo = buffer[offset + 3];
    offset += 4;

    questions.push({
      questionId,
      attempts,
      correctAttempts: Math.min(correctAttempts, attempts),
      consecutiveCorrect: Math.min(flags & 0x0f, attempts),
      everWrong: (flags & 0x10) !== 0,
      lastAttemptDay: baseDay - daysAgo * DAY_MS,
    });
  }

  return {
    baseDay,
    questions,
    streakDays,
    tomatoSessions,
    achievements: achievementText ? achievementText.split(',').filter(Boolean) : [],
  };
}

// —— gzip + base64（CompressionStream 是浏览器原生的，不用额外依赖）——

async function squeeze(bytes: Uint8Array, mode: 'gzip' | 'gunzip'): Promise<Uint8Array> {
  const stream = mode === 'gzip'
    ? new CompressionStream('gzip')
    : new DecompressionStream('gzip');
  const source = new Blob([bytes as BlobPart]).stream().pipeThrough(stream);
  return new Uint8Array(await new Response(source).arrayBuffer());
}

function toBase64(bytes: Uint8Array): string {
  let binary = '';
  // 一次塞太多参数会爆栈，分块拼。
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  }
  return btoa(binary);
}

function fromBase64(text: string): Uint8Array {
  const binary = atob(text.trim().replace(/\s+/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

export async function encodeSyncCode(snapshot: SyncSnapshot): Promise<string> {
  const text = toBase64(await squeeze(encodeBinary(snapshot), 'gzip'));
  if (text.length > QR_CAPACITY) {
    throw new Error(`同步码 ${text.length} 字符，超出二维码容量 ${QR_CAPACITY}`);
  }
  return text;
}

export async function decodeSyncCode(text: string): Promise<SyncSnapshot> {
  return decodeBinary(await squeeze(fromBase64(text), 'gunzip'));
}

// —— 合并 ——

/**
 * 把快照里的状态还原成一段答题流水。
 *
 * 流水要满足一个硬性条件：拿它跑 buildLearningStates 必须还原出快照里的
 * 那组数字，否则错题本和专题进度就对不上了。所以顺序是倒着排的：
 * 末尾放 consecutiveCorrect 个「对」，再往前放一个「错」把连对打断，
 * 剩下的名额按 correctAttempts 补齐。
 */
function synthesizeAttempts(entry: QuestionSyncState): UserProgress[] {
  const total = Math.max(0, entry.attempts);
  if (total === 0) return [];

  const streak = Math.min(entry.consecutiveCorrect, total);
  const sequence: boolean[] = new Array(total).fill(false);
  for (let i = total - streak; i < total; i += 1) sequence[i] = true;

  // 连对之前必须有一次错，否则 consecutiveCorrect 会被算成更大的数。
  const breakerIndex = total - streak - 1;
  let remainingCorrect = Math.max(0, Math.min(entry.correctAttempts, total) - streak);
  for (let i = 0; i < breakerIndex; i += 1) {
    if (remainingCorrect > 0) {
      sequence[i] = true;
      remainingCorrect -= 1;
    }
  }
  // everWrong 但一次错都排不下（比如 attempts === consecutiveCorrect），
  // 说明两边数字本来就对不上，这时以 everWrong 为准，牺牲一次连对。
  if (entry.everWrong && !sequence.includes(false) && total > 0) {
    sequence[0] = false;
  }

  return sequence.map((isCorrect, index) => ({
    questionId: entry.questionId,
    isCorrect,
    // 同一天里按分钟往前排，保证时间顺序和作答顺序一致。
    timestamp: new Date(entry.lastAttemptDay + 12 * 3600_000 + (index - total) * 60_000).toISOString(),
    timeSpent: 30,
  }));
}

export interface MergeResult {
  progress: UserProgress[];
  stats: UserStats;
  /** 有多少道题的进度被对方的数据顶掉了。 */
  updatedQuestions: number;
  /** 对方有、本机完全没做过的题。 */
  newQuestions: number;
}

/**
 * 合并规则，一句话说清楚：**同一道题，以做过次数多的那一边为准；次数一样就看谁更近。**
 *
 * 不做「两边流水求并集」是因为快照里本来就没有流水，只有状态；而按状态取
 * 更完整的一边，规则可预期、也不会把已经掌握的题退回未掌握。本机赢的题
 * 一个字节都不动，真实时间戳完整保留。
 */
export function mergeSnapshot(
  localProgress: UserProgress[],
  localStats: UserStats,
  incoming: SyncSnapshot,
): MergeResult {
  const localStates = buildLearningStates(localProgress);
  const kept: UserProgress[] = [];
  const added: UserProgress[] = [];
  let updatedQuestions = 0;
  let newQuestions = 0;

  const takeover = new Set<number>();
  for (const entry of incoming.questions) {
    const local = localStates[entry.questionId];
    if (!local) {
      takeover.add(entry.questionId);
      newQuestions += 1;
      continue;
    }
    const localDay = local.lastAttemptAt ? startOfDay(Date.parse(local.lastAttemptAt)) : 0;
    const incomingWins = entry.attempts > local.attempts
      || (entry.attempts === local.attempts && entry.lastAttemptDay > localDay);
    if (incomingWins) {
      takeover.add(entry.questionId);
      updatedQuestions += 1;
    }
  }

  for (const attempt of localProgress) {
    if (!takeover.has(attempt.questionId)) kept.push(attempt);
  }
  for (const entry of incoming.questions) {
    if (takeover.has(entry.questionId)) added.push(...synthesizeAttempts(entry));
  }

  const progress = [...kept, ...added].sort((a, b) =>
    a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0,
  );

  return {
    progress,
    stats: {
      ...localStats,
      totalAnswered: progress.length,
      correctCount: progress.filter((attempt) => attempt.isCorrect).length,
      streakDays: Math.max(localStats.streakDays, incoming.streakDays),
      tomatoSessions: Math.max(localStats.tomatoSessions, incoming.tomatoSessions),
      achievements: [...new Set([...localStats.achievements, ...incoming.achievements])],
    },
    updatedQuestions,
    newQuestions,
  };
}

/** 给界面用的一句话摘要，让人在按下合并之前知道会发生什么。 */
export function describeSnapshot(snapshot: SyncSnapshot): string {
  const answered = snapshot.questions.length;
  const pending = snapshot.questions.filter((q) => q.everWrong && q.consecutiveCorrect < 2).length;
  const days = Math.round((startOfDay(Date.now()) - snapshot.baseDay) / DAY_MS);
  const when = days <= 0 ? '今天' : days === 1 ? '昨天' : `${days} 天前`;
  return `${when}导出 · 做过 ${answered} 道题 · ${pending} 道错题待巩固`;
}
