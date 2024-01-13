


declare abstract class Spriteset_Base extends Sprite{

  protected _animationSprites: Sprite_Animation[] | Sprite_AnimationMV;
  protected _baseSprite: Sprite;
  protected _blackSprite: ScreenSprite;
  protected _baseColorFilter: ColorFilter;
  protected _pictureContainer: Sprite;
  protected _timerSprite: Sprite_Timer;
  protected _overallColorFilter: ColorFilter;
  protected _effectsContainer: PIXI.Container;

  constructor();
  initialize(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  abstract loadSystemImages(): void;
  createLowerLayer(): void;
  createUpperLayer(): void;
  override update(): void;
  createBaseSprite(): void;
  createBaseFilters(): void;
  createPictures(): void;
  pictureContainerRect(): Rectangle;
  createTimer(): void;
  createOverallFilters(): void;
  updateBaseFilters(): void;
  updateOverallFilters(): void;
  updatePosition(): void;
  abstract findTargetSprite(target: unknown): unknown;
  updateAnimations(): void;
  processAnimationRequests(): void;
  createAnimation(request: {target: Game_CharacterBase[],animationId: number,mirror: boolean}): void;
  createAnimationSprite(): void;
  isMVAnimation(animation:DataAnimation | DataAnimationMV): boolean;
  makeTargetSprites(targets: Game_CharacterBase[]): Sprite_Character[];
  lastAnimationSprite(): Sprite_Animation | Sprite_AnimationMV;
  isAnimationForEach(animation: DataAnimation | DataAnimationMV): boolean;
  animationBaseDelay(): number;
  animationNextDelay(): number;
  animationShouldMirror(target: Game_CharacterBase): boolean;
  removeAnimation(sprite: Sprite_Character): void;
  removeAllAnimations(): void;
  isAnimationPlaying(): void;
}