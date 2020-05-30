"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compile = exports.lintPug = void 0;
require("moment/locale/de");
const fs = require("fs");
const gulp = require("gulp");
const gulpLoadPlugins = require("gulp-load-plugins");
const jsonschema_1 = require("jsonschema");
const marked = require("marked");
const moment = require("moment");
const mvw_navigation_1 = require("mvw-navigation");
const mvw_search_index_1 = require("mvw-search-index");
const os_1 = require("os");
const path = require("path");
const config_loader_1 = require("./config-loader");
const logger_1 = require("./logger");
const util_1 = require("./util");
const CreatorConfigSchema = require("./creator-config-schema");
const $ = gulpLoadPlugins();
const loadConfiguration = () => {
    const configFile = config_loader_1.load();
    if (util_1.isNullOrEmpty(configFile) || util_1.isNullOrEmpty(configFile)) {
        throw new Error("No package.json or no MVW-Creator config found!");
    }
    const validationResult = new jsonschema_1.Validator().validate(configFile, CreatorConfigSchema);
    if (!validationResult.valid) {
        logger_1.Logger.error(JSON.stringify(validationResult));
        throw {
            message: "Invalid configuration provided!",
            name: "InvalidArgument",
        };
    }
    return configFile;
};
const config = loadConfiguration();
let environment = config.environments[config.environment];
if (config.environments.base) {
    environment = Object.assign({}, environment, config.environments.base);
}
let navigation;
const getNavigation = () => {
    return navigation || (navigation = new mvw_navigation_1.Navigation(config.structure));
};
const getScope = (file, isAmp = false) => {
    const filename = path.basename(file.path, path.extname(file.path));
    moment.locale("de");
    require("app-module-path").addPath(process.cwd());
    return {
        breadcrumb: getNavigation().getBreadcrumb(filename, true),
        environment,
        isAmp,
        marked,
        moment,
        path,
        require,
        reference: filename,
    };
};
const build = (src, isAmp, dest, cb) => {
    return gulp.src(src)
        .pipe($.plumber((e) => logger_1.Logger.error("x ERROR: " + JSON.stringify(e))))
        .pipe($.replace(/^(\s*#+) /gm, "$1# "))
        .pipe($.rename((filepath) => { filepath.ext = ".html"; }))
        .pipe($.data((f) => getScope(f, isAmp)))
        .pipe($.data((f) => logger_1.Logger.info("  Starting " + f.relative)))
        .pipe($.pug())
        .pipe($.data((f) => logger_1.Logger.success("√ Finished " + f.relative)))
        .pipe($.flatten())
        .pipe($.plumber.stop())
        .pipe(gulp.dest(dest))
        .on("end", cb);
};
const sitemap = () => {
    return gulp.src([config.destinationPath + "**/*.html", "!**/401.html", "!**/google*"], {
        read: false,
    })
        .pipe($.sitemap({
        changefreq: "monthly",
        siteUrl: environment.baseUrl,
    }))
        .pipe(gulp.dest(config.destinationPath));
};
const writeNavigation = () => {
    if (config.navigationPath) {
        fs.writeFileSync(path.join(config.navigationPath, "./site-overview.pug"), getNavigation().writeNavigation("allplain") + os_1.EOL);
        fs.writeFileSync(path.join(config.navigationPath, "./topnavigation.pug"), getNavigation().writeNavigation("top") + os_1.EOL);
        fs.writeFileSync(path.join(config.navigationPath, "./footernavigation.pug"), getNavigation().writeNavigation("footer") + os_1.EOL);
    }
};
const minify = (cb) => {
    return gulp.src(config.destinationPath + "**/*.html")
        .pipe($.htmlmin({
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        sortAttributes: true,
    }))
        .pipe(gulp.dest(config.destinationPath))
        .on("end", cb);
};
const createIndex = () => {
    if (!config.searchIndex) {
        return;
    }
    const glob = config.searchIndex === true || !config.searchIndex.glob
        ? config.destinationPath + "**/*.html"
        : config.searchIndex.glob;
    const selector = config.searchIndex === true || !config.searchIndex.bodySelector
        ? void 0
        : config.searchIndex.bodySelector;
    const dest = config.searchIndex === true || !config.searchIndex.destination
        ? path.join(config.destinationPath, "index.json")
        : config.searchIndex.destination;
    mvw_search_index_1.SearchIndex.createFromGlob(glob, selector, (index) => fs.writeFileSync(dest, JSON.stringify(index)));
};
exports.lintPug = () => {
    logger_1.Logger.info("Starting Pug Lint");
    const PugLint = require("pug-lint");
    const ConfigFile = require("pug-lint/lib/config-file");
    const linter = new PugLint();
    linter.configure(ConfigFile.load());
    return gulp.src(config.pugLintPath)
        .pipe($.data((f) => {
        for (const err of linter.checkPath(f.path)) {
            logger_1.Logger.warn(`${err.msg}: ${err.filename} ${err.line}:${err.column || 0}`);
        }
    }));
};
exports.compile = () => {
    writeNavigation();
    build(config.pugPath, false, config.destinationPath, () => {
        if (environment.isRelease) {
            const finalization = () => {
                minify(() => {
                    sitemap();
                    createIndex();
                });
            };
            if (config.ampPath) {
                return build(config.ampPath, true, config.destinationPath + "amp/", finalization);
            }
            else {
                finalization();
            }
        }
    });
};
//# sourceMappingURL=creator.js.map