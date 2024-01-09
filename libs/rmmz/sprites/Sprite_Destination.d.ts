

declare class Sprite_Destination extends Sprite {

  protected _frameCount: number;

  constructor();
  initialize();
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean });
  override update();
  createBitmap();
  updatePosition();
  updateAnimation();
}