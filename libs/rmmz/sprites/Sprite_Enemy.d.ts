
declare class Sprite_Enemy extends Sprite_Battler{

  protected _enemy: Game_Enemy;
  protected _appeared: boolean;
  protected _battlerName: string;
  protected _battlerHue: number;
  protected _effectType: string;
  protected _effectDuration: number;
  protected _shake: number;
  protected _stateIconSprite: Sprite_StateIcon;

  constructor(battler: Game_Enemy);
  override initMembers(): void;
  createStateIconSprite(): void;
  override setBattler(battler: Game_Enemy): void;
  override update(): void;
  override updateBitmap(): void;
  loadBitmap(name: string): void;
  // TODO : ensure this is the proper typing?
  setHue(hue:number): void;
  override updateFrame(): void;
  override updatePosition(): void;
  updateStateSprite(): void;
  initVisibility(): void;
  setupEffect(): void;
  startEffect(effectType: string): void;
  startAppear(): void;
  startDisappear(): void;
  startWhiten(): void;
  startBlink(): void;
  startCollapse(): void;
  startBossCollapse(): void;
  startInstantCollapse(): void;
  updateEffect(): void;
  override isEffecting(): boolean;
  revertToNormal(): void;
  updateWhiten(): void;
  updateBlink(): void;
  updateAppear(): void;
  updateDisappear(): void;
  updateCollapse(): void;
  updateBossCollapse(): void;
  updateInstantCollapse(): void;
  override damageOffsetX(): number;
  override damageOffsetY(): number;

}