

declare class Window_MenuStatus extends Window_StatusBase {

  protected _formationMode: boolean;
  protected _pendingIndex: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  override maxItems(): number;
  numVisibleRows(): number;
  override itemHeight(): number;
  actor(index: number): Game_Actor;
  override drawItem(index: number);
  drawPendingItemBackground(index: number);
  drawItemImage(index: number);
  drawItemStatus(index: number);
  override processOk();
  override isCurrentItemEnabled(): boolean;
  selectLast();
  formationNode(): boolean;
  setFormationMode(formationMode: boolean);
  pendingIndex(): boolean;
  setPendingIndex(index: number);
}