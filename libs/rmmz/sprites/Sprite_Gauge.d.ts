


declare class Sprite_Gauge extends Sprite {

  protected _battler: Game_Battler;
  protected _statusType: string;
  protected _value: number;
  protected _maxValue: number;
  protected _targetValue: number;
  protected _targetMaxValue: number;
  protected _duration: number;
  protected _flashingCount: number;

  constructor();
  initialize(): void;
  initMembers(): void;
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;
  createBitmap(): void;
  bitmapWidth(): void;
  bitmapWidth(): number;
  bitmapHeight(): number;
  textHeight(): number;
  gaugeHeight(): number;
  gaugeX(): number;
  labelY(): number;
  labelFontFace(): string;
  labelFontsSize(): number;
  valueFontSize(): number;
  setup(battler: Game_Battler,statusType: string): void;
  override update(): void;
  updateBitmap(): void;
  updateTargetValue(value: number,maxValue: number): void;
  smoothness(): number;
  updateGaugeAnimation(): void;
  updateFlashing(): void;
  flashingColor1(): number[];
  flashingColor2(): number[];
  isValid(): boolean;
  currentValue(): number;
  currentMaxValue(): number;
  label(): string;
  gaugeBackColor(): string;
  gaugeColor1(): string;
  gaugeColor2(): string;
  labelColor(): string;
  labelOutlineColor(): string;
  labelOutlineWidth(): number;
  valueColor():string;
  valueOutlineColor(): string;
  valueOutlineWidth(): string;
  redraw(): void;
  drawGauge(): void;
  drawGaugeRect(x: number,y: number, width: number,height: number): void;
  gaugeRate(): number;
  drawLabel(): void;
  measureLabelWidth(): number;
  labelOpacity(): number;
  drawValue(): void;
  setupValueFont(): void;
}