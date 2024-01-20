

declare class Sprite_Name extends Sprite {

  protected _battler: Game_Battler;
  protected _name: string;
  protected _textColor: string;

  constructor();
  initialize(): void;
  initMembers(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  createBitmap(): void;
  bitmapWidth(): number;
  bitmapHeight(): number;
  fontFace(): string;
  fontSize(): number;
  setup(battler:Game_Battler): void;
  override update(): void;
  updateBitmap(): void;
  name(): string;
  textColor(): string;
  outlineColor(): string;
  outlineWidth(): number;
  redraw(): void;
  setupFont(): void;
}