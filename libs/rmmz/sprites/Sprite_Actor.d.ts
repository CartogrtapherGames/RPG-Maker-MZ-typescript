

declare class Sprite_Actor extends Sprite_Battler{
  static readonly MOTIONS: {
    walk: { index: 0, loop: true },
    wait: { index: 1, loop: true },
    chant: { index: 2, loop: true },
    guard: { index: 3, loop: true },
    damage: { index: 4, loop: false },
    evade: { index: 5, loop: false },
    thrust: { index: 6, loop: false },
    swing: { index: 7, loop: false },
    missile: { index: 8, loop: false },
    skill: { index: 9, loop: false },
    spell: { index: 10, loop: false },
    item: { index: 11, loop: false },
    escape: { index: 12, loop: true },
    victory: { index: 13, loop: true },
    dying: { index: 14, loop: true },
    abnormal: { index: 15, loop: true },
    sleep: { index: 16, loop: true },
    dead: { index: 17, loop: true }
  }

  protected _battlerName: string;
  protected _motion : {index: number,loop: boolean};
  protected _motionCount: number;
  protected _pattern: number;
  protected _mainSprite: Sprite;
  protected _shadowSprite: Sprite;
  protected _weaponSprite: Sprite_Weapon;
  protected _stateSprite: Sprite_StateOverlay;
  protected _actor: Game_Actor;

  constructor(battler: Game_Actor);
  initialize(battler: Game_Actor);
  override initmembers();
  mainSprite(): Sprite;
  createMainSprite();
  createShadowSprite();
  createWeaponSprite();
  createStateSprite();
  setBattler(battler: Game_Actor);
  moveToStartPosition();
  setActorHome(index: number);
  override update();
  updateShadow();
  updateMain();
  setupMotion();
  setupWeaponAnimation();
  startMotion(motionType: string);
  updateTargetPosition();
  shouldStepForward(): boolean;
  override updateBitmap();
  override updateFrame();
  override updateMove();
  updateMotion();
  updateMotionCount();
  motionSpeed(): number;
  refreshMotion();
  startEntryMotion();
  stepForward();
  stepBack();
  retreat();
  override onMoveEnd();
  override damageOffsetX();
  override damageOffsetY();
}