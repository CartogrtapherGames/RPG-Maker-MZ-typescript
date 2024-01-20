

declare class Window_NumberInput extends  Window_Selectable {

  protected _number: number;
  protected _maxDigits: number;
  protected _canRepeat: boolean;
  protected _buttons: Sprite_Button[];
  protected _messageWindow: Window_Message;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setMessageWindow(messageWindow: Window_Message): void;
  start(): void;
  updatePlacement(): void;
  windowWidth(): number;
  windowHeight(): number;
  override maxCols(): number;
  override maxItems(): number;
  override itemWidth(): number;
  override itemRect(index: number): Rectangle;
  override isScrollEnabled(): boolean;
  override isHoverEnabled(): boolean;
  createButtons(): void;
  placeButtons(): void;
  totalButtonWidth(): number;
  buttonSpacing(): number;
  buttonY(): number;
  override update(): void;
  processDigitChange(): void;
  changeDigit(up: boolean): void;
  override isTouchOkEnabled(): boolean;
  override isOkEnabled(): boolean;
  override processOk(): void;
  override drawItem(index: number): void;
  onButtonUp(): void;
  onButtonDown(): void;
  onButtonOk(): void;
}