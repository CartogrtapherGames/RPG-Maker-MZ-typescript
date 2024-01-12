declare class EffectManager {

  load(filename: string): effekseer.EffekseerEffect;
  startLoading(url: string): effekseer.EffekseerEffect;
  clear(): void;
  onLoad(): void;
  onError(url: string): void;
  makeUrl(filename: string): string;
  checkErrors(): void;
  throwLoadError(url: string): void;
  isReady(): boolean;

}
