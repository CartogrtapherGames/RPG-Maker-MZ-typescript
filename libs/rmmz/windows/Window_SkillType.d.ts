

declare class Window_SkillType extends Window_Command {

  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor): void;
  override makeCommandList(): void;
  override update(): void;
  setSkillWindow(skillWindow: Window_SkillList): void;
  selectLast(): void;
}