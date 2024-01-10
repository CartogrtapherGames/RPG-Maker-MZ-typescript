declare class Game_Troop extends Game_Unit {

  public static readonly LETTER_TABLE_HALF: string[];
  public static readonly LETTER_TABLE_FULL: string[];

  constructor();

  public isEventRunning(): boolean;
  public updateInterpreter(): void;

  public turnCount(): number;

  public clear(): void;

  public troop(): DataTroop;

  public setup(troopId: number): void;
  public makeUniqueNames(): void;
  public updatePluralFlags(): void;

  public letterTable(): string[];
  public enemyNames(): string[];

  public meetsConditions(page: RPG.Page): boolean;
  public setupBattleEvent(): void;

  public increaseTurn(): void;

  public expTotal(): number;
  public goldTotal(): number;
  public goldRate(): number;

  public makeDropItems(): DataItemBase[];
  public isTpbTurnEnd(): boolean;

}
