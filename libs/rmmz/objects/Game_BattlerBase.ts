enum Traits {
  ELEMENT_RATE = 11,
  DEBUFF_RATE = 12,
  STATE_RATE = 13,
  STATE_RESIST = 14,
  PARAM = 21,
  XPARAM = 22,
  SPARAM = 23,
  ATTACK_ELEMENT = 31,
  ATTACK_STATE = 32,
  ATTACK_SPEED = 33,
  ATTACK_TIMES = 34,
  ATTACK_SKILL = 35,
  STYPE_ADD = 41,
  STYPE_SEAL = 42,
  SKILL_ADD = 43,
  SKILL_SEAL = 44,
  EQUIP_WTYPE = 51,
  EQUIP_ATYPE = 52,
  EQUIP_LOCK = 53,
  EQUIP_SEAL = 54,
  SLOT_TYPE = 55,
  ACTION_PLUS = 61,
  SPECIAL_FLAG = 62,
  COLLAPSE_TYPE = 63,
  PARTY_ABILITY = 64
}

enum FlagIds {
  AUTO_BATTLE = 0,
  GUARD = 1,
  SUBSTITUTE = 2,
  PRESERVE_TP = 3
}

enum Params {
  /** Maximum Hit Points */
  MHP = 0,
  /** Maximum Magic Points */
  MMP = 1,
  /** ATtacK power */
  ATK = 2,
  /** DEFense power */
  DEF = 3,
  /** Magic ATtack power */
  MAT = 4,
  /** Magic DeFense power */
  MDF = 5,
  /** AGIlity */
  AGI = 6,
  /** LUcK */
  LUK = 7
}

enum ExtraParams {
  /** HIT rate */
  HIT = 0,
  /** EVAsion rate */
  EVA = 1,
  /** CRItical rate */
  CRI = 2,
  /** Critical EVasion rate */
  CEV = 3,
  /** Magic EVasion rate */
  MEV = 4,
  /** Magic ReFlection rate */
  MRF = 5,
  /** CouNTer attack rate */
  CNT = 6,
  /** Hp ReGeneration rate */
  HRG = 7,
  /** Mp ReGeneration rate */
  MRG = 8,
  /** Tp ReGeneration rate */
  TRG = 9
}

enum SpecialParams {
  /** TarGet Rate */
  TGR = 0,
  /** GuaRD effect rate */
  GRD = 1,
  /** RECovery effect rate */
  REC = 2,
  /** PHArmacology */
  PHA = 3,
  /** Mp Cost Rate */
  MCR = 4,
  /** Tp Charge Rate */
  TCR = 5,
  /** Physical Damage Rate */
  PDR = 6,
  /** Magic Damage Rate */
  MDR = 7,
  /** Floor Damage Rate */
  FDR = 8,
  /** EXperience Rate */
  EXR = 9
}

enum CollapseType {
  DEFAULT = 0,
  BOSS = 1,
  INSTANT = 2
}

declare abstract class Game_BattlerBase {

