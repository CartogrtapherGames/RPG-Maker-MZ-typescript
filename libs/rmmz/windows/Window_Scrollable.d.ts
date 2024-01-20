

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
  override initialize(rect: Rectangle): void;
  clearScrollStatus(): void;

  // @ts-ignore
  // for some reason scroll X is already defined??
  scrollX(): number;
  // @ts-ignore
  scrollY(): number;
  scrollBaseX(): number;
  scrollBaseY(): number;
  // @ts-ignore
  scrollTo(x: number,y: number): void;
  // @ts-ignore
  scrollBy(x: number, y: number): void;
  smoothScrollTo(x: number,y: number): void;
  smoothScrollBy(x: number,y: number): void;
  setScrollAccell(x: number,y: number): void;
  overallWidth(): number;
  overallWeight(): number;
  maxScrollX(): number;
  maxScrollY(): number;
  scrollBlockWidth(): number;
  scrollBlockHeight(): number;
  smoothScrollDown(n : number): void;
  smoothScrollUp(n: number): void;
  override update(): void;
  processWheelScroll(): void;
  processTouchScroll(): void;
  isWheelScrollEnabled(): boolean;
  isTouchScrollEnabled(): boolean;
  isScrollEnabled(): boolean;
  isTouchedInsideFrame(): boolean;
  onTouchScrollStart(): void;
  onTouchScroll(): void;
  onTouchScrollEnd(): void;
  updateSmoothScroll(): void;
  updateScrollAccel(): void;
  updateArrows(): void;
  updateOrigin(): void;
  updateScrollBase(baseX: number,baseY: number): void;
  abstract paint(): void;
}