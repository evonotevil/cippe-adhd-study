export interface ParsedQuestion {
  /** 真正的提问，也就是原文最后一段。 */
  prompt: string;
  /** 提问之前的情景材料，按段落切好。没有则为空数组。 */
  scenario: string[];
}

const CJK = /[⺀-〿぀-鿿가-힯＀-￯]/;

// 题库来自 PDF，段内的换行是原始分栏留下的，不是作者想要的断句。
// 折行处两侧只要有一边是中日韩字符就直接接上，否则补一个空格，
// 免得把 "European\nConvention" 粘成 "EuropeanConvention"。
function collapseSoftBreaks(paragraph: string): string {
  return paragraph
    .replace(/[ \t]*\n[ \t]*/g, (match, offset: number, whole: string) => {
      const before = whole.slice(0, offset);
      const after = whole[offset + match.length] ?? '';
      // 表单式的标签行（"First name:" / "Email:"）本来就是一行一条，
      // 接成一整段反而看不懂，这种换行保留。
      const lastLine = before.slice(before.lastIndexOf('\n') + 1).trim();
      if (lastLine.length <= 40 && /[:：]$/.test(lastLine)) return '\n';
      const previousChar = whole[offset - 1] ?? '';
      return CJK.test(previousChar) || CJK.test(after) ? '' : ' ';
    })
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

// 情景题开头这两行是套话，占地方又不带信息。
const BOILERPLATE = [
  /^SCENARIO$/i,
  /^Please use the following to answer the next question[.:]?$/i,
  /^Please use the following to answer the next questions?[.:]?$/i,
];

// PDF 抽取出来的文本里，空行同样可能落在句子中间（"…it wants to market" /
// "on its website…"）。所以空行不能直接当段落分隔：只有当下一块确实像新的一段
// 时才断开，否则接回上一块。
function continuesPrevious(previous: string, current: string): boolean {
  if (/^[a-z]/.test(current)) return true;
  if (/[,，、;；(（]$/.test(previous)) return true;
  if (CJK.test(current.charAt(0)) && !/[。？！：；.?!]$/.test(previous)) return true;
  return false;
}

function mergeWrappedChunks(chunks: string[]): string[] {
  const merged: string[] = [];
  for (const chunk of chunks) {
    const previous = merged[merged.length - 1];
    if (previous !== undefined && continuesPrevious(previous, chunk)) {
      const glue = CJK.test(previous.slice(-1)) || CJK.test(chunk.charAt(0)) ? '' : ' ';
      merged[merged.length - 1] = `${previous}${glue}${chunk}`;
      continue;
    }
    merged.push(chunk);
  }
  return merged;
}

export function parseQuestionText(raw: string): ParsedQuestion {
  const chunks = raw
    .replace(/\r\n?/g, '\n')
    .split(/\n[ \t]*\n+/)
    .map(collapseSoftBreaks)
    .filter(Boolean)
    .filter((paragraph) => !BOILERPLATE.some((pattern) => pattern.test(paragraph)));
  const paragraphs = mergeWrappedChunks(chunks);

  if (paragraphs.length === 0) return { prompt: collapseSoftBreaks(raw), scenario: [] };
  if (paragraphs.length === 1) return { prompt: paragraphs[0], scenario: [] };

  return {
    prompt: paragraphs[paragraphs.length - 1],
    scenario: paragraphs.slice(0, -1),
  };
}

export function scenarioLength(scenario: string[]): number {
  return scenario.reduce((total, paragraph) => total + paragraph.length, 0);
}

/** 选项形如 "A. 正文"，把字母和正文拆开，格式意外时保底不吞字。 */
export function splitOption(option: string): { letter: string; text: string } {
  const match = option.match(/^\s*([A-D])\s*[.、)．]\s*(.*)$/s);
  if (!match) return { letter: option.trim().charAt(0), text: option.trim() };
  return { letter: match[1], text: match[2].trim() };
}
