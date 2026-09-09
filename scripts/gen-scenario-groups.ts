import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { QUESTIONS } from '../src/data/questions';
import { parseQuestionText, scenarioLength } from '../src/utils/questionText';

// 分组只看情景正文，忽略大小写、标点和空白 —— PDF 抽出来的同一段背景
// 在不同题上会有细微的空格/引号差异，但字母数字序列是一样的。
function normalize(text: string): string {
  return text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

interface Entry {
  id: number;
  topic: string;
  key: string;
  len: number;
}

const MIN_SCENARIO = 100; // 100 字符以下的"背景"不值得单独当情景处理

const entries: Entry[] = [];
for (const question of QUESTIONS) {
  const { scenario } = parseQuestionText(question.question);
  if (scenarioLength(scenario) < MIN_SCENARIO) continue;
  const key = normalize(scenario.join(' '));
  entries.push({ id: question.id, topic: question.topic, key, len: key.length });
}

// 先按前 300 个规范化字符分桶，再校验桶内长度是否一致 —— 只靠前缀会把
// "同一开头、后续不同"的背景错并在一起，长度校验能把这种情况抓出来。
const buckets = new Map<string, Entry[]>();
for (const entry of entries) {
  const bucketKey = entry.key.slice(0, 300);
  const bucket = buckets.get(bucketKey);
  if (bucket) bucket.push(entry);
  else buckets.set(bucketKey, [entry]);
}

const suspicious: string[] = [];
const groups: Entry[][] = [];

for (const bucket of buckets.values()) {
  if (bucket.length < 2) continue;

  const lengths = bucket.map((e) => e.len).sort((a, b) => a - b);
  const median = lengths[Math.floor(lengths.length / 2)];
  const spread = (lengths[lengths.length - 1] - lengths[0]) / median;

  if (spread > 0.03) {
    suspicious.push(
      `长度差异 ${(spread * 100).toFixed(1)}%：ids ${bucket.map((e) => e.id).join(',')} 长度 ${lengths.join('/')}`,
    );
    // 长度对不上就退回到"完全相同"这个保守口径，宁可少分组也不要错分组。
    const exact = new Map<string, Entry[]>();
    for (const entry of bucket) {
      const list = exact.get(entry.key);
      if (list) list.push(entry);
      else exact.set(entry.key, [entry]);
    }
    for (const list of exact.values()) if (list.length > 1) groups.push(list);
    continue;
  }

  groups.push(bucket);
}

groups.sort((a, b) => a[0].id - b[0].id);

const lines: string[] = [];
lines.push('// 由 scripts/gen-scenario-groups.ts 生成，不要手改（要改就改生成脚本或直接改这里并去掉这行）。');
lines.push('//');
lines.push('// 题库里有一批"一段长背景 + 好几个小问"的情景题。原始数据每道题都把整段背景');
lines.push('// 重复了一遍，题与题之间没有任何关联字段，洗牌之后就会出现"刚读完这个情景，');
lines.push('// 下一题已经换了一个情景"的情况 —— 长文读一遍只用一次，是这个题库里最贵的');
lines.push('// 一笔注意力开销。这张表把共享同一段背景的题归到一组，出题时整组一起出。');
lines.push('//');
lines.push(`// 覆盖：${groups.reduce((sum, g) => sum + g.length, 0)} 道题 / ${groups.length} 组（共 ${QUESTIONS.length} 题）。`);
lines.push('');
lines.push('/** 每一项是共享同一段情景背景的题目 id，按题号升序。 */');
lines.push('export const SCENARIO_GROUPS: readonly (readonly number[])[] = [');
for (const group of groups) {
  const ids = group.map((e) => e.id).sort((a, b) => a - b);
  const topics = [...new Set(group.map((e) => e.topic))];
  lines.push(`  [${ids.join(', ')}], // ${topics.join(' / ')}`);
}
lines.push('];');
lines.push('');
lines.push('/** questionId → 组号。不在任何情景组里的题不会出现在这张表里。 */');
lines.push('export const SCENARIO_GROUP_OF: ReadonlyMap<number, number> = new Map(');
lines.push('  SCENARIO_GROUPS.flatMap((ids, groupIndex) => ids.map((id) => [id, groupIndex] as const)),');
lines.push(');');
lines.push('');

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'scenarioGroups.ts');
writeFileSync(OUT, lines.join('\n'), 'utf8');

console.log(`组数 ${groups.length}，覆盖题数 ${groups.reduce((s, g) => s + g.length, 0)}`);
console.log('组大小分布:', groups.map((g) => g.length).sort((a, b) => b - a).join(','));
const cross = groups.filter((g) => new Set(g.map((e) => e.topic)).size > 1);
console.log(`跨 Topic 的组: ${cross.length}`, cross.map((g) => g.map((e) => e.id).join(',')).join(' | '));
if (suspicious.length) {
  console.log('\n需要人工确认的桶（已退回保守分组）:');
  for (const line of suspicious) console.log('  ' + line);
}
