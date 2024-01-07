
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
  override initMembers();
  createStateIconSprite();
  override setBattler(battler: Game_Enemy);
  override update();
  override updateBitmap();
  loadBitmap(name: string);
  // TODO : ensure this is the proper typing?
  setHue(hue:number);
  override updateFrame();
  override updatePosition();
  updateStateSprite();
  initVisibility();
  setupEffect();
  startEffect(effectType: string);
  startAppear();
  startDisappear();
  startWhiten();
  startBlink();
  startCollapse();
  startBossCollapse();
  startInstantCollapse();
  updateEffect();
  override isEffecting(): boolean;
  revertToNormal();
  updateWhiten();
  updateBlink();
  updateAppear();
  updateDisappear();
  updateCollapse();
  updateBossCollapse();
  updateInstantCollapse();
  override damageOffsetX();
  override damageOffsetY();

}