import { useCallback, useEffect, useRef, useState } from 'react';

const TIMER_STORAGE_KEY = 'cippe-timer';

interface TimerState {
  timeLeft: number;
  isRunning: boolean;
  isBreak: boolean;
  sessionsCompleted: number;
  deadline: number | null;
  phaseDuration: number;
  completionSequence: number;
  acknowledgedCompletionSequence: number;
  breakSequence: number;
  acknowledgedBreakSequence: number;
  /** 上一个阶段实际结束的时刻。用来区分"刚刚响的"和"三天前就该响的"。 */
  phaseEndedAt: number | null;
}

function toSeconds(minutes: number): number {
  return Math.max(1, Math.round(minutes * 60));
}

function createInitialState(duration: number): TimerState {
  const phaseDuration = toSeconds(duration);
  return {
    timeLeft: phaseDuration,
    isRunning: false,
    isBreak: false,
    sessionsCompleted: 0,
    deadline: null,
    phaseDuration,
    completionSequence: 0,
    acknowledgedCompletionSequence: 0,
    breakSequence: 0,
    acknowledgedBreakSequence: 0,
    phaseEndedAt: null,
  };
}

function readStoredState(duration: number, breakDuration: number): TimerState {
  const fallback = createInitialState(duration);

  try {
    const value = window.localStorage.getItem(TIMER_STORAGE_KEY);
    if (!value) return fallback;

    const stored = JSON.parse(value) as Partial<TimerState>;
    const isBreak = stored.isBreak === true;
    const phaseDuration = Number.isFinite(stored.phaseDuration)
      ? Math.max(1, Number(stored.phaseDuration))
      : toSeconds(isBreak ? breakDuration : duration);
    const deadline = Number.isFinite(stored.deadline) ? Number(stored.deadline) : null;

    return {
      timeLeft: Number.isFinite(stored.timeLeft)
        ? Math.min(phaseDuration, Math.max(0, Number(stored.timeLeft)))
        : phaseDuration,
      isRunning: stored.isRunning === true && deadline !== null,
      isBreak,
      sessionsCompleted: Number.isFinite(stored.sessionsCompleted)
        ? Math.max(0, Number(stored.sessionsCompleted))
        : 0,
      deadline,
      phaseDuration,
      completionSequence: Number.isFinite(stored.completionSequence)
        ? Math.max(0, Number(stored.completionSequence))
        : 0,
      acknowledgedCompletionSequence: Number.isFinite(stored.acknowledgedCompletionSequence)
        ? Math.max(0, Number(stored.acknowledgedCompletionSequence))
        : 0,
      breakSequence: Number.isFinite(stored.breakSequence) ? Math.max(0, Number(stored.breakSequence)) : 0,
      acknowledgedBreakSequence: Number.isFinite(stored.acknowledgedBreakSequence)
        ? Math.max(0, Number(stored.acknowledgedBreakSequence))
        : 0,
      phaseEndedAt: Number.isFinite(stored.phaseEndedAt) ? Number(stored.phaseEndedAt) : null,
    };
  } catch (error) {
    console.error('Error reading timer state:', error);
    return fallback;
  }
}

function writeStoredState(state: TimerState): void {
  try {
    window.localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error writing timer state:', error);
  }
}

// While a phase is running, `timeLeft` is recomputed from `deadline` on load,
// so the per-second tick carries no information that has to survive a reload.
// Persisting only the durable fields turns one localStorage write per second
// into one write per real state change.
function persistenceSignature(state: TimerState): string {
  const volatile = state.isRunning && state.deadline !== null ? 'run' : String(state.timeLeft);
  return [
    volatile,
    state.deadline,
    state.isBreak,
    state.sessionsCompleted,
    state.phaseDuration,
    state.completionSequence,
    state.acknowledgedCompletionSequence,
    state.breakSequence,
    state.acknowledgedBreakSequence,
    state.phaseEndedAt,
  ].join('|');
}

function reconcileRunningState(
  state: TimerState,
  now: number,
  duration: number,
  breakDuration: number,
): TimerState {
  if (!state.isRunning || state.deadline === null) return state;

  if (now < state.deadline) {
    const timeLeft = Math.max(1, Math.ceil((state.deadline - now) / 1000));
    return timeLeft === state.timeLeft ? state : { ...state, timeLeft };
  }

  if (state.isBreak) {
    const phaseDuration = toSeconds(duration);
    return {
      ...state,
      timeLeft: phaseDuration,
      isRunning: false,
      isBreak: false,
      deadline: null,
      phaseDuration,
      breakSequence: state.breakSequence + 1,
      phaseEndedAt: state.deadline,
    };
  }

  const breakSeconds = toSeconds(breakDuration);
  const breakDeadline = state.deadline + breakSeconds * 1000;
  const completedState = {
    ...state,
    sessionsCompleted: state.sessionsCompleted + 1,
    completionSequence: state.completionSequence + 1,
    phaseEndedAt: state.deadline,
  };

  if (now < breakDeadline) {
    return {
      ...completedState,
      timeLeft: Math.max(1, Math.ceil((breakDeadline - now) / 1000)),
      isRunning: true,
      isBreak: true,
      deadline: breakDeadline,
      phaseDuration: breakSeconds,
    };
  }

  const focusSeconds = toSeconds(duration);
  return {
    ...completedState,
    timeLeft: focusSeconds,
    isRunning: false,
    isBreak: false,
    deadline: null,
    phaseDuration: focusSeconds,
  };
}

