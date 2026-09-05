import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/helpers';

interface TimerProps {
  duration?: number;
  breakDuration?: number;
}

export function Timer({ duration = 15, breakDuration = 5 }: TimerProps) {
  const { timeLeft, isRunning, isBreak, progress, start, pause, reset } = useTimer(duration, breakDuration);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={isBreak ? '#10b981' : '#3b82f6'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${progress * 283} 283`}
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold tabular-nums">{formatTime(timeLeft)}</span>
          <span className="text-sm text-gray-500">{isBreak ? '休息时间' : '专注时间'}</span>
        </div>
      </div>

      <div className="flex gap-3">
        {!isRunning ? (
          <button
            onClick={start}
            className="px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            开始
          </button>
        ) : (
          <button
            onClick={pause}
            className="px-6 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-colors"
          >
            暂停
          </button>
        )}
        <button
          onClick={reset}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full font-medium hover:bg-gray-300 transition-colors"
        >
          重置
        </button>
      </div>
    </div>
  );
}
