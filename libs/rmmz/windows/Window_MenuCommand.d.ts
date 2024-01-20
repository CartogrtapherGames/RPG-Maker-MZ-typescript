

declare class Window_MenuCommand extends Window_Command {
  protected _canRepeat: boolean;
  protected static _lastCommandSymbol: string;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  static initCommandPosition(): void;
  override makeCommandList(): void;
  addMainCommands(): void;
  addFormationCommand(): void;
  addOriginalCommands(): void;
  addOptionsCommand(): void;
  addSaveCommand(): void;
  addGameEndCommand(): void;
  needsCommand(name: string): boolean;
  areMainCommandsEnabled(): boolean;
  isFormationEnabled(): boolean;
  isOptionsEnabled(): boolean;
  isSaveEnabled(): boolean;
  isGameEndEnabled(): boolean;
  override processOk(): void;
  selectLast(): void;
}