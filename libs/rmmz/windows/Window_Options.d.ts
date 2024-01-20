

declare class Window_Options extends Window_Command {


  constructor(rect: Rectangle);
  override initialize(rect:Rectangle): void;
  override makeCommandList(): void;
  addGeneralOptions(): void;
  addVolumeOptions(): void;
  override drawItem(index: number): void;
  statusWidth(): number;
  statusText(index: number): string;
  isVolumeSymbol(symbol: string): boolean;
  booleanStatusText(value: boolean):  string;
  volumeStatusText(value: number): string;
  override processOk(): void;
  override cursorRight(): void;
  override cursorLeft(): void;
  changeVolume(symbol: string,forward: boolean,wrap: boolean): void;
  volumeOffset(): number;
  changeValue(symbol: string,value: any): void;
  getConfigValue(symbol: string): any;
  setConfigValue(symbol: string,volume: number): void;
}