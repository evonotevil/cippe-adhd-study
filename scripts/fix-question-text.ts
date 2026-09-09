// 一次性修复 src/data/questions.ts 里的 PDF 抽取事故。
//
// 题库是从 PDF 抽出来的，带进来两类噪音：
//   1. 页脚页码 "6" 混进正文（句末 + 空格 + 6 + 换行）
//   2. 分栏折行被当成段落分隔，把一个问句从中间劈开
// 这两类都不是规律性的，是同一份 PDF 的独立事故 —— 试过用启发式统一处理，
// 任何一条够狠的规则都会误伤「背景里嵌了无标点列表」的正常题（#78 #199
// #236-239 #299）。所以这里逐条写死，每一条都断言"在该题里恰好命中一次"，
// 改错了会直接报错而不是悄悄改坏别的题。
//
// 运行：npx tsx scripts/fix-question-text.ts        （--dry 只看 diff 不写盘）

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'questions.ts');
const DRY = process.argv.includes('--dry');

interface Fix {
  id: number;
  why: string;
  /** 源文件里的字面量片段，\n 写成两个字符（反斜杠 + n），和文件里一致。 */
  find: string;
  replace: string;
}

// 说明：源文件里 "\n" 是转义序列（两个字符），下面用 String.raw 保持原样。
const FIXES: Fix[] = [
  // —— 页脚页码混进背景正文：删掉页码，把折行还原成普通换行 ——
  // 注意：页码不一定落在句末。#53 #146 #151 #157 #162 #292 这几处是分页
  // 落在句子中间，第一版只匹配"句末 + 6"的规则漏掉了它们 —— 所以这里逐条列。
  { id: 53, why: '页脚 6 落在句中', find: String.raw`another eco friendly company, 6\nEcoMick`, replace: String.raw`another eco friendly company,\nEcoMick` },
  { id: 146, why: '页脚 6 落在句中', find: String.raw`details to them. He warns 6\nAccidentable`, replace: String.raw`details to them. He warns\nAccidentable` },
  { id: 151, why: '页脚 6 落在句中', find: String.raw`answer the next question: 6\nJoe is the new privacy manager`, replace: String.raw`answer the next question:\nJoe is the new privacy manager` },
  { id: 157, why: '页脚 6 落在句中', find: String.raw`website states the following: 6\n“WonderkKids provides`, replace: String.raw`website states the following:\n“WonderkKids provides` },
  { id: 162, why: '页脚 6 落在句中', find: String.raw`SCENARIO 6\nPlease use the following`, replace: String.raw`SCENARIO\nPlease use the following` },
  { id: 292, why: '页脚 6 落在句中', find: String.raw`new access system violates EU 6\ndata protection laws`, replace: String.raw`new access system violates EU\ndata protection laws` },

  { id: 64, why: '页脚 6 混进背景', find: String.raw`privacy legislation. 6\nThe company offers`, replace: String.raw`privacy legislation.\nThe company offers` },
  { id: 152, why: '页脚 6 混进背景', find: String.raw`expand its customer base. 6\nThe first plan`, replace: String.raw`expand its customer base.\nThe first plan` },
  { id: 171, why: '页脚 6 混进背景', find: String.raw`called Ben Knows Best. 6\nBen is aware`, replace: String.raw`called Ben Knows Best.\nBen is aware` },
  { id: 189, why: '页脚 6 混进背景', find: String.raw`access to the stored data. 6\nMike, an EU resident`, replace: String.raw`access to the stored data.\nMike, an EU resident` },
  { id: 291, why: '页脚 6 混进背景', find: String.raw`they hold valid tickets. 6\nThe Act named`, replace: String.raw`they hold valid tickets.\nThe Act named` },
  { id: 299, why: '页脚 6 混进背景', find: String.raw`at its hotel in Spain. 6\nUpon arrival`, replace: String.raw`at its hotel in Spain.\nUpon arrival` },
  { id: 306, why: '页脚 6 混进背景', find: String.raw`non-Canadian return address. 6\nBob, the President`, replace: String.raw`non-Canadian return address.\nBob, the President` },

  // —— 页脚页码卡在背景和问句之间：删页码，并让问句单独成段 ——
  { id: 26, why: '页脚 6 卡在问句前，问句没独立成段', find: String.raw`from their computer system. 6\nWhich statement`, replace: String.raw`from their computer system.\n\nWhich statement` },
  { id: 167, why: '页脚 6 卡在问句前，问句没独立成段', find: String.raw`the service to individuals. 6\nWhy is Bioface`, replace: String.raw`the service to individuals.\n\nWhy is Bioface` },
  { id: 231, why: '页脚 6 卡在问句前', find: String.raw`between AWS and the company. 6\n\nWhat is potentially`, replace: String.raw`between AWS and the company.\n\nWhat is potentially` },
  { id: 281, why: '残留单词 "that" 卡在问句前', find: String.raw`\n\nthat\nAfter fixing the privacy problems`, replace: String.raw`\n\nAfter fixing the privacy problems` },

  // —— 分栏折行被当成段落分隔，问句被劈成两半（界面上题干只剩后半句）——
  // 改成单个 \n：解析器会把段内换行接成空格，问句重新完整。
  { id: 71, why: '问句被劈开：题干只显示 "Javier proceed…"', find: String.raw`request, how may\n\nJavier proceed`, replace: String.raw`request, how may\nJavier proceed` },
  { id: 123, why: '问句被劈开：题干只显示 "2 of the GDPR?"', find: String.raw`Article 5,\nSection\n\n2 of the GDPR?`, replace: String.raw`Article 5,\nSection\n2 of the GDPR?` },
  { id: 136, why: '问句被劈开：题干只显示 "Own Device (BYOD) programs?"', find: String.raw`with Bring Your\n\nOwn Device (BYOD) programs?`, replace: String.raw`with Bring Your\nOwn Device (BYOD) programs?` },
  { id: 168, why: '问句被劈开：题干只显示 "GDPR occurred because…"', find: String.raw`the most serious violation of the\n\nGDPR occurred`, replace: String.raw`the most serious violation of the\nGDPR occurred` },
  { id: 296, why: '问句被劈开：题干只显示 "(Directive 95/46/EC)?"', find: String.raw`the Data Protection Directive\n\n(Directive 95/46/EC)?`, replace: String.raw`the Data Protection Directive\n(Directive 95/46/EC)?` },
];

