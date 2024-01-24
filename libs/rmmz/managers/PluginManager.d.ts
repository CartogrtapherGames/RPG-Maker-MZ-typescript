type PluginParameters = Record<string, string>;

type PluginsStruct = {
  name: string;
  status: boolean;
  description: string;
  parameters: PluginParameters;
}

type PluginCommand = (args: PluginParameters) => void;

type PluginCommandEntry = {
  plugin: PluginCommand
}

declare class PluginManager {

  protected static _scripts: string[];
  protected static _parameters: PluginParameters[];
  protected static _command: PluginCommandEntry[];

  static setup(plugins: PluginsStruct[]): void;

  static parameters(name: string): PluginParameters;
  static setParameters(name: string, parameters: string): void;

  static loadScript(filename: string): void;
  static onError(e: Event): void;

  static makeUrl(filename: string): string;

  static checkErrors(): void;
  static throwLoadError(url: string): void;

  static registerCommand(pluginName: string, commandName: string, func: PluginCommand): void;
  static callCommand(self: unknown, pluginName: string, commandName: string, args: PluginParameters): void;

}