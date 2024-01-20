

declare class Window_BattleStatus extends Window_StatusBase {

  protected _bitmapsReady: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  extraHeight(): number;
  override maxCols(): number;
  override itemHeight(): number;
  override maxItems(): number;
  override rowSpacing(): number;
  override updatePadding(): void;
  actor(index: number): Game_Actor;
  selectActor(actor: Game_Actor): void;
  override update(): void;
  preparePartyRefresh(): void;
  performPartyRefresh(): void;
  override drawItem(index: number): void;
  drawItemImage(index: number): void;
  drawItemStatus(index: number): void;
  faceRect(index: number): Rectangle;
  nameX(rect: Rectangle): number;
  nameY(rect: Rectangle): number;
  stateIconX(rect: Rectangle): number;
  stateIconY(rect: Rectangle): number;
  basicGaugeX(rect: Rectangle): number;
  basicGaugeY(rect: Rectangle): number;
}