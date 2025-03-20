declare module 'papaparse' {
  export interface ParseConfig {
    header?: boolean;
    skipEmptyLines?: boolean | 'greedy';
    dynamicTyping?: boolean;
    transformHeader?: (header: string) => string;
  }

  export interface ParseResult<T> {
    data: T[];
    errors: any[];
    meta: {
      delimiter: string;
      linebreak: string;
      aborted: boolean;
      truncated: boolean;
      cursor: number;
    };
  }

  export function parse<T>(input: string, config?: ParseConfig): ParseResult<T>;
}