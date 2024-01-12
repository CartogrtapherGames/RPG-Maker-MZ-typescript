

declare class Window_Help extends Window_Base {

  protected _text: string;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle);
  setText(text: string);
  clear();
  setItem(item: Game_Item);
  refresh();
}