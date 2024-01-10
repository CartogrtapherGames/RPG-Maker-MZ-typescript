declare class Game_Party extends Game_Unit<Game_Actor> {
  constructor();

  public static readonly ABILITY_ENCOUNTER_HALF: Game_Party.Ability.ENCOUNTER_HALF;
  public static readonly ABILITY_ENCOUNTER_NONE: Game_Party.Ability.ENCOUNTER_NONE;
  public static readonly ABILITY_CANCEL_SURPRISE: Game_Party.Ability.CANCEL_SURPRISE;
  public static readonly ABILITY_RAISE_PREEMPTIVE: Game_Party.Ability.RAISE_PREEMPTIVE;
  public static readonly ABILITY_GOLD_DOUBLE: Game_Party.Ability.GOLD_DOUBLE;
  public static readonly ABILITY_DROP_ITEM_DOUBLE: Game_Party.Ability.DROP_ITEM_DOUBLE;

  public initAllItems(): void;

  public exists(): boolean;

  public size(): number;
  public isEmpty(): boolean;

  public allMembers(): Game_Actor[];

  public battleMembers(): Game_Actor[];
  public maxBattleMembers(): number;
  public leader(): Game_Actor;

  public removeInvalidMembers(): void;
  public reviveBattleMembers(): void;

  public items(): DataItem[];
  public weapons(): DataWeapon[];
  public armors(): DataArmor[];
  public equipItems(): DataEquipItem[];
  public allItems(): DataItemBase[];

  public itemContainer(item: DataItemBase): Record<number, number> | null;

  public setupStartingMembers(): void;

  public name(): string;

  public setupBattleTest(): void;
  public setupBattleTestMembers(): void;
  public setupBattleTestItems(): void;

  public highestLevel(): number;

  public addActor(actorId: number): void;
  public removeActor(actorId: number): void;

  public gold(): number;
  public gainGold(amount: number): void;
  public loseGold(amount: number): void;
  public maxGold(): number;

  public steps(): number;
  public increaseSteps(): void;

  public numItems(item: DataItemBase): number;
  public maxItems(item: DataItemBase): number;

  public hasMaxItems(item: DataItemBase): boolean;

  public hasItem(item: DataItemBase): boolean;
  public hasItem(item: DataEquipItem, includeEquip: boolean): boolean;

  public isAnyMemberEquipped(item: DataItem): false;
  public isAnyMemberEquipped(item: DataEquipItem): boolean;

  public gainItem(item: DataItemBase, amount: number): void;
  public gainItem(item: DataEquipItem, amount: number, includeEquip: boolean): void;

  public discardMembersEquip(item: DataEquipItem, amount: number): void;

  public loseItem(item: DataEquipItem, amount: number, includeEquip: boolean): void;
  public consumeItem(item: DataItem): void;

  public canUse(item: DataItem): boolean;
  public canInput(): boolean;

  public onPlayerWalk(): void;

  public menuActor(): Game_Actor;
  public setMenuActor(actor: Game_Actor): void;
  public makeMenuActorNext(): void;
  public makeMenuActorPrevious(): void;

  public targetActor(): Game_Actor;
  public setTargetActor(actor: Game_Actor): void;

  public lastItem(): DataItem;
  public setLastItem(item: DataItem): void;

  public swapOrder(index1: number, index2: number): void;

  public charactersForSavefile(): [string, number][];
  public facesForSavefile(): [string, number][];

  public partyAbility(abilityId: Game_Party.Ability): boolean;
  public hasEncounterHalf(): boolean;
  public hasEncounterNone(): boolean;
  public hasCancelSurprise(): boolean;
  public hasRaisePreemptive(): boolean;
  public hasGoldDouble(): boolean;
  public hasDropItemDouble(): boolean;

  public ratePreemptive(troopAgi: number): number;
  public rateSurprise(troopAgi: number): number;

  public performVictory(): void;
  public performEscape(): void;

  public removeBattleStates(): void;
  public requestMotionRefresh(): void;
  public onEscapeFailure(): void;

}
