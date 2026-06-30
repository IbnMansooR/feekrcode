/**
 * Feekr Code audio — Web Audio bilan sintez qilingan SFX va ambient.
 * Tashqi fayl yo'q (copyright xavfsiz, exe kichik). Foydalanuvchi keyin
 * o'z musiqa fayllarini qo'sha oladi.
 */

type Sfx = "click" | "hover" | "success" | "error" | "complete" | "type" | "boot";

class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private musicNodes: { osc: OscillatorNode; gain: GainNode }[] = [];
  private musicOn = false;

  sfxEnabled = true;
  musicEnabled = true;
  volume = 0.6;

  private ensure(): AudioContext | null {
    if (typeof window === "undefined") return null;
    if (!this.ctx) {
      const Ctor = window.AudioContext || (window as any).webkitAudioContext;
      if (!Ctor) return null;
      this.ctx = new Ctor();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.volume;
      this.master.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  }

  setSettings(s: { sfx: boolean; music: boolean; volume: number }) {
    this.sfxEnabled = s.sfx;
    this.musicEnabled = s.music;
    this.volume = s.volume;
    if (this.master) this.master.gain.value = s.volume;
    if (s.music && !this.musicOn) this.startMusic();
    if (!s.music && this.musicOn) this.stopMusic();
  }

  private tone(freq: number, dur: number, type: OscillatorType, when = 0, gain = 0.2) {
    const ctx = this.ensure();
    if (!ctx || !this.master) return;
    const t0 = ctx.currentTime + when;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(this.master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.02);
  }

  play(name: Sfx) {
    if (!this.sfxEnabled) return;
    switch (name) {
      case "click": this.tone(540, 0.07, "triangle", 0, 0.18); break;
      case "hover": this.tone(720, 0.04, "sine", 0, 0.07); break;
      case "type": this.tone(320, 0.03, "square", 0, 0.05); break;
      case "success": this.tone(660, 0.1, "sine"); this.tone(990, 0.14, "sine", 0.09); break;
      case "error": this.tone(180, 0.18, "sawtooth", 0, 0.16); break;
      case "complete":
        [523, 659, 784, 1047].forEach((f, i) => this.tone(f, 0.16, "triangle", i * 0.08, 0.16));
        break;
      case "boot":
        this.tone(220, 0.5, "sine", 0, 0.12);
        this.tone(440, 0.6, "sine", 0.08, 0.08);
        break;
    }
  }

  /** Yumshoq ambient pad — minor akkord + sekin tremolo */
  startMusic() {
    const ctx = this.ensure();
    if (!ctx || !this.master || this.musicOn || !this.musicEnabled) return;
    this.musicOn = true;
    const chord = [110, 164.81, 220, 329.63]; // A2 E3 A3 E4
    chord.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = f;
      gain.gain.value = 0.0;
      gain.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 3);
      lfo.frequency.value = 0.05 + i * 0.02;
      lfoGain.gain.value = 0.015;
      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);
      osc.connect(gain);
      gain.connect(this.master!);
      osc.start();
      lfo.start();
      this.musicNodes.push({ osc, gain });
      this.musicNodes.push({ osc: lfo, gain: lfoGain });
    });
  }

  stopMusic() {
    const ctx = this.ctx;
    if (!ctx) { this.musicOn = false; return; }
    this.musicNodes.forEach(({ osc, gain }) => {
      try {
        gain.gain.cancelScheduledValues(ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
        osc.stop(ctx.currentTime + 0.7);
      } catch {
        /* allaqachon to'xtagan */
      }
    });
    this.musicNodes = [];
    this.musicOn = false;
  }
}

export const audio = new AudioEngine();
