

declare class Scene_Map extends Scene_Message {

  protected _waitCount: boolean;
  protected _encounterEffectDuration: number;
  protected _mapLoaded: boolean;
  protected _touchCount: number;
  protected _menuEnabled: boolean;
  protected _transfer: boolean;
  protected _lastMapWasNull: boolean;
  protected _menuButton: Sprite_Button;

  constructor();
  override initialize(): void;
  override create(): void;
  override isReady(): boolean;
  onMapLoaded(): void;
  onTransfer(): void;
  override start(): void;
  onTransferEnd(): void;
  shouldAutosave(): boolean;
  override update(): void;
  updateMainMultiply(): void;
  updateMain(): void;
  isPlayerActive(): boolean;
  isFastForward(): boolean;
  override stop(): void;
  override isBusy(): boolean;
  override terminate(): void;
  needsFadeIn(): boolean;
  needsSlowFadeOut(): boolean;
  updateWaitCount(): boolean;
  updateDestination(): void;
  updateMenuButton(): void;
  hideMenuButton(): void;
  updateMapNameWindow(): void;
  isMenuEnabled(): boolean;
  isMapTouchOk(): boolean;
  processMapTouch(): void;
  isAnyButtonPressed(): boolean;
  onMapTouch(): void;
  isSceneChangeOk(): boolean;
  updateScene(): void;
  createDisplayObjects(): void;
  createSpriteset(): void;
  override createAllWindows(): void;
  createMapNameWindow(): void;
  mapNameWindowRect(): Rectangle;
  createButtons(): void;
  createMenuButton(): void;
  updateTransferPlayer(): void;
  updateEncounter(): void;
  updateCallMenu(): void;
  isMenuCalled(): boolean;
  callMenu(): void;
  updateCallDebug(): void;
  isDebugCalled(): boolean;
  fadeInForTransfer(): void;
  fadeOutForTransfer(): void;
  launchBattle(): void;
  StopAudioOnBattleStart(): void;
  startEncounterEffect(): void;
  updateEncounterEffect(): void;
  snapForBattleBackground(): void;
  startFlashForEncounter(duration: number): void;
  encounterEffectSpeed(): number;
}