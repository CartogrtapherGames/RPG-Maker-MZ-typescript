declare enum Result {
  Victory = 0,
  Abort = 1,
  Defeat = 2
}

declare class BattleManager {
  protected _phase: String;
  protected _inputting: boolean;
  protected _canEscape: boolean;
  protected _canLose: boolean;
  protected _battleTest: boolean;
  protected _eventCallback: (result: Result) => void;

  protected _preemptive: boolean;
  protected _surprise: boolean;

  protected _currentActor: Game_Actor;
  protected _actionForcedBattler: Game_Actor | Game_Enemy | null;

  protected _mapBgm: AudioManager.CurrentAudio;
  protected _mapBgs: AudioManager.CurrentAudio;

  protected _targets: Array<Game_Battler>;
  protected _logWindow: Window_BattleLog;
  protected _spriteset: Spriteset_Battle;
  protected _escapeRatio: number;
  protected _escaped: boolean;
  protected _rewards: Game_Item[];

  protected _tpbNeedsPartCommand: boolean;
  

  setup(troopId: number, canEscape: boolean, canLose: boolean): void;
  initMembers(): void;
  isTpb(): boolean;
  isActiveTpb(): boolean;
  isBattleTest(): boolean;

  setBattleTest(battleTest: boolean): void;
  setEventCallback(callback: (result: Result) => void): void;
  setLogWindow(logWindow: Window_BattleLog): void;
  setSpriteset(spriteset: Spriteset_Battle): void;

  onEncounter(): void;

  ratePreemptive(): number;
  rateSurprise(): number;

  saveBgmAndBgs(): void;
  playBattleBgm(): void;
  playVictoryMe(): void;
  playDefeatMe(): void;
  replayBgmAndBgs(): void;

  makeEscapeRatio(): void;

  update(timeActive: number): void;

  updatePhase(timeActive: number): void;
  updateEvent(): void;
  updateEventMain(): boolean;

  isBusy(): boolean;

  updateTpbInput(): void;

  checkTpbInputClose(): void;
  checkTpbInputOpen(): void;

  isPartyTpbInputtable(): boolean;

  needsActorInputCancel(): boolean;

  isTpbMainPhase(): boolean;
  isInputting(): boolean;
  isInTurn(): boolean;

  isTurnEnd(): boolean;
  isAborting(): boolean;
  isBattleEnd(): boolean;

  canEscape(): boolean;
  canLose(): boolean;

  isEscaped(): boolean;

  actor(): Game_Actor;

  startBattle(): void;

  displayStartMessages(): void;

  startInput(): void;

  inputtingAction(): Game_Action;

  selectNextCommand(): void;

  selectNextActor(): void;
  selectPreviousCommand(): void;
  selectPreviousActor(): void;

  changeCurrentActor(forward: boolean): void;

  startActorInput(): void;

  finishActorInput(): void;
  cancelActorInput(): void;

  updateStart(): void;

  startTurn(): void;

  updateTurn(timeActive: boolean): void;
  updateTpb(): void;
  updateAllTpbBattlers(): void;
  updateTpbBattler(battler): void;

  checkTpbTurnEnd(): void;

  processTurn(): void;

  endBattlerActions(battler): void;

  endTurn(): void;

  endAllBattlersTurn(): void;

  displayBattlerStatus(battler: Game_Battler, current: boolean): void;

  updateTurnEnd(): void;

  getNextSubject(): Game_Battler | null;

  allBattleMembers(): Game_Battler[];

  makeActionOrders(): void;

  startAction(): void;
  updateAction(): void;
  endAction(): void;

  invokeAction(subject: Game_Battler, target: Game_Battler): void;
  invokeNormalAction(subject: Game_Battler, target: Game_Battler): void;
  invokeCounterAttack(subject: Game_Battler, target: Game_Battler): void;
  invokeMagicReflection(subject: Game_Battler, target: Game_Battler): void;

  applySubstitute(target: Game_Battler): Game_Battler;
  checkSubstitute(target: Game_Battler): boolean;

  isActionForced(): boolean;

  forceAction(battler: Game_Battler): void;

  processForcedAction(): void;

  abort(): void;

  checkBattleEnd(): boolean;
  checkAbort(): boolean;

  processVictory(): void;
  processEscape(): boolean;

  onEscapeSuccess(): void;
  onEscapeFailure(): void;

  processAbort(): void;
  processDefeat(): void;

  endBattle(result: Result): void;

  updateBattleEnd(): void;

  makeRewards(): void;

  displayVictoryMessage(): void;
  displayDefeatMessage(): void;
  displayEscapeSuccessMessage(): void;
  displayEscapeFailureMessage();
  displayRewards(): void;
  displayExp(): void;
  displayGold(): void;
  displayDropItems(): void;

  gainRewards(): void;
  gainExp(): void;
  gainGold(): void;
  gainDropItems(): void;

}
