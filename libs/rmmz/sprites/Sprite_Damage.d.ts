
declare class Sprite_Damage extends Sprite {

    protected _duration: number;
    protected _flashColor: [number,number,number,number];
    protected _flashDuration: number;
    protected _colorType: number;

    constructor();
 
    public setup(target: Game_Battler): void;
    public setupCriticalEffect(): void;

    public fontFace(): string;
    public fontSize(): number;

    public damageColor(): string;

    public outlineColor(): string;
    public outlineWidth(): number;

    public createMiss(): void;

    public createDigits(value: number): void;

    public createChildSprite(width: number, height: number): Sprite;
    public createBitmap(width: number, height: number): Bitmap;

    public update(): void;

    public updateChild(sprite: Sprite): void;

    public updateFlash(): void;
    public updateOpacity(): void;

    public isPlaying(): boolean;

}
