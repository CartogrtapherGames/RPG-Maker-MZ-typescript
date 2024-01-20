
interface CommandStruct {
  name: string,
  symbol: string;
  enabled: boolean;
  ext: Function;
}
declare abstract class Window_Command extends Window_Selectable {

  protected _list: CommandStruct[];

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle): void;

  override maxItems(): number;
  clearCommandList(): void;
  abstract makeCommandList(): void;
  addCommand(name: string,symbol: string, enable?: boolean,ext?: boolean): void;
  commandName(index: number): string;
  commandSymbol(index: number): string;
  isCommandEnabled(index: number): boolean;
  currentData(): CommandStruct;
  override isCurrentItemEnabled(): boolean;
  currentSymbol(): string;
  currentExt(): Function;
  findSymbol(symbol: string): number;
  selectSymbol(symbol: string): void;
  findExt(ext: Function): Function;
  selecExt(ext: Function): void;
  override drawItem(index: number): void;
  itemTextAlign(): string;
  override isOkEnabled(): boolean;
  override callOkHandler(): void;
  override refresh(): void;
}