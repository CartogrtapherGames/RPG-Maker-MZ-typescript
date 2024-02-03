
interface ConfigData {
  alwaysDash: boolean;
  commandRemember: boolean;
  touchUI: boolean;
  bgmVolume: number;
  bgsVolume: number;
  meVolume: number;
  seVolume: number;
}

declare class ConfigManager {

  alwaysDash: boolean;
  commandRemember: boolean;
  touchUI: boolean;
  bgmVolume: number;
  bgsVolume: number;
  meVolume: number;
  seVolume: number;

  protected _isLoaded: boolean;

  static load(): void;
  static save(): void;
  static isLoaded(): boolean;
  static makeData(): ConfigData;
  static applyData(config: ConfigData): void;
  static readFlag(config: ConfigData, name: string, defaultValue: ConfigData): ConfigData;
  static readVolume(config: ConfigData, name: string): number;

}
