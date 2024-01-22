
declare class Scene_Name extends Scene_MenuBase {

  protected _actorId: number;
  protected _maxLength: number;
  protected _editWindow: Window_NameEdit;
  protected _inputWindow: Window_NameInput;

  constructor();
  override initialize(): void;
  prepare(actorId: number,maxLength: number): void;
  override create(): void;
  override start(): void;
  createEditWindow(): void;
  editWindowRect(): Rectangle;
  createInputWindow(): void;
  inputWindowRect(): Rectangle;
  onInputOk(): void;
}