let source = readFileSync(FILE, 'utf8');
const original = source;

/** 定位某道题在源文件里的字节区间，替换只允许发生在这个区间内。 */
function blockRange(text: string, id: number): [number, number] {
  const marker = `\n    id: ${id},\n`;
  const start = text.indexOf(marker);
  if (start < 0) throw new Error(`找不到 #${id} 的 id 行`);
  const next = text.indexOf('\n  {\n', start);
  return [start, next < 0 ? text.length : next];
}

let applied = 0;
for (const fix of FIXES) {
  const [start, end] = blockRange(source, fix.id);
  const block = source.slice(start, end);

  const hits = block.split(fix.find).length - 1;
  // 已经修过就跳过，脚本可以重复运行而不报错。
  if (hits === 0 && block.includes(fix.replace)) {
    console.log(`#${String(fix.id).padStart(3)} ${fix.why} —— 已修复，跳过`);
    continue;
  }
  if (hits !== 1) {
    throw new Error(`#${fix.id} 命中 ${hits} 次（应为 1 次）：${fix.find}`);
  }
  // 整个文件里也必须只命中一次，否则说明片段不够独特，可能改到别题。
  const globalHits = source.split(fix.find).length - 1;
  if (globalHits !== 1) {
    throw new Error(`#${fix.id} 的片段在全库命中 ${globalHits} 次，不够独特`);
  }

  source = source.slice(0, start) + block.replace(fix.find, fix.replace) + source.slice(end);
  applied += 1;
  console.log(`#${String(fix.id).padStart(3)} ${fix.why}`);
  console.log(`      - ${fix.find}`);
  console.log(`      + ${fix.replace}`);
}

if (source === original) {
  console.log('\n没有任何改动 —— 可能已经修过了。');
  process.exit(0);
}

if (DRY) {
  console.log(`\n[--dry] 共 ${applied} 处，未写盘。`);
} else {
  writeFileSync(FILE, source, 'utf8');
  console.log(`\n已写入 ${FILE}，共 ${applied} 处。`);
}
