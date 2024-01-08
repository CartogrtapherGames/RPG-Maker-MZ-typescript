import {Game_Battler} from "../../lib_old";
import effekseer from "../../lib_old/external/effekseer";


declare class Sprite_Animation extends Sprite {

    protected _targets: Game_Battler[];
    protected _animation: DataAnimation;
    protected _mirror: boolean;
    protected _delay: number;
    protected _previous: Sprite_Animation | Sprite_AnimationMV;
    protected _effect: effekseer.EffekseerEffect;
    protected _handle: effekseer.EffekseerHandle;
    protected _playing: boolean;
    protected _started: boolean;
    protected _frameIndex: number;
    protected _maxTimingFrames: number;
    protected _flashColor: [number,number,number,number];
    protected _flashDuration: number;
    protected _viewportSize: number;

    constructor();

    public initMembers(): void;

    public setup(
        targets: Game_Battler[],
        animation: DataAnimation,
        mirror: boolean,
        delay: number,
        previous: Sprite_Animation | Sprite_AnimationMV
    ): void;

    public canStart(): boolean;

    public shouldWaitForPrevious(): boolean;

    public updateEffectGeometry(): void;
    public updateMain(): void;

    public processSoundTimings(): void;
    public processFlashTimings(): void;

    public checkEnd(): void;

    public updateFlash(): void;

    public isPlaying(): boolean;

    public setRotation(x: number, y: number, z: number): void;

    public setProjectionMatrix(renderer: PIXI.Renderer): void;
    public setCameraMatrix(renderer: PIXI.Renderer): void;
    public setViewport(renderer: PIXI.Renderer): void;

    public targetPosition(renderer: PIXI.Renderer): Point;
    public targetSpritePosition(sprite: Sprite): Point;

    public saveViewport(renderer: PIXI.Renderer): void;
    public resetViewport(renderer: PIXI.Renderer): void;

    public onBeforeRender(renderer: PIXI.Renderer): void;
    public onAfterRender(renderer: PIXI.Renderer): void;

}

