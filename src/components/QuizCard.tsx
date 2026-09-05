import { motion, AnimatePresence } from 'framer-motion';
import type { PracticeMode, Question } from '../types';
import { useSound } from '../hooks/useSound';

interface QuizCardProps {
  question: Question;
  mode: PracticeMode;
  selectedAnswer: string | null;
  showResult: boolean;
  soundEnabled: boolean;
  onSelect: (answer: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
  onNext: () => void;
}

export function QuizCard({
  question,
  mode,
  selectedAnswer,
  showResult,
  soundEnabled,
  onSelect,
  onSubmit,
  onSkip,
  onNext,
}: QuizCardProps) {
  const { playCorrect, playWrong } = useSound(soundEnabled);

  const getOptionStyle = (answer: string) => {
    if (showResult) {
      if (answer === question.correctAnswer) {
        return 'border-green-500 bg-green-100 text-green-900';
      }
      if (answer === selectedAnswer) {
        return 'border-red-500 bg-red-100 text-red-900';
      }
      return 'border-gray-200 bg-gray-50 text-gray-500 opacity-65';
    }

    if (answer === selectedAnswer) {
      return 'border-blue-500 bg-blue-50 text-blue-900 ring-2 ring-blue-100';
    }

    return 'border-gray-200 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50';
  };

  const handleSubmit = () => {
    if (!selectedAnswer || showResult) return;
    if (selectedAnswer === question.correctAnswer) playCorrect();
    else playWrong();
    onSubmit();
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="mb-6">
        <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
          {question.topic}
        </span>
        <h2 className="whitespace-pre-wrap text-lg font-medium leading-relaxed text-gray-900">
          {question.question}
        </h2>
      </div>

      <div className="mb-6 space-y-3">
        {question.options.map((option, index) => {
          const answer = option.charAt(0);
          return (
            <motion.button
              type="button"
              key={`${question.id}-${index}`}
              whileTap={{ scale: 0.99 }}
              onClick={() => onSelect(answer)}
              disabled={showResult}
              className={`w-full rounded-xl border-2 p-4 text-left transition-all duration-200 ${getOptionStyle(answer)}`}
            >
              <span className="mr-2 font-bold">{answer}.</span>
              {option.slice(3)}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className={`mb-6 rounded-xl border p-4 ${
              selectedAnswer === question.correctAnswer
                ? 'border-green-200 bg-green-50'
                : 'border-red-200 bg-red-50'
            }`}
          >
            <p className="mb-2 font-semibold text-gray-900">
              {selectedAnswer === question.correctAnswer ? '✅ 回答正确' : '❌ 回答错误'}
            </p>
            <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
              {question.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {mode === 'study' && (
        <div className="sticky bottom-3 z-10 rounded-2xl border border-gray-200 bg-white/95 p-3 shadow-lg backdrop-blur">
          {!showResult ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onSkip}
                className="shrink-0 px-3 py-3 text-sm font-medium text-gray-500 hover:text-gray-800"
              >
                暂时跳过
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="flex-1 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                提交答案
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onNext}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              下一题 →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
