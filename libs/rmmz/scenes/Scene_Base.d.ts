
declare abstract class Scene_Base extends Stage {

    protected _started: boolean;
    protected _active: boolean;
    protected _fadeSign: number;
    protected _fadeDuration: number;
    protected _fadeWhite: number;
    protected _fadeOpacity: number;
    protected _windowLayer: WindowLayer;
    protected _colorFilter: ColorFilter;

    constructor();

    initialize(): void;

    /**
     * the create method of the scene.
     */
     abstract create(): void;

     isActive(): boolean;

     isReady(): boolean;

     start(): void;

     update(): void;

     stop(): void;

     isStarted(): boolean;

     isBusy(): boolean;

     isFading(): boolean;

     terminate(): void;

     createWindowLayer(): void;

     addWindow(window: Window): void;

    /**
     *
     * @param {number} duration the duration
     * @param {boolean} white whether the fadein should be white or not.
     */
     startFadeIn(duration: number, white?: boolean): void;

     startFadeOut(duration: number, white?: boolean): void;

     createColorFilter(): void;

     updateColorFilter(): void;

     updateFade(): void;

     updateChildren(): void;

     popScene(): void;

     checkGameover(): void;

    public fadeOutAll(): void;

    public fadeSpeed(): number;

    public slowFadeSpeed(): number;

    public scaleSprite(): void;

    public centerSprite(sprite: Sprite): void;

    public isBottomHelpMode(): boolean;

    public isBottomButtonMode(): boolean;

    public isRightInputMode(): boolean;

     mainCommandWidth(): number;

     buttonAreaTop(): number;

     buttonAreaBottom(): number;

     buttonAreaHeight(): number;

     buttonY(): number;

     calcWindowHeight(numLines: number, selectable: boolean): number;

     requestAutosave(): void;

     isAutosaveEnabled(): boolean;

     executeAutosave(): void;

     onAutosaveSucess(): void;

     onAutosaveFailure(): void;
}


