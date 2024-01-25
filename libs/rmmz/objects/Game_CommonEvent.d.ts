declare class Game_CommonEvent {
  protected _commonEventId: number;
  protected _interpreter: Game_Interpreter | null;

  constructor(commonEventId: number);
  initialize(commonEventId: number): void;
  event(): any;
  list(): any[];
  refresh(): void;
  isActive(): boolean;
  update(): void;
}