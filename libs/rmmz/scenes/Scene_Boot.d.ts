


declare class Scene_Boot extends Scene_Base {

    protected _databaseLoaded: boolean;

    constructor();

    public initialize(): void;

    override create(): void;

    override isReady(): boolean;

    public onDatabaseLoaded(): void;

    public setEncryptionInfo(): void;

    public loadSystemImages(): void;

    public loadPlayerData(): void;

    public loadGameFonts(): void;

    public isPlayerDataLoaded(): void;

    override start(): void;

    public startNormalGame(): void;

    public resizeScreen(): void;

    public adjustBoxSize(): void;

    public adjustWindow(): void;

    public updateDocumentTitle(): void;

    public checkPlayerLocation(): void;
}

