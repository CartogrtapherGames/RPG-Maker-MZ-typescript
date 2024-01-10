declare class Game_Actor extends Game_Battler {

  public readonly level: number;

  constructor(actorId: number);

  public setup(actorId: number): void;

  public actorId(): number;
  public actor(): DataActor;

  public name(): string;
  public setName(name: string): void;

  public nickname(): string;
  public setNickname(name: string): void;

  public profile(): string;
  public setProfile(name: string): void;

  public characterName(): string;
  public characterIndex(): number;

  public faceName(): string;
  public faceIndex(): number;

  public battlerName(): string;

  public initImages(): void;

  public expForLevel(level: number): number;
  public initExp(): void;
  public currentExp(): number;
  public currentLevelExp(): number;
  public nextLevelExp(): number;
  public nextRequiredExp(): number;

  public maxLevel(): number;
  public isMaxLevel(): boolean;

  public initSkills(): void;
  public initEquips(): void;

  public equipSlots(): number[];

  public equips(): (DataWeapon | DataArmor)[];

  public weapons(): DataWeapon;
  public armors(): DataArmor;

  public hasWeapon(weapon: DataWeapon): boolean;
  public hasArmor(armor: DataArmor): boolean;

  public isEquipChangeOk(slotId: number): boolean;
  public changeEquip(slotId: number, item: DataEquipItem): void;
  public forceChangeEquip(slotId: number, item: DataEquipItem): void;
  public tradeItemWithParty(newItem: DataEquipItem, oldItem: DataEquipItem): boolean;

  public changeEquipById(etypeId: number, itemId: number): void;

  public isEquipped(item: DataEquipItem): boolean;
  public discardEquip(item: DataEquipItem): void;
  public releaseUnequippableItems(forcing: boolean): void;
  public clearEquipments(): void;
  public optimizeEquipments(): void;

  public bestEquipItem(slotId: number): DataEquipItem;
  public calcEquipItemPerformance(item: DataEquipItem): number;

  public isSkillWtypeOk(skill: DataSkill): boolean;
  public isWtypeEquipped(wtypeId: number): boolean;

  public isActor(): true;

  public index(): number;

  public isBattleMember(): boolean;
  public isFormationChangeOk(): boolean;

  public currentClass(): DataClass;

  public isClass(gameClass?: DataClass): boolean;

  public skillTypes(): number[];
  public skills(): DataSkill[];
  public usableSkills(): DataSkill[];

  public hasNoWeapons(): boolean;
  public bareHandsElementId(): number;

  public attackAnimationId1(): number;
  public attackAnimationId2(): number;
  public bareHandsAnimationId(): number;

  public changeExp(exp: number, show: boolean): void;
  public levelUp(): void;
  public levelDown(): void;

  public findNewSkills(lastSkills: DataSkill[]): DataSkill[];
  public displayLevelUp(newSkills: DataSkill[]): void;

  public gainExp(exp: number): void;
  public finalExpRate(): number;

  public benchMembersExpRate(): number;

  public shouldDisplayLevelUp(): boolean;

  public changeLevel(level: number, show: boolean): void;
  public learnSkill(skillId: number): void;
  public forgetSkill(skillId: number): void;

  public isLearnedSkill(skillId: number): boolean;
  public hasSkill(skillId: number): boolean;

  public changeClass(classId: number, keepExp: boolean): void;

  public setCharacterImage(characterName: string, characterIndex: number): void;
  public setFaceImage(faceName: string, faceIndex: number): void;
  public setBattlerImage(battlerName: string): void;

  public isSpriteVisible(): boolean;
  public performAttack(): void;
  public performVictory(): void;
  public performEscape(): void;

  public makeActionList(): Game_Action[];
  public makeAutoBattleActions(): void;
  public makeConfusionActions(): void;

  public onPlayerWalk(): void;

  public updateStateSteps(state: DataState): void;
  public showAddedStates(): void;
  public showRemovedStates(): void;

  public stepsForTurn(): number;

  public turnEndOnMap(): void;

  public checkFloorEffect(): void;
  public executeFloorDamage(): void;

  public basicFloorDamage(): number;
  public maxFloorDamage(): number;

  public performMapDamage(): void;
  public inputtingAction(): Game_Action;
  public selectNextCommand(): boolean;
  public selectNextCommand(): boolean;

  public lastSkill(): DataSkill;

  public lastMenuSkill(): DataSkill;
  public setLastMenuSkill(skill: DataSkill): void;

  public lastBattleSkill(): DataSkill;
  public setLastBattleSkill(skill: DataSkill): void;

  public lastCommandSymbol(): string;
  public setLastCommandSymbol(symbol: string): void;

  public testEscape(item: DataConsumable): boolean;
  public meetsUsableItemConditions(item: DataConsumable): boolean;
  public onEscapeFailure(): boolean;

}