
declare class Sprite_Weapon extends Sprite {

  protected _weaponImageId: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();
  initialize();
  initMembers();
  setup(weaponImageId: number);
  override update();
  animationWait(): number;
  updatePattern();
  loadBitmap();
  updateFrame();
  isPlaying(): boolean;
}