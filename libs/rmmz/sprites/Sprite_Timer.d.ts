
declare class Sprite_Timer extends Sprite {

  protected _seconds: number;

  constructor();
  initialize(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  createBitmap(): void;
  fontFace(): string;
  fontSize(): void;
  override update(): void;
  updateBitmap(): void;
  redraw(): void;
  timerText(): number;
  updatePosition(): void;
  override updateVisibility(): void;
}