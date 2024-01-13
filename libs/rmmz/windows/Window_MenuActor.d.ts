

declare class Window_MenuActor extends Window_MenuStatus {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);
  override processOk();
  override selectLast();
  selectForItem(item: Game_Item);
}