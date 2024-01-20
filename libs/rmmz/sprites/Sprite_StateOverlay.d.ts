declare class Sprite_StateOverlay extends Sprite{

  protected _battler: Game_Battler;
  protected _overlayIndex: number;
  protected _animationCount: number;
  protected _pattern: number;

  constructor();
  initialize(): void;
  initMembers(): void;
  loadBitmap(): void;
  setup(battler: Game_Battler): void;
  override update(): void;
  animationWait(): number;
  updatePattern(): void;
  updateFrame(): void;
}