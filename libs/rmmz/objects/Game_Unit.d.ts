declare class Game_Unit {

  constructor();

  protected _inBattle: boolean;

  public inBattle(): boolean;

  public members(): Game_Battler[]

  public aliveMembers(): Game_Battler[];
  public deadMembers(): Game_Battler[];
  public movableMembers(): Game_Battler[];

  public clearActions(): void;

  public agility(): number;
  public tgrSum(): number;

  public randomTarget(): Game_Battler;
  public randomDeadTarget(): Game_Battler;
  public smoothTarget(): Game_Battler;
  public smoothDeadTarget(): Game_Battler;

  public clearResults(): void;

  public onBattleStart(advantageous: boolean): void;

  public onBattleEnd(): void;
  public makeActions(): void;

  public select(activeMember: Game_Battler): void;

  public isAllDead(): boolean;

  public substituteBattler(): Game_Battler | null;

  public tpbBaseSpeed(): number;
  public tpbReferenceTime(): number;

  public updateTpb(): void;

}
