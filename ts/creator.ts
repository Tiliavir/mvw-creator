import * as fs from "fs";
import * as gulp from "gulp";
import * as gulpLoadPlugins from "gulp-load-plugins";
import { Validator, ValidatorResult } from "jsonschema";
import * as marked from "marked";
import * as moment from "moment";
import "moment/locale/de";
import { Navigation } from "mvw-navigation";
import * as path from "path";
import * as File from "vinyl";

import { ICreatorConfig } from "./creator-config";
import { CreatorConfigSchema } from "./creator-config-schema";
import { isNullOrEmpty, isNullOrUndefined } from "./util";

const logger = console; // require("gulplog");
const $: any = gulpLoadPlugins();

const loadConfiguration = (): ICreatorConfig => {
  const packageJson = require(path.join(process.cwd(), "package.json"));
  if (isNullOrEmpty(packageJson) || isNullOrEmpty(packageJson.mvwc)) {
    throw new Error("No package.json or no MVW-Creator config found!");
  }

  const validationResult: ValidatorResult = new Validator().validate(packageJson.mvwc, CreatorConfigSchema);
  if (!validationResult.valid) {
    logger.error(validationResult);
    throw {
      name: "InvalidArgument",
      message: "Invalid configuration provided!"
    };
  }

  return packageJson.mvwc;
};

const config: ICreatorConfig = loadConfiguration();
let environment = config.environments[config.environment];
if (config.environments.base) {
  environment = Object.assign({}, environment, config.environments.base);
}

let navigation: Navigation;
const getNavigation = () => {
  return navigation || (navigation = new Navigation(require(path.join(process.cwd(), config.structureJsonPath))));
};

const getScope = (file: File, isAmp: boolean = false) => {
  const filename = path.basename(file.path, path.extname(file.path));
  moment.locale("de");

  return {
    marked,
    moment,
    require,

    isAmp,
    environment,

    referencedFile: filename,
    breadcrumb: getNavigation().getBreadcrumb(filename, true)
  };
};

const build = (src: string, isAmp: boolean, dest: string) => {
  return gulp.src(src)
             .pipe($.replace(/^(\s*#+) /gm, "$1# "))
             .pipe($.rename((filepath: path.ParsedPath): void => { filepath.ext = ".html"; }))
             .pipe($.data((f: File) => getScope(f, isAmp)))
             .pipe($.data((f: File) => logger.info("  Starting " + f.relative)))
             .pipe($.pug())
             .pipe($.data((f: File) => logger.info("√ Finished " + f.relative)))
             .pipe($.flatten())
             .pipe(gulp.dest(dest));
};

const sitemap = () => {
    return gulp.src([config.destinationPath + "**/*.html", "!**/401.html", "!**/google*"], {
                  read: false
                })
               .pipe($.sitemap({
                 siteUrl: environment.baseUrl,
                 changefreq: "monthly"
               }))
               .pipe(gulp.dest(config.destinationPath));
};

const writeNavigation = (done: any) => {
  if (config.navigationPath) {
    fs.writeFileSync(path.join(config.navigationPath, "./site-overview.pug"),
                     getNavigation().writeNavigation("allplain"));
    fs.writeFileSync(path.join(config.navigationPath, "./topnavigation.pug"),
                     getNavigation().writeNavigation("top"));
    fs.writeFileSync(path.join(config.navigationPath, "./footernavigation.pug"),
                     getNavigation().writeNavigation("footer"));
  }
  done();
};

const minify = () => {
  return gulp.src(config.destinationPath + "**/*.html")
             .pipe($.htmlmin({
               sortAttributes: true,
               removeComments: true,
               collapseWhitespace: true,
               collapseInlineTagWhitespace: true,
               removeAttributeQuotes: true,
               conservativeCollapse: true,
               minifyJS: true,
               minifyCSS: true
             }))
             .pipe(gulp.dest(config.destinationPath));
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

export const dev = () => {
  writeNavigation((): any => null);
  build(config.pugPath, false, config.destinationPath);
};

export const release = () => {
  dev();
  if (config.ampPath) {
    return build(config.ampPath, true, config.destinationPath + "amp/");
  }
  sitemap();
  minify();
};
