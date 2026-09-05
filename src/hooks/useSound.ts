import { useCallback } from 'react';

export function useSound(enabled: boolean = true) {
  const play = useCallback((soundName: string) => {
    if (enabled) {
      // Use Web Audio API for simple beep sounds instead of external files
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (soundName === 'correct') {
          oscillator.frequency.value = 880; // A5
          gainNode.gain.value = 0.1;
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.15);
        } else if (soundName === 'wrong') {
          oscillator.frequency.value = 220; // A3
          gainNode.gain.value = 0.1;
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.3);
        } else if (soundName === 'complete') {
          oscillator.frequency.value = 660; // E5
          gainNode.gain.value = 0.1;
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.2);
        } else if (soundName === 'tick') {
          oscillator.frequency.value = 440; // A4
          gainNode.gain.value = 0.05;
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.05);
        }
      } catch {
        // Audio not supported, silently fail
      }
    }
  }, [enabled]);

  return {
    playCorrect: () => play('correct'),
    playWrong: () => play('wrong'),
    playComplete: () => play('complete'),
    playTick: () => play('tick'),
  };
}
