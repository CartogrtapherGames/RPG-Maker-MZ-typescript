


declare class Window_BattleItem extends Window_ItemList {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override includes(item: DataItem): boolean;
  override show(): void;
  override hide(): void;
}