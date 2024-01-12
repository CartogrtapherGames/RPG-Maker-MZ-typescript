

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
  scrollBaseX(): number;
  scrollBaseY(): number;
  // @ts-ignore
  scrollTo(x: number,y: number);
  // @ts-ignore
  scrollBy(x: number, y: number);
  smoothScrollTo(x: number,y: number);
  smoothScrollBy(x: number,y: number);
  setScrollAccell(x: number,y: number);
  overallWidth(): number;
  overallWeight(): number;
  maxScrollX(): number;
  maxScrollY(): number;
  scrollBlockWidth(): number;
  scrollBlockHeight(): number;
  smoothScrollDown(n : number);
  smoothScrollUp(n: number);
  override update();
  processWheelScroll();
  processTouchScroll();
  isWheelScrollEnabled(): boolean;
  isTouchScrollEnabled(): boolean;
  isScrollEnabled(): boolean;
  isTouchedInsideFrame(): boolean;
  onTouchScrollStart();
  onTouchScroll();
  onTouchScrollEnd();
  updateSmoothScroll();
  updateScrollAccel();
  updateArrows();
  updateOrigin();
  updateScrollBase(baseX: number,baseY: number);
  abstract paint();
}