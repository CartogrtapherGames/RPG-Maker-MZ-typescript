

declare class Window_EventItem extends Window_ItemList {

  protected _messageWindow: Window_Message;
  protected _cancelButton: Sprite_Button;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setMessageWindow(messageWindow: Window_Message): void;
  createCancelButton(): void;
  start(): void;
  override update(): void;
  updateCancelButton():void;
  updatePlacement(): void;
  placeCancelButton(): void;
  override includes(item: DataItem): boolean;
  override needsNumber(): boolean;
  override isEnabled(): boolean;
  onOk(): void;
  onCancel(): void;
}