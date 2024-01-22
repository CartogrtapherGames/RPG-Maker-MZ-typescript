

declare class Scene_Options extends Scene_MenuBase {

  protected _optionsWindow: Window_Options;

  constructor();
  override initialize(): void;
  override create(): void;
  override terminate(): void;
  createOptionsWindow(): void;
  optionsWindowRect(): Rectangle;
  maxCommands(): number;
  maxVisibleCommands(): number;
}