
declare class Window_StatusParams extends Window_StatusBase {

  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor): void;
  override maxItems(): number;
  override itemHeight(): number;
  override drawItem(index: number): void;
  override drawItemBackground(): void;
}