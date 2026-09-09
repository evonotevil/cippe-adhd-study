/**
 * syncCode 的往返 + 合并测试。跑法：npx tsx scripts/test-sync-code.ts
 *
 * 最要紧的一条断言在「状态可还原」那节：合并时我们是按状态重建流水的，
 * 如果重建出来的流水跑 buildLearningStates 得不到原来的数字，错题本和
 * 专题进度就会对不上 —— 那种错在界面上很难一眼看出来，必须靠断言兜住。
 */

import { QUESTIONS } from '../src/data/questions';
import { buildLearningStates, getPendingMistakeIds } from '../src/domain/practice';
import {
  buildSnapshot, encodeSyncCode, decodeSyncCode, mergeSnapshot, describeSnapshot, QR_CAPACITY,
} from '../src/utils/syncCode';
import type { UserProgress, UserStats } from '../src/types';

let failures = 0;
function check(label: string, ok: boolean, detail = '') {
  console.log(`  ${ok ? '✓' : '✗'} ${label}${detail ? ' — ' + detail : ''}`);
  if (!ok) failures += 1;
}

function makeStats(progress: UserProgress[], over: Partial<UserStats> = {}): UserStats {
  return {
    totalAnswered: progress.length,
    correctCount: progress.filter((a) => a.isCorrect).length,
    streakDays: 5,
    lastStudyDate: new Date().toISOString(),
    tomatoSessions: 12,
    achievements: ['first-question', 'warming-up'],
    ...over,
  };
}

