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
  protected _system: CacheEntry[]
  protected _emptyBitmap: Bitmap;

  loadAnimation(filename: string): Bitmap;
  loadBattleback1(filename: string): Bitmap;
  loadBattleback2(filename: string): Bitmap;
  loadEnemy(filename: string): Bitmap;
  loadCharacter(filename: string): Bitmap;
  loadFace(filename: string): Bitmap;
  loadParallax(filename: string): Bitmap;
  loadPicture(filename: string): Bitmap;
  loadSvActor(filename: string): Bitmap;
  loadSvEnemy(filename: string): Bitmap;
  loadSystem(filename: string): Bitmap;
  loadTileset(filename: string): Bitmap;
  loadTitle1(filename: string): Bitmap;
  loadTitle2(filename: string): Bitmap;

  loadBitmap(folder: string, filename: string): Bitmap;
  loadBitmapFromUrl(url: string): Bitmap;
  clear(): void;
  isReady(): boolean;
  throwLoadError(bitmap: Bitmap): void;
  isObjectCharacter(filename: string): boolean;
  isBigCharacter(filename: string): boolean;
  isZeroParallax(filename: string): boolean;

}
