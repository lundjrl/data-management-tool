type LoggingTypes = 'log' | 'error' | 'table' | 'warn';
type FN = (type: LoggingTypes, msg: string) => void;
export declare const log: FN;
export {};
