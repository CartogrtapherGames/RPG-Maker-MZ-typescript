

declare class Window_BattleSkill extends Window_SkillList {

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override show(): void;
  override hide(): void;
}