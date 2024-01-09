declare class Sprite_StateOverlay extends Sprite{

  protected _battler: Game_Battler;
  protected _overlayIndex: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();
  initialize();
  initMembers();
  loadBitmap();
  setup(battler: Game_Battler);
  override update();
  animationWait(): number;
  updatePattern();
  updateFrame();
}