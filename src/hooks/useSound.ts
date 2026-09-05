import { useCallback } from 'react';
import { Howl } from 'howler';

const sounds = {
  correct: new Howl({ src: ['/sounds/correct.mp3'] }),
  wrong: new Howl({ src: ['/sounds/wrong.mp3'] }),
  complete: new Howl({ src: ['/sounds/complete.mp3'] }),
  tick: new Howl({ src: ['/sounds/tick.mp3'] }),
};

export function useSound(enabled: boolean = true) {
  const play = useCallback((soundName: keyof typeof sounds) => {
    if (enabled) {
      sounds[soundName].play();
    }
  }, [enabled]);

  return {
    playCorrect: () => play('correct'),
    playWrong: () => play('wrong'),
    playComplete: () => play('complete'),
    playTick: () => play('tick'),
  };
}
