// 由 scripts/gen-scenario-groups.ts 生成，不要手改（要改就改生成脚本或直接改这里并去掉这行）。
//
// 题库里有一批"一段长背景 + 好几个小问"的情景题。原始数据每道题都把整段背景
// 重复了一遍，题与题之间没有任何关联字段，洗牌之后就会出现"刚读完这个情景，
// 下一题已经换了一个情景"的情况 —— 长文读一遍只用一次，是这个题库里最贵的
// 一笔注意力开销。这张表把共享同一段背景的题归到一组，出题时整组一起出。
//
// 覆盖：75 道题 / 24 组（共 319 题）。

/** 每一项是共享同一段情景背景的题目 id，按题号升序。 */
export const SCENARIO_GROUPS: readonly (readonly number[])[] = [
  [6, 7, 8], // GDPR
  [15, 16, 17, 18], // GDPR
  [36, 37], // GDPR
  [45, 46, 150], // ePrivacy指令
  [54, 55, 56, 57], // GDPR
  [80, 81, 82], // GDPR
  [128, 129, 130], // ePrivacy指令
  [143, 144, 145], // GDPR
  [147, 148, 149], // GDPR / ePrivacy指令
  [152, 153, 154, 306], // GDPR
  [155, 156, 157], // GDPR / ePrivacy指令
  [161, 163], // GDPR
  [169, 172], // GDPR
  [170, 301], // GDPR
  [179, 180], // GDPR
  [187, 188, 189], // GDPR
  [210, 211, 212, 213, 214, 215], // GDPR
  [228, 229, 230, 231], // GDPR
  [236, 237, 238], // GDPR
  [260, 261, 262], // GDPR
  [279, 282, 283], // GDPR
  [280, 294, 307], // 监管机构 / GDPR
  [289, 290, 291, 292, 303], // GDPR / 监管机构
  [317, 318], // AI Act
];

/** questionId → 组号。不在任何情景组里的题不会出现在这张表里。 */
export const SCENARIO_GROUP_OF: ReadonlyMap<number, number> = new Map(
  SCENARIO_GROUPS.flatMap((ids, groupIndex) => ids.map((id) => [id, groupIndex] as const)),
);
