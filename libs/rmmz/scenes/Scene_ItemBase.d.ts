
type ItemWindowType = Window_ItemList | Window_SkillList | Window_EquipItem;

declare abstract class Scene_ItemBase extends Scene_MenuBase {

  protected _actorWindow: Window_MenuActor;
  // This is used for typing
  protected _itemWindow: ItemWindowType;

  constructor();
  override initialize(): void;
  override create(): void;
  createActorWindow(): void;
  actorWindowRect(): Rectangle;
  item(): DataItem | DataArmor | DataWeapon | DataSkill;
  abstract user(): unknown;
  isCursorLeft(): boolean;
  showActorWindow(): void;
  hideActorWindow(): void;
  isActorWindowActive(): boolean;
  onActorOk(): void;
  onActorCancel(): void;
  determineItem(): void;
  useItem(): void;
  activateItemWindow(): void;
  // TODO : not sure if its right
  itemTargetActors(): Game_Actor[];
  canUse(): boolean;
  isItemEffectsValid(): boolean;
  applyItem(): void;
  checkCommonEvent(): void;
}