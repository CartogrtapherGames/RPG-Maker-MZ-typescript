

declare abstract class Scene_File extends Scene_MenuBase {

  protected _listWindow: Window_SavefileList;

  constructor();
  override initialize(): void;
  override create(): void;
  override helpAreaHeight(): number;
  override start(): void;
  savefileId(): number;
  isSavefileEnabled(savefileId: number): boolean;
  override createHelpWindow(): void;
  override helpWindowRect(): Rectangle;
  createListWindow(): void;
  listWindowRect(): Rectangle;
  abstract mode(): string;
  needsAutosave(): boolean;
  activateListWindow(): void;
  helpWindowText(): string;
  firstSavefileId(): number;
  abstract onSavefileOk(): void;
}