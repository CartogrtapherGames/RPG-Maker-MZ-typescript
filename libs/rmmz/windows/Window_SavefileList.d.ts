
declare interface SavefileInfo {
  title: string;
  characters: [string, number][];
  faces: [string, number][];
  playtime: string;
  timestamp: number;
}
declare class Window_SavefileList extends Window_Selectable {

  protected _mode: string;
  protected _autosave: boolean;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setMode(mode: string, autosave: boolean): void;
  override maxItems(): number;
  numVisibleRows(): number;
  override itemHeight(): number;
  override drawItem(index: number): void;
  indexToSavefileId(index: number):  number;
  savefileIdToIndex(savefileId: number): number
  isEnabled(savefileId: number): boolean;
  savefileId(): number;
  selectSavefile(savefileId: number): void;
  drawTitle(savefileId: number,x: number,y: number): void;
  drawContents(info: SavefileInfo, rect: Rectangle): void;
  drawPartyCharacters(info: SavefileInfo,x: number,y: number): void;
  drawPlaytime(info: SavefileInfo,x: number,y: number, width: number): void;
  override playOkSound(): void;

}