

declare class Window_ChoiceList extends Window_Command {

  protected _background: number;
  protected _canRepeat: boolean;
  protected _cancelButton: Sprite_Button;
  protected _messageWindow: Window_Message;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setMessageWindow(messageWindow: Window_Message): void;
  createCancelButton(): void;
  start(): void;
  override update(): void;
  updateCancelButton(): void;
  selectDefault(): void;
  updatePlacement(): void;
  updateBackground(): void;
  placeCancelButton(): void;
  windowX(): number;
  windowY(): number;
  windowWidth(): number;
  windowHeight(): number;
  numVisibleRows(): number;
  maxLines():number;
  maxChoiceWidth(): number;
  override makeCommandList(): void;
  override drawItem(index: number): void;
  override isCancelEnabled(): boolean;
  needsCancelButton(): boolean;
  override callCancelHandler(): void;
}