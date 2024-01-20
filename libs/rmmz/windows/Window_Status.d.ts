

declare class Window_Status extends Window_StatusBase {


  protected _actor: Game_Actor;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override refresh(): void;
  drawBlock1(): void;
  block1Y(): number;
  drawBlock2(): void;
  block2Y(): number;
  drawBasicInfo(x: number,y: number): void;
  drawExpInfo(x: number,y: number): void;
  expTotalValue(): string;
  expNextValue(): string;

  drawItem(index: number, ...args: any[]): void;
}