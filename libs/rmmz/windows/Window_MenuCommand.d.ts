

declare class Window_MenuCommand extends Window_Command {
  protected _canRepeat: boolean;
  protected static _lastCommandSymbol: string;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  static initCommandPosition();
  override makeCommandList();
  addMainCommands();
  addFormationCommand();
  addOriginalCommands();
  addOptionsCommand();
  addSaveCommand();
  addGameEndCommand();
  needsCommand(name: string): boolean;
  areMainCommandsEnabled(): boolean;
  isFormationEnabled(): boolean;
  isOptionsEnabled(): boolean;
  isSaveEnabled(): boolean;
  isGameEndEnabled(): boolean;
  override processOk();
  selectLast();
}