import type { TopicProgress } from '../types';

interface TopicPickerProps {
  topics: TopicProgress[];
  onSelect: (topic: string) => void;
  onBack: () => void;
}

export function TopicPicker({ topics, onSelect, onBack }: TopicPickerProps) {
  return (
    <div className="space-y-5">
      <div>
        <button
          type="button"
          onClick={onBack}
          className="mb-4 inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-800"
        >
          ‹ 返回首页
        </button>
        <h1 className="text-2xl font-bold text-gray-900">选择 Topic</h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          按知识结构排列。进入后不限题数，并优先练习尚未做过的题目。
        </p>
      </div>

      <div className="space-y-3">
        {topics.map((topic, index) => {
          const completion = topic.total > 0 ? Math.round((topic.completed / topic.total) * 100) : 0;
          const accuracy = topic.totalAttempts > 0
            ? Math.round((topic.correctAttempts / topic.totalAttempts) * 100)
            : null;

          return (
            <button
              type="button"
              key={topic.topic}
              onClick={() => onSelect(topic.topic)}
              className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-left shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="font-semibold text-gray-900">{topic.topic}</h2>
                    <span className="shrink-0 text-sm text-gray-500">
                      {topic.completed} / {topic.total}
                    </span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all"
                      style={{ width: `${completion}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-gray-500">
                    <span>完成 {completion}%</span>
                    <span>{accuracy === null ? '尚未开始' : `正确率 ${accuracy}%`}</span>
                  </div>
                </div>
                <span className="mt-1 text-lg text-gray-300">›</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