/** 造一份可复现的假进度：seed 决定哪些题做过、对错如何。 */
function makeProgress(seed: number, coverage: number): UserProgress[] {
  let state = seed;
  const rand = () => ((state = (state * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
  const out: UserProgress[] = [];
  const now = Date.now();
  for (const q of QUESTIONS) {
    if (rand() > coverage) continue;
    const attempts = rand() < 0.55 ? 1 : 1 + Math.floor(rand() * 3);
    for (let i = 0; i < attempts; i += 1) {
      out.push({
        questionId: q.id,
        isCorrect: rand() > 0.3,
        timestamp: new Date(now - Math.floor(rand() * 60) * 86_400_000 - i * 60_000).toISOString(),
        timeSpent: 20 + Math.floor(rand() * 100),
      });
    }
  }
  return out.sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));
}

console.log('=== 1. 满负载编码体积 ===');
{
  const progress = makeProgress(7, 1.0);
  const snapshot = buildSnapshot(progress, makeStats(progress));
  const code = await encodeSyncCode(snapshot);
  console.log(`  流水 ${progress.length} 条 / 做过 ${snapshot.questions.length} 题 → 同步码 ${code.length} 字符`);
  check('单个二维码装得下', code.length <= QR_CAPACITY, `余量 ${QR_CAPACITY - code.length} 字符`);
  console.log(`  摘要文案: ${describeSnapshot(snapshot)}`);
}

console.log('');
console.log('=== 2. 编码 → 解码 往返无损 ===');
{
  const progress = makeProgress(11, 1.0);
  const snapshot = buildSnapshot(progress, makeStats(progress));
  const back = await decodeSyncCode(await encodeSyncCode(snapshot));

  check('题目数一致', back.questions.length === snapshot.questions.length);
  let mismatch = 0;
  for (let i = 0; i < snapshot.questions.length; i += 1) {
    const a = snapshot.questions[i];
    const b = back.questions[i];
    if (a.questionId !== b.questionId || a.attempts !== b.attempts
      || a.correctAttempts !== b.correctAttempts || a.consecutiveCorrect !== b.consecutiveCorrect
      || a.everWrong !== b.everWrong || a.lastAttemptDay !== b.lastAttemptDay) {
      mismatch += 1;
      if (mismatch <= 3) console.log(`    差异 #${a.questionId}`, JSON.stringify(a), JSON.stringify(b));
    }
  }
  check('每道题的状态逐字段一致', mismatch === 0, `${mismatch} 处不一致`);
  check('连续天数 / 番茄数 / 成就一致',
    back.streakDays === snapshot.streakDays
    && back.tomatoSessions === snapshot.tomatoSessions
    && back.achievements.join(',') === snapshot.achievements.join(','));
}

console.log('');
console.log('=== 3. 状态可还原（最关键的一条）===');
{
  // 把 A 的快照原样合进一台空设备，重建出来的流水必须还原出 A 的状态
  const progress = makeProgress(23, 1.0);
  const snapshot = buildSnapshot(progress, makeStats(progress));
  const merged = mergeSnapshot([], makeStats([], { streakDays: 0, tomatoSessions: 0, achievements: [] }), snapshot);
  const rebuilt = buildLearningStates(merged.progress);

  let bad = 0;
  for (const entry of snapshot.questions) {
    const s = rebuilt[entry.questionId];
    if (!s || s.attempts !== entry.attempts || s.correctAttempts !== entry.correctAttempts
      || s.consecutiveCorrect !== entry.consecutiveCorrect || s.everWrong !== entry.everWrong) {
      bad += 1;
      if (bad <= 3) console.log(`    #${entry.questionId} 期望`, JSON.stringify(entry), '得到', JSON.stringify(s));
    }
  }
  check('重建流水后每题状态与快照一致', bad === 0, `${bad} 道对不上`);

  const before = getPendingMistakeIds(buildLearningStates(progress)).sort((a, b) => a - b);
  const after = getPendingMistakeIds(rebuilt).sort((a, b) => a - b);
  check('错题本内容一致', before.join(',') === after.join(','), `原 ${before.length} 道 / 现 ${after.length} 道`);
}

console.log('');
console.log('=== 4. 合并不丢进度 ===');
{
  const localProgress = makeProgress(31, 0.5);
  const remoteProgress = makeProgress(97, 0.5);
  const localStats = makeStats(localProgress, { streakDays: 3, tomatoSessions: 20, achievements: ['a'] });
  const remoteStats = makeStats(remoteProgress, { streakDays: 9, tomatoSessions: 6, achievements: ['b'] });

  const remoteSnapshot = await decodeSyncCode(await encodeSyncCode(buildSnapshot(remoteProgress, remoteStats)));
  const merged = mergeSnapshot(localProgress, localStats, remoteSnapshot);

  const localStates = buildLearningStates(localProgress);
  const remoteStates = buildLearningStates(remoteProgress);
  const mergedStates = buildLearningStates(merged.progress);

  const allIds = new Set([...Object.keys(localStates), ...Object.keys(remoteStates)].map(Number));
  let regressed = 0;
  for (const id of allIds) {
    const best = Math.max(localStates[id]?.attempts ?? 0, remoteStates[id]?.attempts ?? 0);
    if ((mergedStates[id]?.attempts ?? 0) < best) {
      regressed += 1;
      if (regressed <= 3) console.log(`    #${id} 合并后 ${mergedStates[id]?.attempts ?? 0} < 应有 ${best}`);
    }
  }
  console.log(`  本机 ${Object.keys(localStates).length} 题 / 对方 ${Object.keys(remoteStates).length} 题 → 合并后 ${Object.keys(mergedStates).length} 题`);
  console.log(`  被对方顶掉 ${merged.updatedQuestions} 道，新增 ${merged.newQuestions} 道`);
  check('没有任何一题的做题次数倒退', regressed === 0, `${regressed} 道倒退`);
  check('题目总数 = 两边并集', Object.keys(mergedStates).length === allIds.size);
  check('连续天数取较大值', merged.stats.streakDays === 9);
  check('番茄数取较大值', merged.stats.tomatoSessions === 20);
  check('成就取并集', merged.stats.achievements.includes('a') && merged.stats.achievements.includes('b'));
  check('统计与流水一致', merged.stats.totalAnswered === merged.progress.length);
}

console.log('');
console.log('=== 5. 本机更领先时不被顶掉 ===');
{
  const now = Date.now();
  const localProgress: UserProgress[] = [
    { questionId: 1, isCorrect: false, timestamp: new Date(now - 3 * 86400000).toISOString(), timeSpent: 30 },
    { questionId: 1, isCorrect: true, timestamp: new Date(now - 2 * 86400000).toISOString(), timeSpent: 30 },
    { questionId: 1, isCorrect: true, timestamp: new Date(now - 86400000).toISOString(), timeSpent: 30 },
  ];
  const remoteProgress: UserProgress[] = [
    { questionId: 1, isCorrect: false, timestamp: new Date(now - 5 * 86400000).toISOString(), timeSpent: 30 },
  ];
  const snapshot = buildSnapshot(remoteProgress, makeStats(remoteProgress));
  const merged = mergeSnapshot(localProgress, makeStats(localProgress), snapshot);
  const state = buildLearningStates(merged.progress)[1];
  check('本机 3 次 vs 对方 1 次 → 保留本机', state.attempts === 3 && state.consecutiveCorrect === 2);
  check('本机原始时间戳没被改写',
    merged.progress.filter((a) => a.questionId === 1).every((a) =>
      localProgress.some((l) => l.timestamp === a.timestamp)));
}

console.log('');
console.log('=== 6. 坏输入不会炸 ===');
{
  for (const [label, text] of [
    ['空字符串', ''],
    ['随便一段文字', 'hello world'],
    ['合法 base64 但不是同步码', btoa('not a sync code at all')],
  ] as [string, string][]) {
    let threw = false;
    try { await decodeSyncCode(text); } catch { threw = true; }
    check(`${label} → 抛出可读错误`, threw);
  }
}

console.log('');
console.log(failures === 0 ? '全部通过 ✓' : `${failures} 项失败 ✗`);
process.exit(failures === 0 ? 0 : 1);
