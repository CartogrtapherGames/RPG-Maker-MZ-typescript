
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

  load(): void;
  save(): void;
  isLoaded(): boolean;
  makeData(): ConfigData;
  applyData(config: ConfigData): void;
  readFlag(config: ConfigData, name: string, defaultValue: ConfigData): ConfigData;
  readVolume(config: ConfigData, name: string): number;

}
