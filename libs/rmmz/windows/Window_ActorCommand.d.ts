

declare class Window_ActorCommand extends Window_Command {

  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override makeCommandList(): void;
  addAttackCommand(): void;
  addSkillCommands(): void
  addGuardCommand(): void;
  addItemCommand(): void;
  setup(actor: Game_Actor): void;
  actor(): Game_Actor;
  override processOk(): void;
  selectLast(): void;
}