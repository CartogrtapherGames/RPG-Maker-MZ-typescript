
declare class Sprite_Timer extends Sprite {

  protected _seconds: number;

  constructor();
  initialize();
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean });
  createBitmap();
  fontFace(): string;
  fontSize();
  override update();
  updateBitmap();
  redraw();
  timerText(): number;
  updatePosition();
  override updateVisibility();
}