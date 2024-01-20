

declare class Window_DebugEdit extends Window_Selectable {

  protected _mode: string;
  protected _topId: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxItems(): number;
  override drawItem(index: number): void;
  itemName(dataId: number): string;
  itemStatus(dataId: number): string;
  setMod(mode: string): void;
  setTopId(id: number): void;
  currentId(): number;
  override update(): void;
  updateSwitch(): void;
  updateVariable(): void;
  deltaForVariable(): number;
}