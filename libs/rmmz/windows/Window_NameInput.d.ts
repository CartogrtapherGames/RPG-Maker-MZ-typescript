

declare class Window_NameInput extends Window_Selectable {


  static readonly LATIN1: string [];
  static readonly LATIN2: string [];
  static readonly RUSSIA: string[];
  static readonly JAPAN1:string[];
  static readonly JAPAN2:string[];
  static readonly JAPAN3:string[];

  protected _editWindow: Window_NameEdit;
  protected _page: number;
  protected _index: number;

  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  setEditWindow(editWindow: Window_NameEdit): void;
  table(): string[];
  override maxCols(): number;
  override maxItems(): number;
  override itemWidth(): number;
  groupSpacing(): number;
  character(): string;
  isPageChange(): boolean;
  isOk(): boolean;
  override itemRect(index: number): Rectangle;
  override drawItem(index: number): void;
  updateCursor(): void;
  override isCursorMovable(): boolean;
  override cursorDown(wrap: boolean): void;
  override cursorUp(wrap: boolean): void;
  override cursorRight(wrap: boolean): void;
  override cursorLeft(wrap: boolean): void;
  override cursorPagedown(): void;
  override cursorPageup(): void;
  processCursorMove(): void;
  processHandling(): void;
  override isCancelEnabled(): boolean;
  override processCancel(): void;
  processJump(): void;
  processBack(): void;
  override processOk(): void;
  onNameAdd():void;
  onNameOk(): void;
  
}