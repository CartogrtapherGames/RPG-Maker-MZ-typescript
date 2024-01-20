

declare class Sprite_Destination extends Sprite {

  protected _frameCount: number;

  constructor();
  initialize(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  override update(): void;
  createBitmap(): void;
  updatePosition(): void;
  updateAnimation(): void;
}