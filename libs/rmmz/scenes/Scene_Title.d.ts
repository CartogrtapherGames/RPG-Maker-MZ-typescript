


declare class Scene_Title extends Scene_Base {
    protected _commandWindow: Window_TitleCommand;
    protected _gameTitleSprite: Sprite;
    protected _backSprite1: Sprite;
    protected _backSprite2: Sprite;

    constructor();

     initialize(): void;

     create(): void;

     start(): void;

     update(): void;

     isBusy(): boolean;

     createBackground(): void;

     createForeground(): void;

     drawGameTitle(): void;

     adjustBackground(): void;

     createCommandWindow(): void;

     commandWindowRect(): Rectangle;

     commandNewGame(): void;

     commandContinue(): void;

     commandOptions(): void;

     playTitleMusic(): void;
}
