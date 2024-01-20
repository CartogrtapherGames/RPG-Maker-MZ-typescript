
declare class Window_EquipItem extends Window_ItemList {

  protected _actor: Game_Actor;
  protected _slotId: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxCols(): number;
  override colSpacing(): number;
  setActor(actor: Game_Actor): void;
  setSlotId(slotId: number): void;
  override includes(item): boolean;
  etypeId(): number;
  isEnabled(): boolean;
  selecLast(): void;
  setStatusWindow(statusWindow): void;
  override updateHelp(): void;
  override playOkSound(): void;
}