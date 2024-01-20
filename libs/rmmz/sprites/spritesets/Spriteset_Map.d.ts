


declare class Spriteset_Map extends Spriteset_Base {

  protected _balloonSprites: Sprite_Balloon[];
  protected _characterSprites: Sprite_Character[];
  protected _parallax: TilingSprite;
  protected _tileset: DataTileset[];
  protected _shadowSprite: Sprite;
  protected _destinationSprite: Sprite_Destination;
  protected _weather: Weather;
  protected _tilemap: Tilemap;

  constructor();
  override initialize(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  override loadSystemImages(): void;
  override createLowerLayer(): void;
  override update(): void;
  hideCharacters(): void;
  createParallax(): void;
  createTilemap(): void;
  loadTileset(): void;
  createCharacters(): void;
  createShadow(): void;
  createDestination(): void;
  createWeather(): void;
  updateTileset(): void;
  updateParallax(): void;
  updateTilemap(): void;
  updateShadow(): void;
  updateWeather(): void;
  updateBalloons(): void
  processBalloonRequests(): void;
  createBalloon(request: {target: Game_CharacterBase[],balloonId: number}): void;
  removeBalloon(sprite: Sprite_Balloon): void;
  removeAllBalloons(): void;
  override findTargetSprite(target: Sprite_Character): void;
  override animationBaseDelay(): number;
}