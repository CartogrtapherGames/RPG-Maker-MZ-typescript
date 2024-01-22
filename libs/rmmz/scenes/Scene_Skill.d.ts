

declare class Scene_Skill extends Scene_ItemBase {

  protected _skillTypeWindow: Window_SkillType;
  protected _statusWindow: Window_SkillStatus;
  protected _itemWindow: Window_SkillList;

  constructor();
  override initialize(): void;
  override create(): void;
  override start(): void;
  createSkillTypeWindow(): void;
  skillTypeWindowRect(): Rectangle;
  createStatusWindow(): void;
  statusWindowRect(): Rectangle;
  createItemWindow(): void;
  itemWindowRect(): Rectangle;
  override needsPageButtons(): boolean;
  override arePageButtonsEnabled(): boolean;
  refreshActor(): void;
  override user(): Game_Actor;
  commandSkill(): void;
  onItemOk(): void;
  onItemCancel(): void;
  playSeForItem(): void;
  override useItem(): void;
  override onActorChange(): void;
  
}