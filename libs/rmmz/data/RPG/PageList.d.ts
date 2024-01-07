namespace RPG {
  export interface PageList {
    code: number;
    indent?: number | null;
    parameters?: Array<Array<number | string> | boolean | ParameterClass | number | string>;
  }
}