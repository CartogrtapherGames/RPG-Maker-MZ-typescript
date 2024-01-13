

declare class Window_ItemCategory extends Window_HorzCommand {

  protected _itemWindow: Window_ItemList;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  override maxCols(): number;
  override update();
  override makeCommandList();
  needsCommand(name: string): boolean;
  setItemWindow(itemWindow: Window_ItemList);
  needsSelection(): boolean;
}