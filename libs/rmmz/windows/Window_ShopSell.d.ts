

declare class Window_ShopSell extends Window_ItemList {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override isEnabled(item: DataItem): boolean;
  
}