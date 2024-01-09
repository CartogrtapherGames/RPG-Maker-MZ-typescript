
declare class Sprite_Balloon extends Sprite {

  protected _target: Sprite_Character;
  protected _balloonId: number;
  protected _duration: number;

  constructor();
  initialize();
  initMembers();
  loadBitmap();
  setup(targetSprite: Sprite_Character, balloonId: number);
  override update();
  updatePosition();
  updateFrame();
  speed(): number;
  waitTime(): number;
  frameIndex(): number;
  isPlaying(): boolean;
}