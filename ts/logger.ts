class Logger {
  public static error(...msg: any) {
    Logger.logger.error("\x1b[31m%s\x1b[0m", ...msg);
  }

  public static success(...msg: any) {
    Logger.logger.log("\x1b[32m%s\x1b[0m", ...msg);
  }

  public static info(...msg: any) {
    Logger.logger.info(...msg);
  }

  public static warn(...msg: any) {
    Logger.logger.warn("\x1b[33m%s\x1b[0m", ...msg);
  }

  private static readonly logger: Console = console;
}
