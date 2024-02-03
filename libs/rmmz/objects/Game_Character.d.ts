// __FIX__Replace MoveCommand with Game_Interpreter's Event Command
declare interface MoveCommand {
  code: number
  parameters: number[]
}

declare interface MoveRoute {
  list: MoveCommand[]
  repeat: boolean
  skippable: boolean
  wait: boolean
}

declare class Game_Character extends Game_CharacterBase {
  protected static ROUTE_END: number;
  protected static ROUTE_MOVE_DOWN: number;
  protected static ROUTE_MOVE_LEFT: number;
  protected static ROUTE_MOVE_RIGHT: number;
  protected static ROUTE_MOVE_UP: number;
  protected static ROUTE_MOVE_LOWER_L: number;
  protected static ROUTE_MOVE_LOWER_R: number;
  protected static ROUTE_MOVE_UPPER_L: number;
  protected static ROUTE_MOVE_UPPER_R: number;
  protected static ROUTE_MOVE_RANDOM: number;
  protected static ROUTE_MOVE_TOWARD: number;
  protected static ROUTE_MOVE_AWAY: number;
  protected static ROUTE_MOVE_FORWARD: number;
  protected static ROUTE_MOVE_BACKWARD: number;
  protected static ROUTE_JUMP: number;
  protected static ROUTE_WAIT: number;
  protected static ROUTE_TURN_DOWN: number;
  protected static ROUTE_TURN_LEFT: number;
  protected static ROUTE_TURN_RIGHT: number;
  protected static ROUTE_TURN_UP: number;
  protected static ROUTE_TURN_90D_R: number;
  protected static ROUTE_TURN_90D_L : number;
  protected static ROUTE_TURN_180D : number;
  protected static ROUTE_TURN_90D_R_L : number;
  protected static ROUTE_TURN_RANDOM : number;
  protected static ROUTE_TURN_TOWARD : number;
  protected static ROUTE_TURN_AWAY : number;
  protected static ROUTE_SWITCH_ON : number;
  protected static ROUTE_SWITCH_OFF : number;
  protected static ROUTE_CHANGE_SPEED : number;
  protected static ROUTE_CHANGE_FREQ : number;
  protected static ROUTE_WALK_ANIME_ON : number;
  protected static ROUTE_WALK_ANIME_OFF : number;
  protected static ROUTE_STEP_ANIME_ON : number;
  protected static ROUTE_STEP_ANIME_OFF : number;
  protected static ROUTE_DIR_FIX_ON : number;
  protected static ROUTE_DIR_FIX_OFF : number;
  protected static ROUTE_THROUGH_ON : number;
  protected static ROUTE_THROUGH_OFF : number;
  protected static ROUTE_TRANSPARENT_ON : number;
  protected static ROUTE_TRANSPARENT_OFF : number;
  protected static ROUTE_CHANGE_IMAGE : number;
  protected static ROUTE_CHANGE_OPACITY : number;
  protected static ROUTE_CHANGE_BLEND_MODE : number;
  protected static ROUTE_PLAY_SE : number;
  protected static ROUTE_SCRIPT : number;

  initialize(): void;
  initMembers(): void;

  memorizeMoveRoute(): void;
  restoreMoveRoute(): void;
  isMoveRouteForcing(): boolean;
  setMoveRoute(moveRoute: MoveRoute): void;
  forceMoveRoute(moveRoute: MoveRoute): void;

  updateStop(): void;
  updateRoutineMove(): void;

  processMoveCommand(command: MoveCommand): void;

  deltaXFrom(x: number): number;
  deltaYFrom(y: number): number;
  moveRandom(): void;
  moveTowardCharacter(character: Game_Character): void;
  moveAwayFromCharacter(character: Game_Character): void;
  turnTowardCharacter(character: Game_Character): void;
  turnAwayFromCharacter(character: Game_Character): void;
  turnTowardPlayer(): void;
  turnAwayFromPlayer(): void;

  moveTowardPlayer(): void;
  moveAwayFromPlayer(): void;
  moveForward(): void;
  moveBackward(): void;

  processRouteEnd(): void;
  advaancedMoveRouteIndex(): void;
  turnRight90(): void;
  turnLeft90(): void;
  turn180(): void;
  turnRightOrLeft90(): void;
  turnRandom(): void;
  swap(): void;
  findDirectionTo(goalX: number, goalY: number): number;
  searchList(): number;

}
