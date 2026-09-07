import { useCallback } from 'react';

type SoundName = 'correct' | 'wrong' | 'complete' | 'tick';
type AudioContextConstructor = typeof AudioContext;

type AudioWindow = Window & {
  webkitAudioContext?: AudioContextConstructor;
};

let sharedAudioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (sharedAudioContext && sharedAudioContext.state !== 'closed') {
    return sharedAudioContext;
  }

  const AudioContextClass = window.AudioContext || (window as AudioWindow).webkitAudioContext;
  if (!AudioContextClass) return null;

  sharedAudioContext = new AudioContextClass();
  return sharedAudioContext;
}

export function useSound(enabled: boolean = true) {
  const play = useCallback(async (soundName: SoundName, streak = 1) => {
    if (!enabled) return;

    try {
      const context = getAudioContext();
      if (!context) return;

      if (context.state !== 'running') {
        await context.resume();
      }
      if (context.state !== 'running') return;

      const sequences: Record<SoundName, number[]> = {
        correct: streak >= 3 ? [659, 784, 988] : streak === 2 ? [659, 784] : [784],
        wrong: [220],
        complete: [523, 659, 784],
        tick: [440],
      };
      const frequencies = sequences[soundName];
      const noteLength = soundName === 'wrong' ? 0.22 : soundName === 'tick' ? 0.045 : 0.12;
      const gap = soundName === 'wrong' ? 0 : 0.055;
      const volume = soundName === 'tick' ? 0.04 : 0.13;
      const startAt = context.currentTime + 0.018;

      frequencies.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const noteStart = startAt + index * (noteLength + gap);
        const noteEnd = noteStart + noteLength;

        oscillator.type = soundName === 'wrong' ? 'triangle' : 'sine';
        oscillator.frequency.setValueAtTime(frequency, noteStart);
        gain.gain.setValueAtTime(0.0001, noteStart);
        gain.gain.exponentialRampToValueAtTime(volume, noteStart + 0.018);
        gain.gain.exponentialRampToValueAtTime(0.0001, noteEnd);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(noteStart);
        oscillator.stop(noteEnd + 0.01);
      });
    } catch {
      // Sound feedback is optional; audio failures must not interrupt studying.
    }
  }, [enabled]);

  return {
    playCorrect: (streak = 1) => play('correct', streak),
    playWrong: () => play('wrong'),
    playComplete: () => play('complete'),
    playTick: () => play('tick'),
  };
}
