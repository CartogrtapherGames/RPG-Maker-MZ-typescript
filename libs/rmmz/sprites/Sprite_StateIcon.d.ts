

declare class Sprite_StateIcon extends Sprite{

  protected _battler: Game_Battler;
  protected _iconIndex: number;
  protected _animationCount: number;
  protected _animationIndex: number;

  constructor();
  initialize();
  initMembers();
  loadBitmap();
  setup(battler:Game_Battler);
  override update();
  animationWait(): number;
  updateIcon();
  shouldDisplay(): boolean;
  updateFrame();
}