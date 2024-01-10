

declare abstract class Window_Scrollable extends Window_Base {

  protected _scrollX: number;
  protected _scrollY: number;
  protected _scrollBaseX: number;
  protected _scrollBaseY: number;
  protected _scrollTargetX: number;
  protected _scrollTargetY: number;
  protected _scrollDuration: number;
  protected _scrollAccelX: number;
  protected _scrollAccelY: number;
  protected _scrollTouching: boolean;
  protected _lastTouchX: number;
  protected _lastTouchY: number;
  protected _scrollLastCursorVisible: boolean;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  clearScrollStatus();

  // @ts-ignore
  // for some reason scroll X is already defined??
  scrollX(): number;
  // @ts-ignore
  scrollY(): number;
}