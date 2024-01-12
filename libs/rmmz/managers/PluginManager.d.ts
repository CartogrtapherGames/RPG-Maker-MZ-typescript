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

  protected _scripts: string[];
  protected _parameters: PluginParameters[];
  protected _command: PluginCommandEntry[];

  setup(plugins: PluginsStruct[]): void;

  parameters(name: string): PluginParameters;
  setParameters(name: string, parameters: string): void;

  loadScript(filename: string): void;
  onError(e: Event): void;

  makeUrl(filename: string): string;

  checkErrors(): void;
  throwLoadError(url: string): void;

  registerCommand(pluginName: string, commandName: string, func: PluginCommand): void;
  callCommand(self: unknown, pluginName: string, commandName: string, args: PluginParameters): void;

}