

declare class Sprite_Character extends Sprite {

    protected _character: Game_CharacterBase;
    protected _ballonDuration: number;
    protected _tilesetId: number;
    protected _tileId: number;
    protected _upperBody: Sprite;
    protected _lowerBody: Sprite;
    protected _characterName: string;
    protected _characterIndex: number;

    constructor(character: Game_CharacterBase);
    initialize(character: Game_CharacterBase): void;
    initMembers(): void;
    setCharacter(character: Game_CharacterBase): void;
    checkCharacter(character: Game_CharacterBase): void;
    override update(): void;
    override updateVisibility(): void;
    isTile(): boolean;
    isObjectCharacter(): boolean;
    isEmptyCharacter(): boolean;
    tilesetBitmap(tileId: number): Bitmap;
    updateBitmap(): void;
    isImageChanged(): boolean;
    setTileBitmap(): void;
    setCharacterBitmap(): void;
    updateFrame(): void;
    updateTileFrame(): void;
    updateCharacterFrame(): void;
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): number
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites(): void;
    createHalfBodySprites(): void;
    updatePosition(): void;
    updateOther(): void;
}