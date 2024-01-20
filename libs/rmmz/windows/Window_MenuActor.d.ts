

declare class Window_MenuActor extends Window_MenuStatus {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override processOk(): void;
  override selectLast(): void;
  selectForItem(item: Game_Item): void;
}