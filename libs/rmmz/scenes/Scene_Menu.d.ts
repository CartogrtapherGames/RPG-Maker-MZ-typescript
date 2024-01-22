

declare class Scene_Menu extends Scene_MenuBase {

  protected _statusWindow: Window_MenuStatus;
  protected _commandWindow: Window_MenuCommand;
  protected _goldWindow: Window_Gold;

  constructor();
  override initialize(): void;
  override helpAreaHeight(): number;
  override create(): void;
  override start(): void;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  createGoldWindow(): void;
  goldWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  commandItem(): void;
  commandPersonal(): void;
  commandFormation(): void;
  commandOptions(): void;
  commandSave(): void;
  commandGameEnd(): void;
  onPersonalOk(): void;
  onPersonalCancel(): void;
  onFormationOk(): void;
  onFormationCancel(): void;
}