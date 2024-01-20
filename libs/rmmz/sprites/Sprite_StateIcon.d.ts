

declare class Sprite_StateIcon extends Sprite{

  protected _battler: Game_Battler;
  protected _iconIndex: number;
  protected _animationCount: number;
  protected _animationIndex: number;

  constructor();
  initialize(): void;
  initMembers(): void;
  loadBitmap(): void;
  setup(battler:Game_Battler): void;
  override update(): void;
  animationWait(): number;
  updateIcon(): void;
  shouldDisplay(): boolean;
  updateFrame(): void;
}