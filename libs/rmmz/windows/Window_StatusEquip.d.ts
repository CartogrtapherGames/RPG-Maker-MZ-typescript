

declare class Window_StatusEquip extends Window_StatusBase {

  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  initialize(rect: Rectangle): void;
  setActor(actor: Game_Actor): void;
  override maxItems(): number;
  override itemHeight(): number;
  override drawItem(index: number): void;
  override drawItemBackground(): void;

}