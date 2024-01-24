// @ts-ignore
// in this case we have no choice as ...ts will throw actual error.
declare class StorageManager {

  static isLocalMode(): boolean;
  static saveObject<T>(saveName: string, object: T): Promise<void>;
  static loadObject<T>(saveName: string): T;

  static objectToJson(object: unknown): Promise<string>;
  static jsonToObject<T>(json: string): Promise<T>;

  static jsonToZip(json: Pako.Data): Promise<string>
  static zipToJson(zip: Pako.Inflate): Promise<string>;

  static saveZip(saveName: string, zip: Pako.Inflate): Promise<void>;
  static loadZip(saveName: string): Pako.Inflate;

  static exists(saveName: string): boolean;
  static remove(saveName: string): Promise<void> | void;

  static saveToLocalFile(saveName: string, zip: string): Promise<void>;
  static loadFromLocalFile(saveName: string): Promise<string>;
  static localFileExists(saveName: string): boolean;
  static removeLocalFile(saveName: string): void;

  static saveToForage(saveName: string, zip: string): Promise<string>;
  static loadFromForage(saveName: string): Promise<string>;
  static forageExists(saveName: string): boolean;
  static removeForage(saveName: string): Promise<void>;

  static updateForageKeys(): Promise<number>;
  static forageKeysUpdated(): boolean;

  static fsMkdir(path: string): void;
  static fsRename(oldPath: string, newPath: string): void;
  static fsUnlink(path: string): void;
  static fsReadFile(path: string): string;
  static fsWriteFile(path: string, data: string): void;

  static fileDirectoryPath(): string;
  static filePath(saveName: string): string;

  static forageKey(saveName: string): string;
  static forageTestKey(): string;

}
