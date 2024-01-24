declare type SceneConstructor = new () => Stage;

declare class SceneManager {

  protected static _scene: SceneConstructor;
  protected static _nextScene: SceneConstructor;
  protected static _stack: SceneConstructor[];
  protected static _exiting: boolean;
  protected static _previousScene: SceneConstructor;
  protected static _previousClass: SceneConstructor;
  protected static _backgroundBitmap: Bitmap;
  protected static _smoothDeltaTime: number;
  protected static _elapsedTime: number

  static run(sceneClass: SceneConstructor): void;
  static initialize(): void;
  static checkBrowser(): void;
  static checkPluginErrors(): void;
  static initGraphics(): void;
  static initAudio(): void;
  static initVideo(): void;
  static initInput(): void;
  static setupEventHandlers(): void;

  static update(): void;
  static determineRepeatNumber(deltaTime: number): number;
  static terminate(): void;
  static onError(event: ErrorEvent): void;
  static onReject(event: PromiseRejectionEvent): void;
  static onUnload(): void;
  static onKeyDown(event: KeyboardEvent): void;
  static reloadGame(): void;
  static showDevTools(): void;
  static catchException(e: Error): void;
  static catchNormalError(e: Error): void;
  static catchLoadError(e: ['LoadError', string, () => void]): void;
  static catchUnknownError(e: unknown): void;
  static updateMain(): void;
  static updateInputData(): void;
  static updateEffekseer(): void;
  static changeScene(): void;
  static updateScene(): void;
  static isGameActive(): boolean;
  static onSceneTerminate(): void;
  static onSceneCreate(): void;
  static onBeforeSceneStart(): void;
  static onSceneStart(): void;
  static isSceneChanging(): boolean;
  static isCurrenSceneBusy(): boolean;
  static isNextScene(sceneClass: SceneConstructor): boolean;
  static isPreviousScene(sceneClass: SceneConstructor): boolean;
  static goto(sceneClass: SceneConstructor): void;
  static push(sceneClass: SceneConstructor): void;
  static pop(): void;
  static exit(): void;
  static clearStack(): void;
  static stop(): void;
  static prepareNextScene(): void;
  static snap(): void;
  static snapForBackground(): void;
  static backgroundBitmap(): Bitmap;
  static resume(): void;

}
