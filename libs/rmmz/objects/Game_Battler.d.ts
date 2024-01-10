
type EffectType =
    'appear' | 'disappear' | 'whiten' | 'blink' | 'collapse' | 'bossCollapse' | 'instantCollapse';

type MotionType =
    'walk' | 'wait' | 'chant' | 'guard' | 'damage' | 'evade' | 'thrust' | 'swing' | 'missile' | 'skill' | 'spell'
    | 'item' | 'escape' | 'victory' | 'dying' | 'abnormal' | 'sleep' | 'dead';

type ActionState = "undecided" | "inputting" | "waiting" | "acting";

declare abstract class Game_Battler extends Game_BattlerBase {

  constructor();
  public clearDamagePopup(): void;
  public clearWeaponAnimation(): void;
  public clearEffect(): void;
  public clearMotion(): void;

  public requestEffect(effectType: EffectType): void;
  public requestMotion(motionType: MotionType): void;

  public requestMotionRefresh(): void;

  public select(): void;
  public deselect(): void;

  public isDamagePopupRequested(): boolean;
  public isEffectRequested(): boolean;
  public isMotionRequested(): boolean;
  public isWeaponAnimationRequested(): boolean;
  public isMotionRefreshRequested(): boolean;
  public isSelected(): boolean;

  public effectType(): EffectType;
  public motionType(): MotionType;

  public weaponImageId(): number;

  public startDamagePopup(): void;
  public shouldPopupDamage(): boolean;

  public startWeaponAnimation(weaponImageId: number): void;

  public action(index: number): Game_Action;
  public setAction(index: number, action: Game_Action): void;
  public numActions(): number;
  public clearActions(): void;

  public result()/*: Game_ActionResult */; // FIXME
  public clearResult(): void;

  public clearResult(): void;

  public clearTpbChargeTime(): void;
  public applyTpbPenalty(): void;

  public initTpbChargeTime(advantageous: boolean): void;

  public tbpChargeTime(): number;

  public startTpbCasting(): void;
  public startTpbAction(): void;

  public isTpbCharged(): boolean;
  public isTpbReady(): boolean;
  public isTpbTimeout(): boolean;

  public updateTpb(): void;
  public updateTpbChargeTime(): void;
  public updateTpbCastTime(): void;
  public updateTpbAutoBattle(): void;
  public updateTpbIdleTime(): void;

  public tpbAcceleration(): number;
  public tpbRelativeSpeed(): number;
  public tpbSpeed(): number;
  public tpbBaseSpeed(): number;
  public tpbRequiredCastTime(): number;

  public onTpbCharged(): void;
  public shouldDelayTpbCharge(): boolean;
  public finishTpbCharge(): void;
  public isTpbTurnEnd(): boolean;

  public initTpbTurn(): void;
  public startTpbTurn(): void;
  public makeTpbActions(): void;
  public onTpbTimeout(): void;

  public turnCount(): number;

  public canInput(): boolean;

  public refresh(): void;

  public addState(stateId: number): void;
  public isStateAddable(stateId: number): boolean;
  public isStateRestrict(stateId: number): boolean;

  public onRestrict(): void;

  public removeState(stateId: number): void;

  public escape(): void;

  public addBuff(paramId: Params, turns: number): void;
  public addDebuff(paramId: Params, turns: number): void;

  public removeBuff(paramId: Params): void;
  public removeBattleStates(): void;
  public removeAllBuffs(): void;
  public removeStatesAuto(timing: number): void;
  public removeBuffsAuto(): void;
  public removeStatesByDamage(): void;

  public makeActionTimes(): number;
  public makeActions(): void;

  public speed(): number;
  public makeSpeed(): void;

  public currentAction(): Game_Action;
  public removeCurrentAction(): void;

  public setLastTarget(target: Game_Battler): void;

  public forceAction(skillId: number, targetIndex: number): void;
  public useItem(item: DataConsumable): void;

  public consumeItem(item: DataItem): void;
  public gainHp(value: number): void;
  public gainMp(value: number): void;
  public gainTp(value: number): void;
  public gainSilentTp(value: number): void;
  public initTp(): void;
  public clearTp(): void;
  public chargeTpByDamage(damageRate: number): void;

  public regenerateHp(): void;
  public maxSlipDamage(): number;
  public regenerateMp(): void;
  public regenerateTp(): void;

  public regenerateAll(): void;

  public onBattleStart(advantageous: boolean): void;
  public onAllActionsEnd(): void;
  public onTurnEnd(): void;
  public onBattleEnd(): void;
  public onDamage(value: number): void;

  public setActionState(actionState: ActionState): void;

  public isUndecided(): boolean;
  public isInputting(): boolean;
  public isWaiting(): boolean;
  public isActing(): boolean;

  public isChanting(): boolean;
  public isGuardWaiting(): boolean;

  public performActionStart(action: Game_Action): void;
  public performAction(action: Game_Action): void;
  public performActionEnd(): void;
  public performDamage(): void;
  public performMiss(): void;
  public performRecovery(): void;
  public performEvasion(): void;
  public performMagicEvasion(): void;
  public performCounter(): void;
  public performReflection(): void;
  public performSubstitute(target: Game_Battler): void;
  public performCollapse(): void;

  abstract name(): string;
  abstract index(): number;

  public abstract isSpriteVisible(): boolean;

  public abstract friendsUnit(): Game_Unit;
  public abstract opponentsUnit(): Game_Unit;

  public abstract isBattleMember(): boolean;

  public abstract battlerName(): string;

  public battlerHue(): number;
  public originalName(): string;
  public isLetterEmpty(): boolean;
  public setLetter(letter: string): void;
  public setPlural(plural: boolean): void;

  public performActionStart(action: Game_Action): void;
  public performAction(action: Game_Action): void;
  public performActionEnd(): void;
  public performDamage(): void;
  public performCollapse(): void;

  public transform(target: Game_Battler): void;

  public meetsCondition(paramId: number): boolean;
  public meetsTurnCondition(paramId1: number, paramId2: number): boolean;
  public meetsHpCondition(paramId: number, value: number): boolean;
  public meetsMpCondition(paramId: number, value: number): boolean;
  public meetsStateCondition(paramId: number): boolean;
  public meetsPartyLevelCondition(value: number): boolean;
  public meetsSwitchCondition(paramId: number): boolean;

  public isActionValid(action: Game_Action): boolean;
  public selectActions(actionList: Game_Action[], ratingZero: number): void;
  public selectAllActions(actionList: Game_Action[]): void;
  public makeActions(): void;
}
