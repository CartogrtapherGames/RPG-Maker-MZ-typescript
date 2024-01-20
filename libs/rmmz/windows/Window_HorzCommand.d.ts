

declare abstract class Window_HorzCommand extends Window_Command {

  constructor(rect: Rectangle);
  override initialize(Rect: Rectangle): void;
  override maxCols(): number;
  override itemTextAlign(): string;
}