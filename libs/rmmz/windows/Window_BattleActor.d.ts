

declare class Window_BattleActor extends Window_BattleStatus {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override show(): void;
  override hide(): void;
  override select(index: number): void;
  override processTouch(): void;
}