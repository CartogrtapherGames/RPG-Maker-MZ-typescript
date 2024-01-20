


declare class Window_MapName extends Window_Base {

  protected _showCount: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override update(): void;
  updateFadeIn(): number;
  updateFadeOut(): number;
  override open(): void;
  override close(): void;
  refresh(): void;
  drawBackground(x: number,y: number,width: number,height: number): void;
}