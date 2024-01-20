

declare class Window_Help extends Window_Base {

  protected _text: string;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  setText(text: string): void;
  clear(): void;
  setItem(item: Game_Item): void;
  refresh(): void;
}