function getNextTickDelay(deadline: number, now: number): number {
  const remaining = deadline - now;
  if (remaining <= 0) return 0;

  // Wake just after the next displayed-second boundary so ceil() advances once.
  return ((remaining - 1) % 1000) + 17;
}

export function useTimer(duration: number = 15, breakDuration: number = 5) {
  const [state, setState] = useState<TimerState>(() =>
    reconcileRunningState(
      readStoredState(duration, breakDuration),
      Date.now(),
      duration,
      breakDuration,
    ),
  );
  const stateRef = useRef(state);
  const persistedSignature = useRef<string | null>(null);

  const updateState = useCallback((updater: (previous: TimerState) => TimerState) => {
    setState((previous) => {
      const next = updater(previous);
      stateRef.current = next;
      return next;
    });
  }, []);

  useEffect(() => {
    stateRef.current = state;

    const signature = persistenceSignature(state);
    if (signature === persistedSignature.current) return;
    persistedSignature.current = signature;
    writeStoredState(state);
  }, [state]);

  const start = useCallback(() => {
    updateState((previous) => {
      if (previous.isRunning) return previous;
      const timeLeft = Math.max(1, previous.timeLeft);
      return {
        ...previous,
        timeLeft,
        isRunning: true,
        deadline: Date.now() + timeLeft * 1000,
      };
    });
  }, [updateState]);

  const pause = useCallback(() => {
    updateState((previous) => {
      const current = reconcileRunningState(previous, Date.now(), duration, breakDuration);
      if (!current.isRunning) return current;
      return { ...current, isRunning: false, deadline: null };
    });
  }, [breakDuration, duration, updateState]);

  const reset = useCallback(() => {
    updateState((previous) => {
      const phaseDuration = previous.isBreak
        ? toSeconds(breakDuration)
        : toSeconds(duration);
      return {
        ...previous,
        timeLeft: phaseDuration,
        isRunning: false,
        deadline: null,
        phaseDuration,
      };
    });
  }, [duration, breakDuration, updateState]);

  const skipBreak = useCallback(() => {
    updateState((previous) => {
      const phaseDuration = toSeconds(duration);
      return {
        ...previous,
        isBreak: false,
        timeLeft: phaseDuration,
        deadline: previous.isRunning ? Date.now() + phaseDuration * 1000 : null,
        phaseDuration,
      };
    });
  }, [duration, updateState]);

  const claimFocusCompletion = useCallback(() => {
    const current = stateRef.current;
    if (current.acknowledgedCompletionSequence >= current.completionSequence) return false;

    const claimed = {
      ...current,
      acknowledgedCompletionSequence: current.completionSequence,
    };
    stateRef.current = claimed;
    setState(claimed);
    persistedSignature.current = persistenceSignature(claimed);
    writeStoredState(claimed);
    return true;
  }, []);

  useEffect(() => {
    updateState((previous) => {
      if (previous.isRunning) return previous;

      const phaseDuration = toSeconds(previous.isBreak ? breakDuration : duration);
      if (previous.phaseDuration === phaseDuration) return previous;

      return {
        ...previous,
        timeLeft: phaseDuration,
        phaseDuration,
        deadline: null,
      };
    });
  }, [breakDuration, duration, updateState]);

  const claimBreakCompletion = useCallback(() => {
    const current = stateRef.current;
    if (current.acknowledgedBreakSequence >= current.breakSequence) return false;

    const claimed = { ...current, acknowledgedBreakSequence: current.breakSequence };
    stateRef.current = claimed;
    setState(claimed);
    persistedSignature.current = persistenceSignature(claimed);
    writeStoredState(claimed);
    return true;
  }, []);

  useEffect(() => {
    if (!state.isRunning || state.deadline === null) return undefined;

    const tick = () => {
      updateState((previous) =>
        reconcileRunningState(previous, Date.now(), duration, breakDuration),
      );
    };

    const timeout = window.setTimeout(
      tick,
      getNextTickDelay(state.deadline, Date.now()),
    );
    window.addEventListener('focus', tick);
    document.addEventListener('visibilitychange', tick);

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('focus', tick);
      document.removeEventListener('visibilitychange', tick);
    };
  }, [breakDuration, duration, state.deadline, state.isRunning, state.timeLeft, updateState]);

  const progress = Math.min(
    1,
    Math.max(0, (state.phaseDuration - state.timeLeft) / state.phaseDuration),
  );

  return {
    ...state,
    progress,
    start,
    pause,
    reset,
    skipBreak,
    claimFocusCompletion,
    claimBreakCompletion,
  };
}
