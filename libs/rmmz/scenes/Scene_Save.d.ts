

declare class Scene_Save extends Scene_File {

  constructor();
  override initialize(): void;
  override mode(): string;
  override helpWindowText(): string;
  override firstSavefileId(): number;
  override onSavefileOk(): void;
  executeSave(savefileId: number): void;
  onSaveSuccess(): void;
  onSaveFailure(): void;
}