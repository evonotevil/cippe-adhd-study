import type { QuestionLearningState, TopicProgress } from '../types';
import { TOPIC_ORDER } from '../domain/practice';

const TOPIC_QUESTION_IDS: Record<(typeof TOPIC_ORDER)[number], readonly number[]> = {
  '历史沿革/95-46-EC': [2, 11, 21, 66, 79, 91, 125, 227, 296, 309],
  'Convention 108/108+': [3, 10, 190, 224, 225],
  '监管机构': [4, 9, 62, 68, 70, 71, 74, 92, 94, 111, 112, 171, 175, 209, 217, 219, 222, 239, 248, 253, 254, 255, 257, 258, 263, 273, 276, 278, 280, 281, 287, 299, 300, 302, 303, 313, 315, 319],
  GDPR: [6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 63, 64, 67, 69, 72, 73, 75, 76, 77, 78, 80, 81, 82, 83, 85, 86, 87, 88, 90, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 126, 131, 132, 133, 134, 136, 137, 139, 141, 143, 144, 145, 146, 147, 149, 152, 153, 154, 155, 156, 158, 159, 160, 161, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 179, 180, 181, 183, 184, 186, 187, 188, 189, 191, 192, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 210, 211, 212, 213, 214, 215, 218, 221, 223, 228, 229, 230, 231, 234, 235, 236, 237, 238, 240, 241, 242, 243, 246, 247, 249, 250, 251, 252, 259, 260, 261, 262, 264, 265, 266, 268, 269, 270, 271, 272, 274, 275, 277, 279, 282, 283, 286, 288, 289, 290, 291, 292, 294, 301, 306, 307, 311, 312, 314, 316],
  'ePrivacy指令': [12, 38, 42, 45, 46, 84, 89, 93, 128, 129, 130, 138, 140, 142, 148, 150, 151, 157, 166, 173, 176, 182, 193, 216, 226, 244, 267, 304, 305, 308],
  'LED执法指令': [20, 135, 293],
  '判例法': [1, 5, 65, 127, 177, 178, 185, 220, 233, 245, 256],
  'AI Act': [232, 284, 295, 298, 310, 317, 318],
  'Data Act': [285, 297],
};

export const QUESTION_COUNT = Object.values(TOPIC_QUESTION_IDS).reduce(
  (total, questionIds) => total + questionIds.length,
  0,
);

export function getCatalogTopicProgress(
  learningStates: Record<number, QuestionLearningState>,
): TopicProgress[] {
  return TOPIC_ORDER.map((topic) => {
    const questionIds = TOPIC_QUESTION_IDS[topic];
    return questionIds.reduce<TopicProgress>(
      (summary, questionId) => {
        const state = learningStates[questionId];
        if (state?.attempted) summary.completed += 1;
        summary.correctAttempts += state?.correctAttempts ?? 0;
        summary.totalAttempts += state?.attempts ?? 0;
        return summary;
      },
      {
        topic,
        total: questionIds.length,
        completed: 0,
        correctAttempts: 0,
        totalAttempts: 0,
      },
    );
  });
}

export function getUnseenQuestionCount(
  learningStates: Record<number, QuestionLearningState>,
): number {
  return Object.values(TOPIC_QUESTION_IDS).reduce(
    (total, questionIds) => total + questionIds.filter((id) => !learningStates[id]?.attempted).length,
    0,
  );
}
