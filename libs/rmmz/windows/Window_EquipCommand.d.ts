

declare class Window_EquipCommand extends Window_HorzCommand {

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  override maxCols(): number;
  override makeCommandList(): void;
}