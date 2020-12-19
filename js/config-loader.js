"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const stripJSONComments = require("strip-json-comments");
const configs = [
    ".mvwc-config",
    ".mvwc-config.js",
    ".mvwc-config.json",
    "package.json",
];
const getContent = (config, directory) => {
    if (!config) {
        return;
    }
    const configPath = path.resolve(directory, config);
    const content = loadFromFile(configPath);
    config = path.basename(config);
    return content && config === "package.json" ? content.mvwc : content;
};
const load = (config, cwd) => {
    let content;
    const directory = cwd || process.cwd();
    if (config) {
        return getContent(config, directory);
    }
    const options = {
        cwd: directory,
        nocase: true,
    };
    content = getContent(findup(configs, options, (configPath) => {
        if (path.basename(configPath) === "package.json") {
            return Boolean(getContent(configPath));
        }
        return true;
    }), null);
    if (content) {
        return content;
    }
    return null;
};
exports.load = load;
const loadFromFile = (configPath) => {
    let content;
    let ext;
    if (fs.existsSync(configPath)) {
        ext = path.extname(configPath);
        if (ext === ".js") {
            content = require(configPath);
        }
        else {
            content = JSON.parse(stripJSONComments(fs.readFileSync(configPath, "utf8")));
        }
    }
    return content;
};
const findup = (patterns, options, fn) => {
    let lastPath;
    let file;
    options = Object.create(options);
    options.cwd = path.resolve(options.cwd);
    const filterPatterns = (pattern) => {
        const configPath = glob.sync(pattern, options)[0];
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
//# sourceMappingURL=config-loader.js.map