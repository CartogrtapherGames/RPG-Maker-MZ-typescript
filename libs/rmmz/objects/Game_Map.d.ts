declare class Game_Map {
  private _interpreter: Game_Interpreter;
  private _mapId: number;
  private _tilesetId: number;
  private _events: Game_Event[];
  private _commonEvents: Game_CommonEvent[];
  private _vehicles: Game_Vehicle[];
  private _displayX: number;
  private _displayY: number;
  private _nameDisplay: boolean;
  private _scrollDirection: number;
  private _scrollRest: number;
  private _scrollSpeed: number;
  private _parallaxName: string;
  private _parallaxZero: boolean;
  private _parallaxLoopX: boolean;
  private _parallaxLoopY: boolean;
  private _parallaxSx: number;
  private _parallaxSy: number;
  private _parallaxX: number;
  private _parallaxY: number;
  private _battleback1Name: string | null;
  private _battleback2Name: string | null;
  private _needsRefresh: boolean;

  constructor();

  initialize(): void;

  setup(mapId: number): void;

  isEventRunning(): boolean;

  tileWidth(): number;

  tileHeight(): number;

  bushDepth(): number;

  mapId(): number;

  tilesetId(): number;

  displayX(): number;

  displayY(): number;

  parallaxName(): string;

  battleback1Name(): string | null;

  battleback2Name(): string | null;

  requestRefresh(): void;

  isNameDisplayEnabled(): boolean;

  disableNameDisplay(): void;

  enableNameDisplay(): void;

  createVehicles(): void;

  refereshVehicles(): void;

  vehicles(): Game_Vehicle[];

  vehicle(type: number | string): Game_Vehicle | null;

  boat(): Game_Vehicle;

  ship(): Game_Vehicle;

  airship(): Game_Vehicle;

  setupEvents(): void;

  events(): Game_Event[];

  event(eventId: number): Game_Event | undefined;

  eraseEvent(eventId: number): void;

  autorunCommonEvents(): DataCommonEvent[];

  parallelCommonEvents(): DataCommonEvent[];

  setupScroll(): void;

  setupParallax(): void;

  setupBattleback(): void;

  setDisplayPos(x: number, y: number): void;

  parallaxOx(): number;

  parallaxOy(): number;

  tileset(): DataTileset;

  tilesetFlags(): number[];

  displayName(): string;

  width(): number;

  height(): number;

  data(): number[];

  isLoopHorizontal(): boolean;

  isLoopVertical(): boolean;

  isDashDisabled(): boolean;

  encounterList(): RPG.EncounterList[];

  encounterStep(): number;

  isOverworld(): boolean;

  screenTileX(): number;

  screenTileY(): number;

  adjustX(x: number): number;

  adjustY(y: number): number;

  roundX(x: number): number;

  roundY(y: number): number;

  xWithDirection(x: number, d: number): number;

  yWithDirection(y: number, d: number): number;

  roundXWithDirection(x: number, d: number): number;

  roundYWithDirection(y: number, d: number): number;

  deltaX(x1: number, x2: number): number;

  deltaY(y1: number, y2: number): number;

  distance(x1: number, y1: number, x2: number, y2: number): number;

  canvasToMapX(x: number): number;

  canvasToMapY(y: number): number;

  autoplay(): void;

  refreshIfNeeded(): void;

  refresh(): void;

  refreshTileEvents(): void;

  eventsXy(x: number, y: number): Game_Event[];

  eventsXyNt(x: number, y: number): Game_Event[];

  tileEventsXy(x: number, y: number): Game_Event[];

  eventIdXy(x: number, y: number): number;

  scrollDown(distance: number): void;

  scrollLeft(distance: number): void;

  scrollRight(distance: number): void;

  scrollUp(distance: number): void;

  isValid(x: number, y: number): boolean;

  checkPassage(x: number, y: number, bit: number): boolean;

  tileId(x: number, y: number, z: number): number;

  layeredTiles(x: number, y: number): number[];

  allTiles(x: number, y: number): number[];

  autotileType(x: number, y: number, z: number): number;

  isPassable(x: number, y: number, d: number): boolean;

  isBoatPassable(x: number, y: number): boolean;

  isShipPassable(x: number, y: number): boolean;

  isAirshipLandOk(x: number, y: number): boolean;

  checkLayeredTilesFlags(x: number, y: number, bit: number): boolean;

  isLadder(x: number, y: number): boolean;

  isBush(x: number, y: number): boolean;

  isCounter(x: number, y: number): boolean;

  isDamageFloor(x: number, y: number): boolean;

  terrainTag(x: number, y: number): number;

  regionId(x: number, y: number): number;

  startScroll(direction: number, distance: number, speed: number): void;

  isScrolling(): boolean;

  update(sceneActive: boolean): void;

  updateScroll(): void;

  scrollDistance(): number;

  doScroll(direction: number, distance: number): void;

  updateEvents(): void;

  updateVehicles(): void;

  updateParallax(): void;

  changeTileset(tilesetId: number): void;

  changeBattleback(battleback1Name: string, battleback2Name: string): void;

  changeParallax(name: string, loopX: boolean, loopY: boolean, sx: number, sy: number): void;

  updateInterpreter(): void;

  unlockEvent(eventId: number): void;

  setupStartingEvent(): boolean;

  setupTestEvent(): boolean;

  setupStartingMapEvent(): boolean;

  setupAutorunCommonEvent(): boolean;

  isAnyEventStarting(): boolean;
}
