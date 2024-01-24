declare class Game_Followers {
  constructor();

  protected _visiible: boolean;
  protected _gathering: boolean;
  protected _data: Game_Follower[];

  setup(): void;
  initialize(): void;
  isVisible(): boolean;
  show(): void;
  hide(): void;
  data(): Game_Follower[];
  reverseData(): Game_Follower[];
  follower(index: number): Game_Follower;
  refresh(): void;
  update(): void;
  updateMove(): void;
  jumpAll(): void;
  synchronize(x: number, y: number, direction: number): void;
  gather(): void;
  areGathering(): boolean;
  visibleFollowers(): Game_Follower[];
  areMoving(): boolean;
  areGathered(): boolean;
  isSomeoneCollided(x: number, y: number): boolean;
}