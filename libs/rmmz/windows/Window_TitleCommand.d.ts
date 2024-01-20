

declare class Window_TitleCommand extends Window_Command {

  protected static _lastCommandSymbol: string;

  static initCommandPosition(): void;
  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override makeCommandList(): void;
  isContinuedEnabled(): boolean;
  override processOk(): void;
  selectLast(): void;
}