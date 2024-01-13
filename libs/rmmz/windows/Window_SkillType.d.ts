

declare class Window_SkillType extends Window_Command {

  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  setActor(actor: Game_Actor);
  override makeCommandList();
  override update();
  setSkillWindow(skillWindow: window_SkillList);
  selectLast();
}