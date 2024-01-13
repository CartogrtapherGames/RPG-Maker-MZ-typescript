
declare class Window_SkillStatus extends Window_StatusBase {


  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  setActor(actor: Game_Actor);
  override refresh();

  drawItem(index: number);
}