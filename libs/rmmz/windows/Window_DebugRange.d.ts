

declare class Window_DebugRange extends Window_Selectable {

  protected _editWindow: Window_DebugEdit;

  static lastTopRow: number;
  static lastIndex: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxItems(): number;
  override update(): void;
  mode(index: number): string;
  topId(index: number): number;
  isSwitchMode(index: number): boolean;
  override drawItem(index: number): void;
  override isCancelTriggered(): boolean;
  override processCancel(): void;
  setEditWindow(editWindow: Window_DebugEdit): void;
}