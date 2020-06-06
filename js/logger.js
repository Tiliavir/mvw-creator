"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static error(...msg) {
        Logger.logger.error("\x1b[31m%s\x1b[0m", ...msg);
    }
    static success(...msg) {
        Logger.logger.log("\x1b[32m%s\x1b[0m", ...msg);
    }
    static info(...msg) {
        Logger.logger.info(...msg);
    }
    static warn(...msg) {
        Logger.logger.warn("\x1b[33m%s\x1b[0m", ...msg);
    }
}
exports.Logger = Logger;
Logger.logger = console;
//# sourceMappingURL=logger.js.map