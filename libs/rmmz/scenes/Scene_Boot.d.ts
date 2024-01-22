


declare class Scene_Boot extends Scene_Base {

    protected _databaseLoaded: boolean;

    constructor();

     initialize(): void;

    override create(): void;

    override isReady(): boolean;

     onDatabaseLoaded(): void;

     setEncryptionInfo(): void;

     loadSystemImages(): void;

     loadPlayerData(): void;

     loadGameFonts(): void;

     isPlayerDataLoaded(): void;

    override start(): void;

     startNormalGame(): void;

     resizeScreen(): void;

     adjustBoxSize(): void;

     adjustWindow(): void;

     updateDocumentTitle(): void;

     checkPlayerLocation(): void;
}

