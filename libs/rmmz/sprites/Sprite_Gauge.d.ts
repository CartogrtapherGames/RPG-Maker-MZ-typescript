


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
  initialize();
  initMembers();
  override destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean });
  createBitmap();
  bitmapWidth();
  bitmapWidth(): number;
  bitmapHeight(): number;
  textHeight(): number;
  gaugeHeight(): number;
  gaugeX(): number;
  labelY(): number;
  labelFontFace(): string;
  labelFontsSize(): number;
  valueFontSize(): number;
  setup(battler: Game_Battler,statusType: string);
  override update();
  updateBitmap();
  updateTargetValue(value: number,maxValue: number);
  smoothness(): number;
  updateGaugeAnimation();
  updateFlashing();
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
  redraw();
  drawGauge();
  drawGaugeRect(x: number,y: number, width: number,height: number);
  gaugeRate(): number;
  drawLabel();
  measureLabelWidth(): number;
  labelOpacity(): number;
  drawValue();
  setupValueFont();
}