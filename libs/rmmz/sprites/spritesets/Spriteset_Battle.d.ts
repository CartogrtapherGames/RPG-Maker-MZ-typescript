

declare class Spriteset_Battle extends Spriteset_Base {

  protected _battlebackLocated: boolean;
  protected _backgroundFilter: PIXI.Filter;
  protected _backgroundSprite: Sprite;
  protected _back1Sprite: Sprite_Battleback;
  protected _back2Sprite: Sprite_Battleback;
  protected _battleField: Sprite;
  protected _enemySprites: Sprite_Enemy;
  protected _actorSprites: Sprite_Actor;

  constructor();
  override initialize(): void;
  override loadSystemImages(): void;
  override createLowerLayer(): void;
  createBackground(): void;
  createBattleback(): void;
  createBattleField(): void;
  battleFieldOffsetY(): number;
  override update(): void;
  updateBattleback(): void;
  createEnemies(): void;
  compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
  createActors(): void;
  updateActors(): void;
  override findTargetSprite(target: Sprite_Battler): void;
  battlerSprites(): Sprite_Battler[];
  isEffecting(): boolean;
  isAnyoneMoving(): boolean;
  isBusy(): boolean;
}