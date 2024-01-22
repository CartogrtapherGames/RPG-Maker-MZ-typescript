
declare const scriptUrls: string[];
declare const effekseerWasmUrl: string;

declare class Main {
  xhrSucceeded: boolean;
  loadCount: number;
  error: Error;

  constructor();
  run(): void;
  showLoadingSpinner(): void;
  eraseLoadingSpinner(): void;
  testXhr(): void;
  hookNwjsClose(): void;
  loadMainScripts(): void;
  onScriptLoad(): void;
  onScriptError(e: Error): void;
  printError(name: string,message: string): void;
  makeErrorHtml(name: string,message: string): void;
  onWindowLoad(): void;
  onWindowError(event: ErrorEvent): void;
  isPathRandomized(): boolean;
  initEffekseerRuntime(): void;
  onEffekseerLoad(): void;
  onEffekseerError(): void;
}
declare const main: Main;

