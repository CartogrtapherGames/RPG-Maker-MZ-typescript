

declare class Scene_GameEnd extends Scene_MenuBase {

  protected _commandWindow: Window_GameEnd;

  constructor();
  override initialize(): void;
  override create(): void;
  override stop(): void;
  override createBackground(): void;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  commandToTitle(): void;
}