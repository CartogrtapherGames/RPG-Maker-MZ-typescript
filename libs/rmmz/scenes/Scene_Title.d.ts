


declare class Scene_Title extends Scene_Base {

    // TODO : maybe change that?
    protected _commandWindow: Window_TitleCommand<any>
    protected _gameTitleSprite: Sprite;
    protected _backSprite1: Sprite;
    protected _backSprite2: Sprite;

    constructor();

    public initialize(): void;

    public create(): void;

    public start(): void;

    public update(): void;

    public isBusy(): boolean;

    public createBackground(): void;

    public createForeground(): void;

    public drawGameTitle(): void;

    public adjustBackground(): void;

    public createCommandWindw(): void;

    public commandWindowRect(): Rectangle;

    public commandNewGame(): void;

    public commandContinue(): void;

    public commandOptions(): void;

    public playTitleMusic(): void;
}