  public static readonly TRAIT_ELEMENT_RATE: Traits.ELEMENT_RATE;
  public static readonly TRAIT_DEBUFF_RATE: Traits.DEBUFF_RATE;
  public static readonly TRAIT_STATE_RATE: Traits.STATE_RATE;
  public static readonly TRAIT_STATE_RESIST: Traits.STATE_RESIST;
  public static readonly TRAIT_PARAM: Traits.PARAM;
  public static readonly TRAIT_XPARAM: Traits.XPARAM;
  public static readonly TRAIT_SPARAM: Traits.SPARAM;
  public static readonly TRAIT_ATTACK_ELEMENT: Traits.ATTACK_ELEMENT;
  public static readonly TRAIT_ATTACK_STATE: Traits.ATTACK_STATE;
  public static readonly TRAIT_ATTACK_SPEED: Traits.ATTACK_SPEED;
  public static readonly TRAIT_ATTACK_TIMES: Traits.ATTACK_TIMES;
  public static readonly TRAIT_ATTACK_SKILL: Traits.ATTACK_SKILL;
  public static readonly TRAIT_STYPE_ADD: Traits.STYPE_ADD;
  public static readonly TRAIT_STYPE_SEAL: Traits.STYPE_SEAL;
  public static readonly TRAIT_SKILL_ADD: Traits.SKILL_ADD;
  public static readonly TRAIT_SKILL_SEAL: Traits.SKILL_SEAL;
  public static readonly TRAIT_EQUIP_WTYPE: Traits.EQUIP_WTYPE;
  public static readonly TRAIT_EQUIP_ATYPE: Traits.EQUIP_ATYPE;
  public static readonly TRAIT_EQUIP_LOCK: Traits.EQUIP_LOCK;
  public static readonly TRAIT_EQUIP_SEAL: Traits.EQUIP_SEAL;
  public static readonly TRAIT_SLOT_TYPE: Traits.SLOT_TYPE;
  public static readonly TRAIT_ACTION_PLUS: Traits.ACTION_PLUS;
  public static readonly TRAIT_SPECIAL_FLAG: Traits.SPECIAL_FLAG;
  public static readonly TRAIT_COLLAPSE_TYPE: Traits.COLLAPSE_TYPE;
  public static readonly TRAIT_PARTY_ABILITY: Traits.PARTY_ABILITY;

  public static readonly FLAG_ID_AUTO_BATTLE: FlagIds.AUTO_BATTLE;
  public static readonly FLAG_ID_GUARD: FlagIds.GUARD;
  public static readonly FLAG_ID_SUBSTITUTE: FlagIds.SUBSTITUTE;
  public static readonly FLAG_ID_PRESERVE_TP: FlagIds.PRESERVE_TP;

  public static readonly ICON_BUFF_START: 32;
  public static readonly ICON_DEBUFF_START: 48;

  constructor();

  public readonly hp: number;
  public readonly mp: number;
  public readonly tp: number;

  public readonly mhp: number;
  public readonly mmp: number;
  public readonly atk: number;
  public readonly def: number;
  public readonly mat: number;
  public readonly mdf: number;
  public readonly agi: number;
  public readonly luk: number;

  public readonly hit: number;
  public readonly eva: number;
  public readonly cri: number;
  public readonly cev: number;
  public readonly mev: number;
  public readonly mrf: number;
  public readonly cnt: number;
  public readonly hrg: number;
  public readonly mrg: number;
  public readonly trg: number;

  public readonly tgr: number;
  public readonly grd: number;
  public readonly rec: number;
  public readonly pha: number;
  public readonly mcr: number;
  public readonly tcr: number;
  public readonly pdr: number;
  public readonly mdr: number;
  public readonly fdr: number;
  public readonly exr: number;

  public initialize(): void;
  public initMembers(): void;

  public clearParamPlus(): void;

  public clearStates(): void;
  public eraseState(stateId: number): void;
  public isStateAffected(stateId: number): boolean;
  public isDeathStateAffected(): boolean;

  public deathStateId(): number;

  public resetStateCounts(stateId: number): void;

  public isStateExpired(stateId: number): boolean;

  public updateStateTurns(): void;

  public clearBuffs(): void;
  public eraseBuff(paramId: Params): void;
  public buffLength(): number;
  public buff(paramId: Params): number;

  public isBuffAffected(paramId: Params): boolean;
  public isDebuffAffected(paramId: Params): boolean;
  public isBuffOrDebuffAffected(paramId: Params): boolean;
  public isMaxBuffAffected(paramId: Params): boolean;
  public isMaxDebuffAffected(paramId: Params): boolean;

  public increaseBuff(paramId: Params): void;
  public decreaseBuff(paramId: Params): void;

  public overwriteBuffTurns(paramId: Params, turns: number): void;

  public isBuffExpired(paramId: Params): boolean;
  public updateBuffTurns(): void;

  public die(): void;
  public revive(): void;

  public states(): DataState[];

  public stateIcons(): number[];
  public buffIcons(): number[];

  public buffIconIndex(buffLevel: number, paramId: Params): number;

  public allIcons(): number[];

