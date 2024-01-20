

declare class Window_ItemList extends Window_Selectable {

  protected _category: string;
  protected _data: DataItem[];

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setCategory(category: string): void;
  override maxCols(): number;
  override colSpacing(): number;
  override maxItems(): number;
  item(): DataItem;
  itemAt(index: number): DataItem;
  override isCurrentItemEnabled(): boolean;
  includes(item: DataItem): boolean;
  needsNumber(): boolean;
  isEnabled(item: DataItem): boolean;
  makeItemList(): void;
  selectLast(): void;
  override drawItem(index: number): void;
  numberWidth(): number;
  drawItemNumber(item: DataItem,x: number,y: number, width: number): void;
  updateHelp(): void;
  override refresh(): void;
}