

declare class Window_MenuStatus extends Window_StatusBase {

  protected _formationMode: boolean;
  protected _pendingIndex: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxItems(): number;
  numVisibleRows(): number;
  override itemHeight(): number;
  actor(index: number): Game_Actor;
  override drawItem(index: number): void;
  drawPendingItemBackground(index: number): void;
  drawItemImage(index: number): void;
  drawItemStatus(index: number): void;
  override processOk(): void;
  override isCurrentItemEnabled(): boolean;
  selectLast(): void;
  formationNode(): boolean;
  setFormationMode(formationMode: boolean): void;
  pendingIndex(): boolean;
  setPendingIndex(index: number): void;
}