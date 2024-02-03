declare interface SavefileInfo {
  title: string;
  characters: [string, number][];
  faces: [string, number][];
  playtime: string;
  timestamp: number;
}

declare interface SavefileContent {
  system: Game_System;
  screen: Game_Screen;
  timer: Game_Timer;
  switches: Game_Switches;
  variables: Game_Variables;
  selfSwitches: Game_SelfSwitches;
  actors: Game_Actors;
  party: Game_Party;
  map: Game_Map;
  player: Game_Player;
}

declare class DataManager {

  static loadGlobalInfo(): void;
  static removeInvalidGlobalInfo(): void;
  static saveGlobalInfo(): void;
  static isGlobalInfoLoaded(): boolean;

  static loadDatabase(): void;
  static isDatabaseLoaded(): boolean;

  static loadDataFile(name: string, src: string): void;

  static onXhrLoad(xhr: { status: number, responseText: string }, name: string, src: string, url: string): void;
  static onXhrError(name: string, src: string, url: string): void;
  static onLoad(object: Record<string, unknown>): void;

  static makeEmptyMap(): void;
  static loadMapData(mapId: number): void;
  static isMapLoaded(): boolean
  static isMapObject(object: Record<string, unknown>): boolean;

  static extractArrayMetadata(array: unknown[]): void;
  static extractMetadata(data: Record<string, unknown>): void;

  static checkError(): void;

  static setupBattleTest(): void;
  static isBattleTest(): boolean;

  static setupEventTest(): void;
  static isEventTest(): boolean;

  static isSkill(item: unknown): item is DataSkill;
  static isItem(item: unknown): item is DataItem;
  static isWeapon(item: unknown): item is DataWeapon;
  static isArmor(item: unknown): item is DataArmor;

  static setupNewGame(): void;
  static createGameObjects(): void;

  static isAnySavefileExists(): boolean;
  static savefileExists(savefileId: number): boolean;

  static latestSavefileId(): number;
  static earliestSavefileId(): number;
  static emptySavefileId(): number;

  static loadAllSavefileImages(): void;
  static loadSavefileImages(info: SavefileInfo): void;

  static maxSavefiles(): number;

  static savefileInfo(savefileId: number): SavefileInfo;

  static saveGame(savefileId: number): Promise<number>;
  static makeSavename(savefileId: number): string;
  static makeSavefileForNewGame(): void;
  static makeSavefileInfo(): SavefileInfo;
  static makeSaveContents(): SavefileContent;

  static loadGame(savefileId: number): Promise<number>;
  static extractSaveContents(contents: SavefileContent): void;

  static correctDataErrors(): void;

}
