import "moment/locale/de";

import * as fs from "fs";
import * as gulp from "gulp";
import * as gulpLoadPlugins from "gulp-load-plugins";
import { Validator, ValidatorResult } from "jsonschema";
import * as marked from "marked";
import * as moment from "moment";
import { Navigation } from "mvw-navigation";
import { SearchIndex } from "mvw-search-index";
import { EOL } from "os";
import * as path from "path";
import * as File from "vinyl";

import { load } from "./config-loader";
import { ICreatorConfig } from "./creator-config";
import { isNullOrEmpty } from "./util";

const CreatorConfigSchema: any = require("./creator-config-schema");

const logger = console;
const $: any = gulpLoadPlugins();

const loadConfiguration = (): ICreatorConfig => {
  const configFile = load();
  if (isNullOrEmpty(configFile) || isNullOrEmpty(configFile)) {
    throw new Error("No package.json or no MVW-Creator config found!");
  }

  const validationResult: ValidatorResult = new Validator().validate(configFile, CreatorConfigSchema);
  if (!validationResult.valid) {
    logger.error(validationResult);
    throw {
      message: "Invalid configuration provided!",
      name: "InvalidArgument",
    };
  }

  return configFile;
};

const config: ICreatorConfig = loadConfiguration();
let environment = config.environments[config.environment];
if (config.environments.base) {
  environment = Object.assign({}, environment, config.environments.base);
}

let navigation: Navigation;
const getNavigation = () => {
  return navigation || (navigation = new Navigation(config.structure));
};

const getScope = (file: File, isAmp: boolean = false) => {
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

    referencedFile: filename,
  };
};

const build = (src: string, isAmp: boolean, dest: string, cb?: () => any) => {
  return gulp.src(src)
             .pipe($.replace(/^(\s*#+) /gm, "$1# "))
             .pipe($.rename((filepath: path.ParsedPath): void => { filepath.ext = ".html"; }))
             .pipe($.data((f: File) => getScope(f, isAmp)))
             .pipe($.data((f: File) => logger.info("  Starting " + f.relative)))
             .pipe($.pug())
             .pipe($.data((f: File) => logger.info("√ Finished " + f.relative)))
             .pipe($.flatten())
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
    fs.writeFileSync(path.join(config.navigationPath, "./site-overview.pug"),
                     getNavigation().writeNavigation("allplain") + EOL);
    fs.writeFileSync(path.join(config.navigationPath, "./topnavigation.pug"),
                     getNavigation().writeNavigation("top") + EOL);
    fs.writeFileSync(path.join(config.navigationPath, "./footernavigation.pug"),
                     getNavigation().writeNavigation("footer") + EOL);
  }
};

const minify = (cb: () => any) => {
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

  SearchIndex.createFromGlob(glob,
                             selector,
                             (index) => fs.writeFileSync(dest, JSON.stringify(index)));
};

export const lintPug = () => {
  logger.info("Starting Pug Lint");

  const PugLint = require("pug-lint");
  const ConfigFile = require("pug-lint/lib/config-file");
  const linter = new PugLint();

  linter.configure(ConfigFile.load());

  return gulp.src(config.pugLintPath)
              .pipe($.data((f: File) => {
                for (const error of linter.checkPath(f.path)) {
                  logger.warn(`${error.msg}: ${error.filename} ${error.line}:${error.column || 0}`);
                }
              }));
};

export const compile = () => {
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
      } else {
        finalization();
      }
    }
  });
};
