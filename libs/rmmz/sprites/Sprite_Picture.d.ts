
declare class Sprite_Picture extends Sprite {

  protected _pictureId: number;
  protected _pictureName: string;

  constructor(pictureId: number);
  initialize(pictureId: number);
  picture(): Game_Picture;
  override update();
  updateBitmap();
  updateOrigin();
  updatePosition();
  updateScale();
  updateTone();
  updateOther();
  loadBitmap();
}