export declare class Logger {
    static error(...msg: any): void;
    static success(...msg: any): void;
    static info(...msg: any): void;
    static warn(...msg: any): void;
    private static readonly logger;
}
