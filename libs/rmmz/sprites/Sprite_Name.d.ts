

declare class Sprite_Name extends Sprite {

  protected _battler: Game_Battler;
  protected _name: string;
  protected _textColor: string;

  constructor();
  initialize();
  initMembers();
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean });
  createBitmap();
  bitmapWidth(): number;
  bitmapHeight(): number;
  fontFace(): string;
  fontSize(): number;
  setup(battler:Game_Battler);
  override update();
  updateBitmap();
  name(): string;
  textColor(): string;
  outlineColor(): string;
  outlineWidth(): number;
  redraw();
  setupFont();
}