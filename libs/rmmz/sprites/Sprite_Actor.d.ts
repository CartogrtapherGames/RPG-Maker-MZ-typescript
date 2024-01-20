

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
  initialize(battler: Game_Actor): void;
  override initMembers(): void;
  mainSprite(): Sprite;
  createMainSprite(): void;
  createShadowSprite(): void;
  createWeaponSprite(): void;
  createStateSprite(): void;
  setBattler(battler: Game_Actor): void;
  moveToStartPosition(): void;
  setActorHome(index: number): void;
  override update(): void;
  updateShadow(): void;
  updateMain(): void;
  setupMotion(): void;
  setupWeaponAnimation(): void;
  startMotion(motionType: string): void;
  updateTargetPosition(): void;
  shouldStepForward(): boolean;
  override updateBitmap(): void;
  override updateFrame(): void;
  override updateMove(): void;
  updateMotion(): void;
  updateMotionCount(): void;
  motionSpeed(): number;
  refreshMotion(): void;
  startEntryMotion(): void;
  stepForward(): void;
  stepBack(): void;
  retreat(): void;
  override onMoveEnd(): void;
  override damageOffsetX(): number;
  override damageOffsetY(): number;
}