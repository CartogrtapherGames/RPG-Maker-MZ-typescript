
interface CommandStruct {
  name: string,
  symbol: string;
  enabled: boolean;
  ext: Function;
}
declare abstract class Window_Command extends Window_Selectable {

  protected _list: CommandStruct[];

  constructor(rect: Rectangle);
  override initialize(rect: Rectangle);

  override maxItems(): number;
  clearCommandList();
  abstract makeCommandList();
  addCommand(name: string,symbol: string, enable?: boolean,ext?: boolean);
  commandName(index: number): string;
  commandSymbol(index: number): string;
  isCommandEnabled(index: number): boolean;
  currentData(): CommandStruct;
  override isCurrentItemEnabled(): boolean;
  currentSymbol(): string;
  currentExt(): Function;
  findSymbol(symbol: string): number;
  selectSymbol(symbol: string);
  findExt(ext: Function): Function;
  selecExt(ext: Function);
  override drawItem(index: number);
  itemTextAlign(): string;
  override isOkEnabled(): boolean;
  override callOkHandler();
  override refresh();
}