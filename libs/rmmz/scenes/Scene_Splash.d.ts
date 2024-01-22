

declare class Scene_Splash extends Scene_Base {

  protected _backSprite: Sprite;
  protected _waitCount: number;

  constructor();
  override initialize(): void;
  override create(): void;
  override start(): void;
  override update(): void;
  override stop(): void;
  createBackground(): void;
  adjustBackground(): void;
  isEnabled(): boolean;
  initWaitCount():void;
  updateWaitCount(): boolean;
  checkSkip(): void;
  gotoTitle(): void;
  
}