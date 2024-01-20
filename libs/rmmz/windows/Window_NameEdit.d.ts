
declare class Window_NameEdit extends Window_StatusBase {


  protected _actor: Game_Actor;
  protected _maxLength: number;
  protected _name: string;
  protected _index: number;
  protected _defaultName: number;

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;
  setup(actor: Game_Actor,maxLength: number): void;

  // @ts-ignore
  // it shouldn't cause an error it must be because of the window dom lib
  name(): string;
  restoreDefault():number;
  add(ch: string): boolean;
  back(): boolean;
  faceWidth(): number;
  charWidth(): number;
  left(): number;
  override itemRect(index: number): Rectangle;
  underlineRect(index: number): Rectangle;
  underlineColor(): string;
  drawUnderline(index: number): void;
  drawChar(index: number): void;
  override refresh(): void;
  drawItem(index: number, ...args: any[]): void;
}