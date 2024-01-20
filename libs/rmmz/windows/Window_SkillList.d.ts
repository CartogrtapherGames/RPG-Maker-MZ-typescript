

declare class Window_SkillList extends Window_Selectable {

  protected _actor: Game_Actor;
  protected _stypeId: number;
  protected _data: DataSkill[];

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle):void;
  setActor(actor: Game_Actor) : void;
  setStypeIdd(stypeId: number):void;
  override maxCols(): number;
  override colSpacing(): number;
  override maxItems(): number;
  item(): DataSkill;
  itemAt(index: number): DataSkill;
  override isCurrentItemEnabled(): boolean;
  includes(item: DataSkill): boolean;
  isEnabled(item: DataSkill): boolean;
  makeItemList():void;
  selectLast():void;
  override drawItem(index: number):void;
  costWidth(): number;
  drawSkillCost(skill: DataSkill,x: number,y: number,width: number):void;
  override updateHelp():void;
  override refresh():void;
}