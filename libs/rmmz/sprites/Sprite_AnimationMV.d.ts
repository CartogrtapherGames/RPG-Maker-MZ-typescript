
declare class Sprite_AnimationMV extends Sprite {

    protected _targets: Game_Battler[];
    protected _animation: DataAnimationMV;
    protected _mirror: boolean;
    protected _delay: number;
    protected _rate: number;
    protected _duration: number;
    protected _flashColor: [number,number,number,number];
    protected _flashDuration: number;
    protected _screenFlashDuration: number;
    protected _hidingDuration: number;
    protected _hue1: number;
    protected _hue2: number;
    protected _bitmap1: Bitmap;
    protected _bitmap2: Bitmap;
    protected _cellSprites: Sprite[];
    protected _screenFlashSprite: ScreenSprite;

    constructor();
    public initMembers(): void;

    public setup(
        targets: Game_Battler[],
        animation: DataAnimationMV,
        mirror: boolean,
        delay: number
    ): void;

    public setupRate(): number;

    public setupDuration(): number;

    public updateFlash(): void;
    public updateScreenFlash(): void;

    public absoluteX(): number;
    public absoluteY(): number;

    public updateHiding(): void;

    public isPlaying(): boolean;

    public loadBitmaps(): void;

    public isReady(): boolean;

    public createCellSprites(): void;
    public createScreenFlashSprite(): void;

    public updateMain(): void;
    public updatePosition(): void;

    public updateFrame(): void;

    public currentFrameIndex(): number;

    public updateAllCellSprites(frame: number[][]): void; // TODO: DataAnimationMV
    public updateCellSprite(sprite: Sprite, cell: number[]): void;

    public processTimingData(timing: unknown): void; // TODO: DataAnimationMV

    public startFlash(color: RGBA, duration: number): void;
    public startScreenFlash(color: RGBA, duration: number): void;

    public startHiding(duration: number): void;

    public onEnd(): void;
}

