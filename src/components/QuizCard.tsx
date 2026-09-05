import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Question } from '../types';
import { useSound } from '../hooks/useSound';

interface QuizCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean, timeSpent: number) => void;
  onSkip: () => void;
  soundEnabled: boolean;
}

export function QuizCard({ question, onAnswer, onSkip, soundEnabled }: QuizCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());
  const { playCorrect, playWrong } = useSound(soundEnabled);

  const handleSelect = useCallback((answer: string) => {
    if (showResult) return;

    setSelectedAnswer(answer);
    setShowResult(true);

    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    const isCorrect = answer === question.correctAnswer;

    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }

    onAnswer(isCorrect, timeSpent);
  }, [showResult, startTime, question.correctAnswer, playCorrect, playWrong, onAnswer]);

  const getOptionStyle = (option: string) => {
    if (!showResult) return 'bg-white hover:bg-blue-50 border-gray-200';

    if (option === question.correctAnswer) {
      return 'bg-green-100 border-green-500 text-green-800';
    }

    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'bg-red-100 border-red-500 text-red-800';
    }

    return 'bg-gray-50 border-gray-200 opacity-50';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full mb-3">
          {question.topic}
        </span>
        <h2 className="text-lg font-medium leading-relaxed text-gray-900">
          {question.question}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(option.charAt(0))}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${getOptionStyle(option.charAt(0))}`}
          >
            <span className="font-medium mr-2">{option.charAt(0)}.</span>
            {option.slice(3)}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-4 rounded-xl mb-6 ${
              selectedAnswer === question.correctAnswer
                ? 'bg-green-50 border border-green-200'
                : 'bg-red-50 border border-red-200'
            }`}
          >
            <p className="font-medium mb-2">
              {selectedAnswer === question.correctAnswer ? '✅ 正确！' : '❌ 错误'}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {question.explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center gap-3">
        {!showResult ? (
          <button
            onClick={onSkip}
            className="px-6 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            ⏭ 跳过
          </button>
        ) : (
          <button
            onClick={() => {
              setSelectedAnswer(null);
              setShowResult(false);
            }}
            className="px-8 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            下一题 →
          </button>
        )}
      </div>
    </div>
  );
}
