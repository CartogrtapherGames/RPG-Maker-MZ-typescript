

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
    initialize(character: Game_CharacterBase);
    initMembers();
    setCharacter(character: Game_CharacterBase);
    checkCharacter(character: Game_CharacterBase);
    override update();
    override updateVisibility();
    isTile(): boolean;
    isObjectCharacter(): boolean;
    isEmptyCharacter(): boolean;
    tilesetBitmap(tileId: number): Bitmap;
    updateBitmap();
    isImageChanged(): boolean;
    setTileBitmap();
    setCharacterBitmap();
    updateFrame();
    updateTileFrame();
    updateCharacterFrame();
    characterBlockX(): number;
    characterBlockY(): number;
    characterPatternX(): number
    characterPatternY(): number;
    patternWidth(): number;
    patternHeight(): number;
    updateHalfBodySprites();
    createHalfBodySprites();
    updatePosition();
    updateOther();
}