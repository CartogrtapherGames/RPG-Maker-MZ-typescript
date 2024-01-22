


declare class Scene_Gameover extends Scene_Base {

  protected _backSprite: Sprite;

  constructor();
  override initialize(): void;
  override create(): void;
  override start(): void;
  override update(): void;
  override stop(): void;
  override terminate(): void;
  playGameoverMusic(): void;
  createBackground(): void;
  adjustBackground(): void;
  isTriggered(): boolean;
  gotoTitle(): void;
}