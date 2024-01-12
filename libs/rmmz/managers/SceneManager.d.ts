declare type SceneConstructor = new () => Stage;

declare class SceneManager {

  protected _scene: SceneConstructor;
  protected _nextScene: SceneConstructor;
  protected _stack: SceneConstructor[];
  protected _exiting: boolean;
  protected _previousScene: SceneConstructor;
  protected _previousClass: SceneConstructor;
  protected _backgroundBitmap: Bitmap;
  protected _smoothDeltaTime: number;
  protected _elapsedTime: number

  run(sceneClass: SceneConstructor): void;
  initialize(): void;
  checkBrowser(): void;
  checkPluginErrors(): void;
  initGraphics(): void;
  initAudio(): void;
  initVideo(): void;
  initInput(): void;
  setupEventHandlers(): void;

  update(): void;
  determineRepeatNumber(deltaTime: number): number;
  terminate(): void;
  onError(event: ErrorEvent): void;
  onReject(event: PromiseRejectionEvent): void;
  onUnload(): void;
  onKeyDown(event: KeyboardEvent): void;
  reloadGame(): void;
  showDevTools(): void;
  catchException(e: Error): void;
  catchNormalError(e: Error): void;
  catchLoadError(e: ['LoadError', string, () => void]): void;
  catchUnknownError(e: unknown): void;
  updateMain(): void;
  updateInputData(): void;
  updateEffekseer(): void;
  changeScene(): void;
  updateScene(): void;
  isGameActive(): boolean;
  onSceneTerminate(): void;
  onSceneCreate(): void;
  onBeforeSceneStart(): void;
  onSceneStart(): void;
  isSceneChanging(): boolean;
  isCurrenSceneBusy(): boolean;
  isNextScene(sceneClass: SceneConstructor): boolean;
  isPreviousScene(sceneClass: SceneConstructor): boolean;
  goto(sceneClass: SceneConstructor): void;
  push(sceneClass: SceneConstructor): void;
  pop(): void;
  exit(): void;
  clearStack(): void;
  stop(): void;
  prepareNextScene(): void;
  snap(): void;
  snapForBackground(): void;
  backgroundBitmap(): Bitmap;
  resume(): void;

}
