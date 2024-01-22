

declare class Scene_Equip extends Scene_ItemBase {

  protected _statusWindow: Window_EquipStatus;
  protected _commandWindow: Window_EquipCommand;
  protected _slotWindow: Window_EquipSlot;
  protected _itemWindow: Window_EquipItem;

  constructor();
  override initialize(): void;
  override create(): void;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createCommandWindow(): void;
  commandWindowRect(): Rectangle;
  createSlotWindow(): void;
  slotWindowRect(): Rectangle;
  createItemWindow(): void;
  itemWindowRect(): Rectangle;
  statusWidth(): number;
  override needsPageButtons(): boolean;
  override arePageButtonsEnabled(): boolean;
  refreshActor(): void;
  commandEquip(): void;
  commandOptimize(): void;
  commandClear(): void;
  onSlotOk(): void;
  onSlotCancel(): void;
  onItemOk(): void;
  executeEquipChange(): void;
  onItemCancel(): void;
  onActorChange(): void;
  hideItemWindow(): void;
  // in this case its never used???  but its part of an abstract implementation.
  override user(): never;
}