

declare class Window_EquipStatus extends Window_StatusBase {

  protected _actor: Game_Actor;
  protected _tempActor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  setActor(actor: Game_Actor): void;
  override colSpacing(): number;
  override refresh(): void;
  setTemp(tempActor: Game_Actor): void;
  drawAllParams(): void;
  override drawItem(x: number,y: number,paramId: number): void;
  drawParamName(x: number,y: number,paramId: number): void;
  drawCurrentParam(x: number,y: number,paramId: number): void;
  drawRightArrow(x: number,y: number): void;
  drawNewParam(x: number,y: number,paramId: number): void;
  rightArrowWidth(): number;
  paramWidth(): number;
  paramX(): number;
  paramY(): number;

}