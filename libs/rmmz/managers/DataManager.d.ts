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
  actors/*:  Game_Actors */; // FIXME
  party: Game_Party;
  map/*: Game_Map */; // FIXME
  player/*: Game_Player */; // FIXME
}

declare class DataManager {

  loadGlobalInfo(): void;
  removeInvalidGlobalInfo(): void;
  saveGlobalInfo(): void;
  isGlobalInfoLoaded(): boolean;

  loadDatabase(): void;
  isDatabaseLoaded(): boolean;

  loadDataFile(name: string, src: string): void;

  onXhrLoad(xhr: { status: number, responseText: string }, name: string, src: string, url: string): void;
  onXhrError(name: string, src: string, url: string): void;
  onLoad(object: Record<string, unknown>): void;

  makeEmptyMap(): void;
  loadMapData(mapId: number): void;
  isMapLoaded(): boolean
  isMapObject(object: Record<string, unknown>): boolean;

  extractArrayMetadata(array: unknown[]): void;
  extractMetadata(data: Record<string, unknown>): void;

  checkError(): void;

  setupBattleTest(): void;
  isBattleTest(): boolean;

  setupEventTest(): void;
  isEventTest(): boolean;

  isSkill(item: unknown): item is DataSkill;
  isItem(item: unknown): item is DataItem;
  isWeapon(item: unknown): item is DataWeapon;
  isArmor(item: unknown): item is DataArmor;

  setupNewGame(): void;
  createGameObjects(): void;

  isAnySavefileExists(): boolean;
  savefileExists(savefileId: number): boolean;

  latestSavefileId(): number;
  earliestSavefileId(): number;
  emptySavefileId(): number;

  loadAllSavefileImages(): void;
  loadSavefileImages(info: SavefileInfo): void;

  maxSavefiles(): number;

  savefileInfo(savefileId: number): SavefileInfo;

  saveGame(savefileId: number): Promise<number>;
  makeSavename(savefileId: number): string;
  makeSavefileForNewGame(): void;
  makeSavefileInfo(): SavefileInfo;
  makeSaveContents(): SavefileContent;

  loadGame(savefileId: number): Promise<number>;
  extractSaveContents(contents: SavefileContent): void;

  correctDataErrors(): void;

}
