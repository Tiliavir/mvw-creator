#!/usr/bin/env node

import * as fs from "fs";
import * as npm from "npm";
import { compile } from "../creator";
import { bsConfigJson } from "./init/bsConfigJson";
import { mvwcConfigJson } from "./init/mvwcConfigJson";
import { packageJson } from "./init/packageJson";
import { e404Pug } from "./init/partials-pages-401Pug";
import { e401Pug } from "./init/partials-pages-404Pug";
import { galleryPug } from "./init/partials-pages-galleryPug";
import { impressumPug } from "./init/partials-pages-impressumPug";
import { indexPug } from "./init/partials-pages-indexPug";
import { searchPug } from "./init/partials-pages-searchPug";
import { siteOverviewPug } from "./init/partials-pages-siteOverviewPug";
import { appTs } from "./init/partials-scripts-appTs";
import { galleryTs } from "./init/partials-scripts-galleryTs";
import { searchTs } from "./init/partials-scripts-searchTs";
import { appScss } from "./init/partials-styles-appScss";
import { breadcrumbScss } from "./init/partials-styles-breadcrumbScss";
import { galleryScss } from "./init/partials-styles-galleryScss";
import { globalStyleScss } from "./init/partials-styles-globalStyleScss";
import { globalVariablesScss } from "./init/partials-styles-globalVariablesScss";
import { aspectRatioScss } from "./init/partials-styles-mixins-aspectRatioScss";
import { breakpointScss } from "./init/partials-styles-mixins-breakpointScss";
import { printScss } from "./init/partials-styles-printScss";
import { searchScss } from "./init/partials-styles-searchScss";
import { structureScss } from "./init/partials-styles-structureScss";
import { templatePug } from "./init/partials-templatePug";
import { pugLintJson } from "./init/pugLintJson";
import { galleriesJson } from "./init/root-galleriesJson";
import { sassLintYml } from "./init/sassLintYml";
import { tsConfigJson } from "./init/tsConfigJson";
import { tsLintJson } from "./init/tsLintJson";

const logger = console;

const dirs: string[] = [
  "root",
  "root/_favicon",
  "root/img",
  "partials",
  "partials/data",
  "partials/mixins",
  "partials/pages",
  "partials/scripts",
  "partials/styles",
  "partials/styles/mixins"
];

dirs.forEach((d) => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d);
  }
});

function initFile(filepath: string, content: string): void {
  fs.writeFile(filepath, content, { flag: "wx" }, (err) => {
    if (err) {
      logger.log(filepath, ": ", err);
    }
  });
}

initFile("package.json", packageJson);
initFile("pug-lint.json", pugLintJson);
initFile("sass-lint.yml", sassLintYml);
initFile("tslint.json", tsLintJson);
initFile("tsconfig.json", tsConfigJson);
initFile("bs-config.json", bsConfigJson);

initFile(".mvwc-config.json", mvwcConfigJson);

initFile("partials/template.pug", templatePug);
initFile("partials/pages/index.pug", indexPug);
initFile("partials/pages/gallery.pug", galleryPug);
initFile("partials/pages/search.pug", searchPug);
initFile("partials/pages/site-overview.pug", siteOverviewPug);
initFile("partials/pages/impressum.pug", impressumPug);
initFile("partials/pages/404.pug", e404Pug);
initFile("partials/pages/401.pug", e401Pug);

initFile("partials/styles/app.scss", appScss);
initFile("partials/styles/gallery.scss", galleryScss);
initFile("partials/styles/_global-variables.scss", globalVariablesScss);
initFile("partials/styles/_global-style.scss", globalStyleScss);
initFile("partials/styles/search.scss", searchScss);
initFile("partials/styles/mixins/_aspect-ratio.scss", aspectRatioScss);
initFile("partials/styles/mixins/_breakpoint.scss", breakpointScss);
initFile("partials/styles/_structure.scss", structureScss);
initFile("partials/styles/_print.scss", printScss);
initFile("partials/styles/_breadcrumb.scss", breadcrumbScss);

initFile("partials/scripts/app.ts", appTs);
initFile("partials/scripts/search.ts", searchTs);
initFile("partials/scripts/gallery.ts", galleryTs);

initFile("root/galleries.json", galleriesJson);
logger.log("Run npm install to finalize the setup!");
