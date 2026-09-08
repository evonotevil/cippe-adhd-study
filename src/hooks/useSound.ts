import { useCallback } from 'react';

type SoundName = 'correct' | 'wrong' | 'complete' | 'tick';
type AudioContextConstructor = typeof AudioContext;

type AudioWindow = Window & {
  webkitAudioContext?: AudioContextConstructor;
};

// C 大调五声音阶。任意组合都协调，所以连对时把音高往上推不会走音。
const PENTATONIC = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5, 1174.66, 1318.51];

// 答错用的下行小三度，落在同一调内，听起来是「再看一眼」而不是「你错了」。
const WRONG_NOTES = [392.0, 329.63];
const COMPLETE_NOTES = [523.25, 659.25, 783.99, 1046.5];

let sharedAudioContext: AudioContext | null = null;
let sharedBus: AudioNode | null = null;

function getAudioContext(): AudioContext | null {
  if (sharedAudioContext && sharedAudioContext.state !== 'closed') {
    return sharedAudioContext;
  }

  const AudioContextClass = window.AudioContext || (window as AudioWindow).webkitAudioContext;
  if (!AudioContextClass) return null;

  sharedAudioContext = new AudioContextClass();
  sharedBus = null;
  return sharedAudioContext;
}

/**
 * 总线：压缩器压住连音叠加时的峰值，低通削掉毛刺。
 * 每个 AudioContext 只建一次，之后所有音符都挂在它上面。
 */
function getBus(context: AudioContext): AudioNode {
  if (sharedBus) return sharedBus;

  const compressor = context.createDynamicsCompressor();
  compressor.threshold.setValueAtTime(-14, context.currentTime);
  compressor.knee.setValueAtTime(18, context.currentTime);
  compressor.ratio.setValueAtTime(4, context.currentTime);
  compressor.attack.setValueAtTime(0.003, context.currentTime);
  compressor.release.setValueAtTime(0.18, context.currentTime);

  const lowpass = context.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.setValueAtTime(7200, context.currentTime);

  const output = context.createGain();
  output.gain.setValueAtTime(0.9, context.currentTime);

  compressor.connect(lowpass);
  lowpass.connect(output);
  output.connect(context.destination);

  sharedBus = compressor;
  return compressor;
}

interface ToneOptions {
  freq: number;
  at: number;
  dur: number;
  gain: number;
  type: OscillatorType;
  attack: number;
}

function tone(context: AudioContext, dest: AudioNode, options: ToneOptions): void {
  const oscillator = context.createOscillator();
  const envelope = context.createGain();

  oscillator.type = options.type;
  oscillator.frequency.setValueAtTime(options.freq, options.at);

  // exponentialRamp 不能碰 0，所以从一个极小值起步。
  envelope.gain.setValueAtTime(0.0001, options.at);
  envelope.gain.exponentialRampToValueAtTime(options.gain, options.at + options.attack);
  envelope.gain.exponentialRampToValueAtTime(0.0001, options.at + options.dur);

  oscillator.connect(envelope);
  envelope.connect(dest);
  oscillator.start(options.at);
  oscillator.stop(options.at + options.dur + 0.03);
}

/**
 * 柔和电子音色：三角波经低通滤掉尖锐泛音，叠一个八度增加厚度，
 * 再叠一路正弦补足基频的实体感。起音 12ms —— 够快，但不会「咔」。
 */
function voice(context: AudioContext, bus: AudioNode, freq: number, at: number, gain: number, long: boolean): void {
  const dur = long ? 0.9 : 0.42;

  const lowpass = context.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.setValueAtTime(freq * 3.2, at);
  lowpass.Q.setValueAtTime(0.7, at);
  lowpass.connect(bus);

  tone(context, lowpass, { freq, at, dur, gain: gain * 0.95, type: 'triangle', attack: 0.012 });
  tone(context, lowpass, { freq: freq * 2, at, dur: dur * 0.5, gain: gain * 0.22, type: 'triangle', attack: 0.012 });
  tone(context, bus, { freq, at, dur: dur * 0.6, gain: gain * 0.2, type: 'sine', attack: 0.01 });
}

function schedule(context: AudioContext, bus: AudioNode, soundName: SoundName, streak: number): void {
  const start = context.currentTime + 0.015;

  if (soundName === 'correct') {
    // 音高随连对次数往上爬，所以连对 5 和连对 3 听起来不一样。
    const step = Math.min(Math.max(streak, 1) - 1, 4);
    const offsets = streak >= 3 ? [step, step + 1, step + 3] : streak === 2 ? [step, step + 2] : [step];
    offsets.forEach((offset, index) => {
      const freq = PENTATONIC[Math.min(offset, PENTATONIC.length - 1)];
      voice(context, bus, freq, start + index * 0.078, 0.16, index === offsets.length - 1 && streak >= 3);
    });
    return;
  }

  if (soundName === 'wrong') {
    // 音量只有答对的一半左右，避免负反馈盖过正反馈。
    voice(context, bus, WRONG_NOTES[0], start, 0.085, false);
    voice(context, bus, WRONG_NOTES[1], start + 0.11, 0.075, false);
    return;
  }

  if (soundName === 'complete') {
    COMPLETE_NOTES.forEach((freq, index) => {
      voice(context, bus, freq, start + index * 0.105, 0.15, index === COMPLETE_NOTES.length - 1);
    });
    return;
  }

  voice(context, bus, 880, start, 0.05, false);
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

      schedule(context, getBus(context), soundName, streak);
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
