
type ShoppingGoods = DataItem | DataWeapon | DataArmor;
declare class Window_ShopBuy extends Window_Selectable {

  protected _money: number;
  protected _shopGoods: Array<number[]>;
  protected _data: ShoppingGoods[];
  protected _price: number[];

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setupGoods(shopGoods: number[]): void;
  override maxItems(): number;
  item(): ShoppingGoods;
  itemAt(index: number): ShoppingGoods;
  setMoney(money: number): void;
  override isCurrentItemEnabled(): boolean;
  price(item: ShoppingGoods): number;
  isEnabled(item: ShoppingGoods): boolean;
  override refresh(): void;
  makeItemList(): void;
  goodsToItem(goods: number[]): ShoppingGoods;
  override drawItem(index: number): void;
  priceWidth(): number;
  setStatusWindow(statusWindow): void;
  override updateHelp(): void;

}