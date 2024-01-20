
declare class Window_EquipSlot extends Window_StatusBase {

  protected _actor: Game_Actor;

  constructor(rect:Rectangle);
  override initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor): void;
  override update(): void;
  override maxItems(): number;
  item(): DataWeapon | DataArmor;
  itemAt(index: number): DataWeapon | DataArmor;
  override drawItem(index: number): void;
  slotNameWidth(): number;
  isEnabled(index: number): boolean;
  override isCurrentItemEnabled(): boolean;
  setStatusWindow(statusWindow): void;
  setItemWindow(itemWindow): void;
  override updateHelp(): void;
  
}