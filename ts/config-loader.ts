import * as fs from "fs";
import * as glob from "glob";
import * as path from "path";
import * as stripJSONComments from "strip-json-comments";

const configs = [
  ".mvwc-config",
  ".mvwc-config.js",
  ".mvwc-config.json",
  "package.json",
];

const getContent = (config: string, directory?: string) => {
  if (!config) {
    return;
  }

  const configPath: string = path.resolve(directory, config);
  const content: any = loadFromFile(configPath);

  config = path.basename(config);

  return content && config === "package.json" ? content.mvwc : content;
};

export const load = (config?: string, cwd?: string) => {
  let content: string;
  const directory: string = cwd || process.cwd();

  if (config) {
    return getContent(config, directory);
  }

  const options: glob.IOptions = {
    cwd: directory,
    nocase: true,
  };

  content = getContent(
    findup(configs, options, (configPath: string) => {
      if (path.basename(configPath) === "package.json") {
        return Boolean(getContent(configPath));
      }

      return true;
    }), null,
  );

  if (content) {
    return content;
  }

  return null;
};

const loadFromFile = (configPath: string) => {
  let content;
  let ext;

  if (fs.existsSync(configPath)) {
    ext = path.extname(configPath);

    if (ext === ".js") {
      content = require(configPath);
    } else {
      content = JSON.parse(stripJSONComments(fs.readFileSync(configPath, "utf8")));
    }
  }

  return content;
};

const findup = (patterns: string[], options: glob.IOptions, fn: (p: string) => boolean) => {
  let lastPath;
  let file;

  options = Object.create(options);
  options.cwd = path.resolve(options.cwd);

  const filterPatterns = (pattern: string) => {
    const configPath: string = glob.sync(pattern, options)[0];

    if (configPath) {
      return fn(path.join(options.cwd, configPath));
    }
    return false;
  };

  do {
    file = patterns.filter(filterPatterns)[0];

    if (file) {
      return path.join(options.cwd, file);
    }

    lastPath = options.cwd;
    options.cwd = path.resolve(options.cwd, "..");
  } while (options.cwd !== lastPath);

  return null;
};
