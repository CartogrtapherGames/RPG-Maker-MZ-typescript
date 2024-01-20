

declare class Window_ShopNumber extends Window_Selectable {

  protected _item;
  protected _max: number;
  protected _price: number;
  protected _number: number;
  protected _currencyUnity: string;
  protected _canRepeat: boolean;

  constructor(rect:Rectangle);
  override initialize(rect: Rectangle): void;
  override isScrollEnabled(): boolean;
  number(): number;
  setup(item,max: number,price: number): void;
  setCurrencyUnit(currencyUnit: string): void;
  createButtons(): void;
  placeButtons(): void;
  totalButtonWidth(): number;
  buttonSpacing(): number;
  override refresh(): void;
  drawCurrentItemName(): void;
  drawMultiplicationSign(): void;
  multiplicationSign(): void;
  multiplicationSignX(): void;
  drawNumber(): void;
  drawHorzLine(): void;
  drawTotalPrice(): void;
  itemNameY(): number;
  totalPriceY(): number;
  buttonY(): number;
  cursorWidth(): number;
  cursorX(): number;
  maxDigits: number;
  override update(): void;
  override playOkSound(): void;
  processNumberChange(): void;
  changeNumber(amount: number): void;
  itemRect(): Rectangle;
  override isTouchOkEnabled(): boolean;
  onButtonUp(): void;
  onButtonUp2(): void;
  onButtonDown(): void;
  onButtonDown2(): void;
  onButtonOk(): void;
}