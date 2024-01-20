
declare class Sprite_Weapon extends Sprite {

  protected _weaponImageId: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();
  initialize(): void;
  initMembers(): void;
  setup(weaponImageId: number): void;
  override update(): void;
  animationWait(): number;
  updatePattern(): void;
  loadBitmap(): void;
  updateFrame(): void;
  isPlaying(): boolean;
}