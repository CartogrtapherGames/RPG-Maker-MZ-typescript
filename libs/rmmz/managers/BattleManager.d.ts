declare enum Result {
  Victory = 0,
  Abort = 1,
  Defeat = 2
}

declare class BattleManager {
  protected static _phase: String;
  protected static _inputting: boolean;
  protected static _canEscape: boolean;
  protected static _canLose: boolean;
  protected static _battleTest: boolean;
  protected static _eventCallback: (result: Result) => void;

  protected static _preemptive: boolean;
  protected static _surprise: boolean;

  protected static _currentActor: Game_Actor;
  protected static _actionForcedBattler: Game_Actor | Game_Enemy | null;

  protected static _mapBgm: CurrentAudio;
  protected static _mapBgs: CurrentAudio;

  protected static _targets: Array<Game_Battler>;
  protected static _logWindow: Window_BattleLog;
  protected static _spriteset: Spriteset_Battle;
  protected static _escapeRatio: number;
  protected static _escaped: boolean;
  protected static _rewards: Game_Item[];

  protected static _tpbNeedsPartCommand: boolean;
  

  static setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  static initMembers(): void;
  static isTpb(): boolean;
  static isActiveTpb(): boolean;
  static isBattleTest(): boolean;

  static setBattleTest(battleTest: boolean): void;
  static setEventCallback(callback: (result: Result) => void): void;
  static setLogWindow(logWindow: Window_BattleLog): void;
  static setSpriteset(spriteset: Spriteset_Battle): void;

  static onEncounter(): void;

  static ratePreemptive(): number;
  static rateSurprise(): number;

  static saveBgmAndBgs(): void;
  static playBattleBgm(): void;
  static playVictoryMe(): void;
  static playDefeatMe(): void;
  static replayBgmAndBgs(): void;

  static makeEscapeRatio(): void;

  static update(timeActive: number): void;

  static updatePhase(timeActive: number): void;
  static updateEvent(): void;
  static updateEventMain(): boolean;

  static isBusy(): boolean;

  static updateTpbInput(): void;

  static checkTpbInputClose(): void;
  static checkTpbInputOpen(): void;

  static isPartyTpbInputtable(): boolean;

  static needsActorInputCancel(): boolean;

  static isTpbMainPhase(): boolean;
  static isInputting(): boolean;
  static isInTurn(): boolean;

  static isTurnEnd(): boolean;
  static isAborting(): boolean;
  static isBattleEnd(): boolean;

  static canEscape(): boolean;
  static canLose(): boolean;

  static isEscaped(): boolean;

  static actor(): Game_Actor;

  static startBattle(): void;

  static displayStartMessages(): void;

  static startInput(): void;

  static inputtingAction(): Game_Action;

  static selectNextCommand(): void;

  static selectNextActor(): void;
  static selectPreviousCommand(): void;
  static selectPreviousActor(): void;

  static changeCurrentActor(forward: boolean): void;

  static startActorInput(): void;

  static finishActorInput(): void;
  static cancelActorInput(): void;

  static updateStart(): void;

  static startTurn(): void;

  static updateTurn(timeActive: boolean): void;
  static updateTpb(): void;
  static updateAllTpbBattlers(): void;
  static updateTpbBattler(battler: Game_Battler): void;

  static checkTpbTurnEnd(): void;

  static processTurn(): void;

  static endBattlerActions(battler: Game_Battler): void;

  static endTurn(): void;

  static endAllBattlersTurn(): void;

  static displayBattlerStatus(battler: Game_Battler, current: boolean): void;

  static updateTurnEnd(): void;

  static getNextSubject(): Game_Battler | null;

  static allBattleMembers(): Game_Battler[];

  static makeActionOrders(): void;

  static startAction(): void;
  static updateAction(): void;
  static endAction(): void;

  static invokeAction(subject: Game_Battler, target: Game_Battler): void;
  static invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
  static invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
  static invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void;

  static applySubstitute(target: Game_Battler): Game_Battler;
  static checkSubstitute(target: Game_Battler): boolean;

  static isActionForced(): boolean;

  static forceAction(battler: Game_Battler): void;

  static processForcedAction(): void;

  static abort(): void;

  static checkBattleEnd(): boolean;
  static checkAbort(): boolean;

  static processVictory(): void;
  static processEscape(): boolean;

  static onEscapeSuccess(): void;
  static onEscapeFailure(): void;

  static processAbort(): void;
  static processDefeat(): void;

  static endBattle(result: Result): void;

  static updateBattleEnd(): void;

  static makeRewards(): void;

  static displayVictoryMessage(): void;
  static displayDefeatMessage(): void;
  static displayEscapeSuccessMessage(): void;
  static displayEscapeFailureMessage(): void;
  static displayRewards(): void;
  static displayExp(): void;
  static displayGold(): void;
  static displayDropItems(): void;

  static gainRewards(): void;
  static gainExp(): void;
  static gainGold(): void;
  static gainDropItems(): void;

}
