


declare class Window_ShopStatus extends Window_StatusBase {

  protected _item;
  protected _pageIndex: number
  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override refresh(): void;
  setItem(item): void;
  isEquipItem(): boolean;
  drawPossession(x: number,y: number): void;
  drawEquipInfo(x: number,y: number): void;
  statusMembers(): Game_Actor[];
  pageSize(): number;
  maxPages(): number;
  drawActorEquipInfo(x: number,y: number,actor: Game_Actor): void;
  drawActorParamChange(x: number,y: number,actor: Game_Actor,item1): void;
  paramId(): number;
  currentEquippedItem(actor: Game_Actor,etypeId: number);
  override update(): void;
  updatePage(): void;
  isPageChangeEnabled(): boolean;
  isPageChangeRequested(): boolean;
  changePage(): void;
}