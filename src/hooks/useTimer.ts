import { useState, useEffect, useCallback, useRef } from 'react';

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  isBreak: boolean;
  sessionsCompleted: number;
}

export function useTimer(duration: number = 15, breakDuration: number = 5) {
  const [state, setState] = useState<TimerState>({
    timeLeft: duration * 60,
    isRunning: false,
    isBreak: false,
    sessionsCompleted: 0,
  });

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: true }));
  }, []);

  const pause = useCallback(() => {
    setState(prev => ({ ...prev, isRunning: false }));
  }, []);

  const reset = useCallback(() => {
    setState(prev => ({
      ...prev,
      timeLeft: prev.isBreak ? breakDuration * 60 : duration * 60,
      isRunning: false,
    }));
  }, [duration, breakDuration]);

  const skipBreak = useCallback(() => {
    setState(prev => ({
      ...prev,
      isBreak: false,
      timeLeft: duration * 60,
    }));
  }, [duration]);

  useEffect(() => {
    if (state.isRunning) {
      intervalRef.current = setInterval(() => {
        setState(prev => {
          if (prev.timeLeft <= 1) {
            const newSessions = prev.sessionsCompleted + 1;
            const isNowBreak = !prev.isBreak;

            return {
              timeLeft: isNowBreak ? breakDuration * 60 : duration * 60,
              isRunning: isNowBreak,
              isBreak: isNowBreak,
              sessionsCompleted: newSessions,
            };
          }

          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [state.isRunning, duration, breakDuration]);

  const progress = state.isBreak
    ? (breakDuration * 60 - state.timeLeft) / (breakDuration * 60)
    : (duration * 60 - state.timeLeft) / (duration * 60);

  return {
    ...state,
    progress,
    start,
    pause,
    reset,
    skipBreak,
  };
}
