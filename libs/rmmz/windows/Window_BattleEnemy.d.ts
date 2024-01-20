
declare class Window_BattleEnemy extends Window_Selectable {

  protected _enemies: Game_Enemy[];
  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  override maxCols(): number;
  override maxItems(): number;
  enemy(): Game_Enemy;
  enemyIndex(): number;
  override drawItem(index: number): void;
  override show(): void;
  override hide(): void;
  override refresh(): void;
  override select(index: number): void;
  override processTouch(): void;

}