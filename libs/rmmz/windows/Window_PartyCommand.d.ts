

declare class Window_PartyCommand extends Window_Command {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override makeCommandList(): void;
  setup(): void;
}