

declare class Window_GameEnd extends Window_Command {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void
  override makeCommandList(): void;
}