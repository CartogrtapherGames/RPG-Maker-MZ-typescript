

declare class Window_ItemCategory extends Window_HorzCommand {

  protected _itemWindow: Window_ItemList;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxCols(): number;
  override update(): void;
  override makeCommandList(): void;
  needsCommand(name: string): boolean;
  setItemWindow(itemWindow: Window_ItemList): void;
  needsSelection(): boolean;
}