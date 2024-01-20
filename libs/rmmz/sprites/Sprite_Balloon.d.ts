
declare class Sprite_Balloon extends Sprite {

  protected _target: Sprite_Character;
  protected _balloonId: number;
  protected _duration: number;

  constructor();
  initialize(): void;
  initMembers(): void;
  loadBitmap(): void;
  setup(targetSprite: Sprite_Character, balloonId: number): void;
  override update(): void;
  updatePosition(): void;
  updateFrame(): void;
  speed(): number;
  waitTime(): number;
  frameIndex(): number;
  isPlaying(): boolean;
}