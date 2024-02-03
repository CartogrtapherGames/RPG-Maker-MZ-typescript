declare class Game_Actors {
  constructor();

  protected _data : Game_Actor[];

  initialize(): void;
  actor(actorId: number): Game_Actor;
}
