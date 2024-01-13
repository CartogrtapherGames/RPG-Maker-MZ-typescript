

declare class Window_EquipStatus extends Window_StatusBase {

  protected _actor: Game_Actor;
  protected _tempActor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle);
  setActor(actor: Game_Actor);
  override colSpacing(): number;
  override refresh();
  setTemp(tempActor: Game_Actor);
  drawAllParams();
  override drawItem(x: number,y: number,paramId: number): void;
}