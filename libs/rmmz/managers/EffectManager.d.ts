declare class EffectManager {

  static load(filename: string): effekseer.EffekseerEffect;
  static startLoading(url: string): effekseer.EffekseerEffect;
  static clear(): void;
  static onLoad(): void;
  static onError(url: string): void;
  static makeUrl(filename: string): string;
  static checkErrors(): void;
  static throwLoadError(url: string): void;
  static isReady(): boolean;

}
