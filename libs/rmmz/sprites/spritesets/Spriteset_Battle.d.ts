

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
  override initialize();
  override loadSystemImages();
  override createLowerLayer();
  createBackground();
  createBattleback();
  createBattleField();
  battleFieldOffsetY(): number;
  override update();
  updateBattleback();
  createEnemies();
  compareEnemySprite(a: Sprite_Enemy, b: Sprite_Enemy): number;
  createActors();
  updateActors();
  override findTargetSprite(target: Sprite_Battler);
  battlerSprites(): Sprite_Battler[];
  isEffecting(): boolean;
  isAnyoneMoving(): boolean;
  isBusy(): boolean;
}