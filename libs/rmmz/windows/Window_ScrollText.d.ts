

declare class Window_ScrollText extends Window_Base {

  protected _reservedRect: Rectangle;
  protected _text: string;
  protected _maxBitmapHeight: number;
  protected _allTextHeight: number;
  protected _blockHeight: number;
  protected _blockIndex: number;
  protected _scrollY: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override update(): void;
  startMessage(): void;
  refresh(): void;
  updatePlacement(): void;
  contentsHeight(): number;
  updateMessage(): void;
  scrollSpeed(): number;
  isFastForward(): boolean;
  fastForwardRate(): number;
  terminateMessage(): void;
}