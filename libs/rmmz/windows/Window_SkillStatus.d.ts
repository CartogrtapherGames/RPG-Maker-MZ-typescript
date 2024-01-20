
declare class Window_SkillStatus extends Window_StatusBase {


  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor): void;
  override refresh(): void;

  drawItem(index: number): void;
}