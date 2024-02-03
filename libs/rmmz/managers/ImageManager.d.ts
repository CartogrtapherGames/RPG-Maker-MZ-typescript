/**
 * Type representing the structure of a CacheEntry
 * e.g., { 'img/url.png': Bitmap }
 */
declare type CacheEntry = {
  bitmap: Bitmap
}

declare class ImageManager {

  iconWidth: number;
  iconHeight: number;
  faceWidth: number;
  faceHeight: number;

  protected _cache: CacheEntry[]

  /**
   * The difference between _system and _cache is that _system contains essential images
   * and _cache contains images used for the current scene.
   * e.g., { 'img/system/IconSet.png': Bitmap }
   */
  protected static _system: CacheEntry[]
  protected static _emptyBitmap: Bitmap;

  static loadAnimation(filename: string): Bitmap;
  static loadBattleback1(filename: string): Bitmap;
  static loadBattleback2(filename: string): Bitmap;
  static loadEnemy(filename: string): Bitmap;
  static loadCharacter(filename: string): Bitmap;
  static loadFace(filename: string): Bitmap;
  static loadParallax(filename: string): Bitmap;
  static loadPicture(filename: string): Bitmap;
  static loadSvActor(filename: string): Bitmap;
  static loadSvEnemy(filename: string): Bitmap;
  static loadSystem(filename: string): Bitmap;
  static loadTileset(filename: string): Bitmap;
  static loadTitle1(filename: string): Bitmap;
  static loadTitle2(filename: string): Bitmap;

  static loadBitmap(folder: string, filename: string): Bitmap;
  static loadBitmapFromUrl(url: string): Bitmap;
  static clear(): void;
  static isReady(): boolean;
  static throwLoadError(bitmap: Bitmap): void;
  static isObjectCharacter(filename: string): boolean;
  static isBigCharacter(filename: string): boolean;
  static isZeroParallax(filename: string): boolean;

}
