

declare class Window_ItemList extends Window_Selectable {

  protected _category: string;
  protected _data: DataItem[]; // TODO : is it really how it works?

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  setCategory(category: string);
  override maxCols(): number;
  override colSpacing(): number;
  override maxItems(): number;
  item(): DataItem;
  itemAt(index: number): DataItem;
  override isCurrentItemEnabled(): boolean;
  includes(item: DataItem): boolean;
  needsNumber(): boolean;
  isEnabled(item: DataItem): boolean;
  makeItemList();
  selectLast();
  override drawItem(index: number);
  numberWidth(): number;
  drawItemNumber(item: DataItem,x: number,y: number, width: number);
  updateHelp();
  override refresh();
}