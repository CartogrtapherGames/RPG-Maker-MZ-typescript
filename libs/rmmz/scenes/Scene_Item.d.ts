

declare class Scene_Item extends Scene_ItemBase {

  protected _itemWindow: Window_SkillList;
  protected _categoryWindow: Window_ItemCategory;

  constructor();
  override initialize(): void;
  override create(): void;
  createCategoryWindow(): void;
  categoryWindowRect(): Rectangle;
  createItemWindow(): void;
  itemWindowRect(): Rectangle;
  override user(): Game_Actor[];
  onCategoryOk(): void;
  onItemOk(): void;
  onItemCancel(): void;
  playSeForItem(): void;
  override useItem(): void;
}