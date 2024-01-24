declare class Game_Follower extends Game_Character {
  constructor(memberIndex: number);

  protected _memberIndex: number;

  refresh(): void;
  actor(): Game_Actor;
  isVisible(): boolean;
  isGathered(): boolean;
  update(): void;
  chaseCharacter(character: Game_Character): void;
}