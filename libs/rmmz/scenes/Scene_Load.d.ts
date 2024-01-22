

declare class Scene_Load extends Scene_File {

  protected _loadSuccess: boolean;
  
  constructor();
  override initialize(): void;
  override terminate(): void;
  override mode(): string;
  override helpWindowText(): string;
  override firstSavefileId(): number;
  override onSavefileOk(): void;
  executeLoad(savefileId :number): void;
  onLoadSuccess(): void;
  onLoadFailure(): void;
  reloadMapIfUpdated(): void;
}