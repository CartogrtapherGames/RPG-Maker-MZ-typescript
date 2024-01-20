
declare class Sprite_Picture extends Sprite {

  protected _pictureId: number;
  protected _pictureName: string;

  constructor(pictureId: number);
  initialize(pictureId: number): void;
  picture(): Game_Picture;
  override update(): void;
  updateBitmap(): void;
  updateOrigin(): void;
  updatePosition(): void;
  updateScale(): void;
  updateTone(): void;
  updateOther(): void;
  loadBitmap(): void;
}