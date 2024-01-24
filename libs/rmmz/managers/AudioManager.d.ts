declare interface CurrentAudio {
  name: string;
  volume: number;
  pitch: number;
  pan?: number;
  pos?: number;
}

declare class AudioManager {

  static bgmVolume: number;
  static bgsVolume: number;
  static meVolume: number;
  static seVolume: number;

  static playBgm(bgm: CurrentAudio, pos: number): void;
  static replayBgm(bgm: CurrentAudio): void;

  static isCurrentBgm(bgm: CurrentAudio): boolean;

  static updateBgmParameters(bgm: CurrentAudio): void;
  static updateCurrentBgm(bgm: CurrentAudio, pos: number): void;

  static stopBgm(): void;

  static fadeOutBgm(duration: number): void;
  static fadeInBgm(duration: number): void;

  static playBgs(bgs: CurrentAudio, pos: number): void;
  static replayBgs(bgs: CurrentAudio): void;

  static isCurrentBgs(bgs: CurrentAudio): boolean;

  static updateBgsParameters(bgs: CurrentAudio): void;

  static stopBgs(): void;

  static fadeOutBgs(duration: number): void;
  static fadeInBgs(duration: number): void;

  static playMe(me: CurrentAudio): void;

  static updateMeParameters(me: CurrentAudio): void;

  static fadeOutMe(duration: number): void;

  static stopMe(): void;

  static playSe(se: CurrentAudio): void;

  static updateSeParameters(buffer: WebAudio, se: CurrentAudio): void;

  static cleanupSe(): void;

  static stopSe(): void;

  static playStaticSe(se: CurrentAudio): void;
  static loadStaticSe(se: CurrentAudio): void;

  static isStaticSe(se: CurrentAudio): boolean;

  static stopAll(): void;

  static saveBgm(): CurrentAudio;
  static saveBgs(): CurrentAudio;

  static makeEmptyAudioObject(): CurrentAudio;

  static createBuffer(folder: string, name: string): WebAudio;
  static updateBufferParameters(buffer: WebAudio, configVolume: number, audio: CurrentAudio): void;

  static audioFileExt(): string;

  static checkErrors(): void;
  static throwLoadError(webAudio: WebAudio): void;

}
