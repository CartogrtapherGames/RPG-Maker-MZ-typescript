

declare class Window_BattleLog extends Window_Base {

  protected _lines: string[];
  protected _methods: Function[];
  protected _waitCount: number;
  protected _waitMode: string;
  protected _baseLineStack: number[];
  protected _spriteset: Spriteset_Battle;


  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setSpriteset(spriteset: Spriteset_Battle): void;
  maxLine(): number;
  numLines(): number;
  messageSpeed(): number;
  isBusy(): boolean;
  override update(): void;
  updateWait(): boolean;
  updateWaitMode(): void;
  setWaitMode(waitMode: string): void;
  callNextMethod(): void;
  isFastForward(): boolean;
  push(methodName: string): void;
  clear(): void;
  wait(): void;
  waitForEffect(): void;
  waitForMovement(): void;
  addText(text: string): void;
  pushBaseLine(): void;
  popBaseLine(): void;
  waitForNewLine(): void;
  popupDamage(target: Game_Battler): void;
  performActionStart(subject: Game_Battler,action: Game_Action): void;
  performAction(subject: Game_Battler,action: Game_Action): void;
  performActionEnd(subject: Game_Battler,action: Game_Action): void;
  performDamage(target: Game_Battler): void;
  performMiss(target: Game_Battler):void;
  performRecovery(target: Game_Battler): void;
  performEvasion(target: Game_Battler): void;
  performMagicEvasion(target: Game_Battler): void;
  performCounter(target: Game_Battler): void;
  performReflection(target: Game_Battler): void;
  performSubstitute(substitute: Game_Battler,target: Game_Battler): void;
  performCollapse(target: Game_Battler): void;
  showAnimation(subject: Game_Battler,targets: Game_Battler[], animationId: number): void;
  showAttackAnimation(subject: Game_Battler,targets: Game_Battler[]): void;
  showActorAttackAnimation(subject: Game_Battler,targets: Game_Battler[]): void;
  showEnemyAttackAnimation(): void;
  showNormalAnimation(targets: Game_Battler[],animationId: number,mirror: boolean): void;
  refresh(): void;
  drawBackground(): void;
  backRect(): Rectangle;
  lineRect(index: number): Rectangle;
  backColor(): string;
  backPaintOpacity(): number;
  drawLineText(index: number): void;
  startTurn(): void;
  startAction(subject: Game_Battler,action: Game_Action,targets: Game_Battler[]): void;
  endAction(subject: Game_Battler): void;
  displayCurrentState(subject: Game_Battler): void;
  displayRegeneration(subject: Game_Battler): void;
  displayAction(subject: Game_Battler,item: DataItem): void; // TODO : is it really data Item?
  displayItemMessage(fmt: string,subject: Game_Battler,item: DataItem): void; // TODO : is it really data Item?
  displayCounter(target: Game_Battler): void;
  displayReflection(target: Game_Battler): void;
  displaySubstitute(substitute: Game_Battler,target: Game_Battler): void;
  displayActionResults(subject: Game_Battler,target: Game_Battler): void;
  displayFailure(target: Game_Battler): void;
  displayCritical(target: Game_Battler): void;
  displayDamage(target: Game_Battler): void;
  displayMiss(target: Game_Battler): void;
  displayEvasion(target: Game_Battler): void;
  displayHpDamage(target: Game_Battler): void;
  displayMpDamage(target: Game_Battler): void;
  displayTpDamage(target: Game_Battler): void;
  displayAffectedStatus(target: Game_Battler): void;
  displayAutoAffectedStatus(target: Game_Battler): void;
  displayChangedStates(target: Game_Battler): void;
  displayAddedStates(target: Game_Battler): void;
  displayRemovedStates(target: Game_Battler): void;
  displayChangedBuffs(target: Game_Battler): void;
  displayBuffs(target: Game_Battler,buffs: number[], fmt: string): void;
  makeHpDamageText(target: Game_Battler): void;
  makeMpDamageText(target: Game_Battler): void;
  makeTpDamageText(target:Game_Battler): void;
}