import {Rectangle} from "pixi.js";

declare class Window_Gold extends Window_Selectable {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  override colSpacing(): number;
  override refresh();
  value(): number;
  currencyUnit(): string;
  override open();

  // not needed but ts will yield error if we dont implement abstract members.
  // Although in this case its MZ original codebase that doesnt follow standard.
  drawItem(index: number);
}