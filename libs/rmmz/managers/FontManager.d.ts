// Enum representing font loading states
declare enum FontLoadingState {
  Loading = 0,
  Loaded = 1
}

/**
 * Type representing the structure of font URLs
 * e.g., { family: "fonts/mplus-1m-regular.woff" }
 */
type FontUrl = {
  family: string;
};

/**
 * Type representing the structure of font loading states for each font family
 * e.g., { family: FontLoadingState.Loading }
 */
type FontState = {
  family: FontLoadingState;
};

declare class FontManager {
  protected _urls: FontUrl[];
  protected _states: FontState[];

  load(family: string, filename: string): void;
  isReady(): boolean;
  startLoading(family: string, url: string): void;
  throwLoadError(familly: string): void;
  makeUrl(filename: string): string;

}