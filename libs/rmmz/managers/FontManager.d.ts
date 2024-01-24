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
  protected static _urls: FontUrl[];
  protected static _states: FontState[];

  static load(family: string, filename: string): void;
  static isReady(): boolean;
  static startLoading(family: string, url: string): void;
  static throwLoadError(familly: string): void;
  static makeUrl(filename: string): string;

}