

declare class Weather extends PIXI.Container {

    public origin: Point;
    public power: number;
    public type: string;

    constructor();

    public update(): void;
    public destroy(): void;
}
