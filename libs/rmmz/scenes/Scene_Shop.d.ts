

declare class Scene_Shop extends Scene_MenuBase {

  protected _goods: number[];
  protected _purchaseOnly: boolean;
  protected _item: ShoppingGoods;
  protected _goldWindow: Window_Gold;
  protected _commandWindow: Window_ShopCommand;
  protected _dummyWindow: Window_Base;
  protected _numberWindow: Window_ShopNumber;
  protected _statusWindow: Window_ShopStatus;
  protected _buyWindow: Window_ShopBuy;
  protected _categoryWindow: Window_ItemCategory;
  protected _sellWindow: Window_ShopSell;
  
  constructor();
  override initialize(): void;
  prepare(goods: number[],purchaseOnly: boolean): void;
  override create(): void;
  createGoldWindow(): void;
  goldWindowRect(): Rectangle;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  createDummyWindow(): void;
  dummyWindowRect(): Rectangle;
  createNumberWindow(): void;
  numberWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createBuyWindow(): void;
  buyWindowRect(): Rectangle;
  createCategoryWindow(): void;
  categoryWindowRect(): Rectangle;
  createSellWindow(): void;
  sellWindowRect(): Rectangle;
  statusWidth(): number;
  activateBuyWindow(): void;
  activateSellWindow(): void;
  commandBuy(): void;
  commandSell(): void;
  onBuyOk(): void;
  onBuyCancel(): void;
  onCategoryOk(): void;
  onCategoryCancel(): void;
  onSellOk(): void;
  onSellCancel(): void;
  onNumberOk(): void;
  onNumberCancel(): void;
  doBuy(number: number): void;
  doSell(number: number): void;
  endNumberInput(): void;
  maxBuy(): number;
  maxSell(): number;
  money(): number;
  currencyUnit(): string;
  buyingPrice(): number;
  sellingPrice(): number;
}