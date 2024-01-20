

declare class Window_ShopCommand extends Window_HorzCommand {

  protected _purchaseOnly: boolean;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  setPurchaseOnly(purchaseOnly: boolean): void;
  override maxCols(): number;
  override makeCommandList(): void;
}