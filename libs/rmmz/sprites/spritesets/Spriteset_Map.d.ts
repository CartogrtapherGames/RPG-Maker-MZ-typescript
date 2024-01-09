


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
  override initialize();
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean });
  override loadSystemImages();
  override createLowerLayer();
  override update();
  hideCharacters();
  createParallax();
  createTilemap();
  loadTileset();
  createCharacters();
  createShadow();
  createDestination();
  createWeather();
  updateTileset();
  updateParallax();
  updateTilemap();
  updateShadow();
  updateWeather();
  updateBalloons();
  processBalloonRequests();
  createBalloon(request: {target: Game_CharacterBase[],balloonId: number});
  removeBalloon(sprite: Sprite_Balloon);
  removeAllBalloons();
  override findTargetSprite(target: Sprite_Character);
  override animationBaseDelay();
}