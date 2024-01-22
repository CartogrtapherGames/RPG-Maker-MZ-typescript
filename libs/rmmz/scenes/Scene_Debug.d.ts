

declare class Scene_Debug extends Scene_MenuBase {

  protected _rangeWindow: Window_DebugRange;
  protected _editWindow: Window_DebugEdit;
  protected _debugHelpWindow: Window_Base;

  constructor();
  override initialize(): void;
  override create(): void;
  override needsCancelButton(): boolean;
  createRangeWindow(): void;
  rangeWindowRect(): Rectangle;
  createEditWindow(): void;
  editWindowRect(): Rectangle;
  createDebugHelpWindow(): void;
  debugHelpWindowRect(): Rectangle;
  onRangeOk(): void;
  onEditCancel(): void;
  refreshHelpWindow():void;
  helpText(): string;
}