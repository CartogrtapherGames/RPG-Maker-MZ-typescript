declare class Game_Vehicle extends Game_Character {
  constructor(type: string);

  protected _type: string;
  protected _mapId: number;
  protected _altitude: number;
  protected _driving: boolean;
  protected _bgm: CurrentAudio

  initMembers(): void;
  isBoat(): boolean;
  isShip(): boolean;
  isAirship(): boolean;
  resetDirection(): void;
  initMoveSpeed(): void;
  vehicle(): any;
  loadSystemSettings(): void;
  refresh(): void;
  setLocation(mapId: number, x: number, y: number): void;
  pos(x: number, y: number): boolean;
  isMapPassable(x: number, y: number, d: number): boolean;
  getOn(): void;
  getOff(): void;
  setBgm(bgm: any): void;
  playBgm(): void;
  syncWithPlayer(): void;
  screenY(): number;
  shadowX(): number;
  shadowY(): number;
  canMove(): boolean;
  update(): void;
  updateAirship(): void;
  updateAirshipAltitude(): void;
  maxAltitude(): number;
  isLowest(): boolean;
  isHighest(): boolean;
  isTakeoffOk(): boolean;
  isLandOk(x: number, y: number, d: number): boolean;
}