  public traitObjects(): { traits: Traits[] }[];
  public allTraits(): Traits[];

  public traits(code: Traits): Traits[];
  public traitsWithId(code: Traits, id: number): Traits[];
  public traitsPi(code: Traits, id: number): number;
  public traitsSum(code: Traits, id: number): number;
  public traitsSumAll(code: Traits): number;
  public traitsSet(code: Traits): number[];

  public paramBase(paramId: Params): number;
  public paramPlus(paramId: Params): number;
  public paramBasePlus(paramId: Params): number;

  public paramMin(paramId: Params): number;
  public paramMax(paramId: Params): number;

  public paramRate(paramId: Params): number;
  public paramBuffRate(paramId: Params): number;

  public param(paramId: Params): number;
  public xparam(paramId: ExtraParams): number;
  public sparam(paramId: SpecialParams): number;

  public elementRate(elementId: number): number;
  public debuffRate(paramId: Params): number;

  public stateRate(stateId: number): number;
  public stateResistSet(): number[];
  public isStateResist(stateId: number): boolean;

  public attackElements(): number[];
  public attackStates(): number[];
  public attackStatesRate(stateId: number): number;
  public attackSpeed(): number;
  public attackTimesAdd(): number;

  public attackSkillId(): number;
  public attackSkillTypes(): number[];
  public addedSkillTypes(): number[];
  public isSkillTypeSealed(stypeId: number): boolean;
  public addedSkills(): number[];
  public isSkillSealed(skillId: number): boolean;

  public isEquipWtypeOk(wtypeId: number): boolean;
  public isEquipAtypeOk(atypeId: number): boolean;
  public isEquipTypeLocked(etypeId: number): boolean;
  public isEquipTypeSealed(etypeId: number): boolean;

  public slotType(): number;

  public isDualWield(): boolean;

  public actionPlusSet(): number[];
  public specialFlag(flagId: FlagIds): boolean;

  public collapseType(): CollapseType;

  public partyAbility(abilityId: number): boolean;

  public isAutoBattle(): boolean;
  public isGuard(): boolean;
  public isSubstitute(): boolean;
  public isPreserveTp(): boolean;

  public addParam(paramId: Params, value: number): void;

  public setHp(hp: number): void
  public setMp(mp: number): void
  public setTp(tp: number): void

  public maxTp(): number;

  public refresh(): void;
  public recoverAll(): void;

  public hpRate(): number;
  public mpRate(): number;
  public tpRate(): number;

  public hide(): void;
  public appear(): void;
  public isHidden(): boolean;
  public isAppeared(): boolean;

  public isDead(): boolean;
  public isAlive(): boolean;
  public isDying(): boolean;
  public isRestricted(): boolean;

  public canInput(): boolean;
  public canMove(): boolean;

  public isConfused(): boolean;
  public confusionLevel(): number;

  public isActor(): this is Game_Actor;
  public isEnemy(): this is Game_Enemy;

  public sortStates(): void;

  public restriction(): number;

  public addNewState(stateId: number): void;

  public onRestrict(): void;

  public mostImportantStateText(): string;
  public stateMotionIndex(): number;
  public stateOverlayIndex(): number;

  public isSkillWtypeOk(skill: DataSkill): boolean;

  public skillMpCost(skill: DataSkill): number;
  public skillTpCost(skill: DataSkill): number;

  public canPaySkillCost(skill: DataSkill): boolean;
  public paySkillCost(skill: DataSkill): void;

  public isOccasionOk(item: DataItem): boolean;
  public meetsUsableItemConditions(item: DataConsumable): boolean;
  public meetsSkillConditions(skill: DataSkill): boolean;
  public meetsItemConditions(item: DataItem): boolean;

  public canUse(item?: DataConsumable): boolean;
  public canEquip(item?: DataEquipItem): boolean;

  public canEquipWeapon(item: DataWeapon): boolean;
  public canEquipArmor(item: DataArmor): boolean;

  public guardSkillId(): number;

  public canAttack(): boolean;
  public canGuard(): boolean;

}

