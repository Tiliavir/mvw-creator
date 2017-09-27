export const packageJson: string = `{
  "name": "",
  "version": "0.0.1",
  "private": true,
  "description": "",
  "author": "",
  "repository": {
      "type": "git",
      "url": ""
  },
  "browserslist": [
      "> 1%",
      "last 2 versions",
      "Firefox ESR",
      "ie 9-11"
  ],
  "devDependencies": {
      "@types/photoswipe": "4.0.28",
      "@types/jquery": "3.2.12",
      "@types/lunr": "0.5.29",

      "autoprefixer": "7.1.4",
      "copyfiles": "1.2.0",
      "node-sass": "4.5.3",
      "postcss-cli": "4.1.1",
      "lite-server": "2.3.0",
      "sass-lint": "1.11.1",
      "tslint": "5.7.0",
      "typescript": "2.5.2"
  },
  "dependencies": {
      "jquery": "3.2.1",
      "lunr": "2.1.3",
      "mvw-creator": "1.1.2",
      "mvw-gallery": "1.0.8",
      "photoswipe": "4.1.2"
  },
  "scripts": {
      "lint": "sass-lint -c sass-lint.yml -v -q && tslint -c tslint.json \\"partials/scripts/**/*.ts\\" && mvwc-lint",

      "clean": "rimraf ./build/ ./partials/{styles,scripts}/**/*.{css,js}",
      "postclean": "mkdir build",

      "compile:sass": "node-sass ./partials/styles/ -o ./partials/styles && postcss ./partials/styles/**/*.css -r --use autoprefixer --no-map",
      "compile:ts": "tsc -p tsconfig.json",
      "compile": "npm run compile:ts && npm run compile:sass && mvwc",

      "copy:lib": "copyfiles -u 3 ./node_modules/jquery/dist/jquery.min.js ./build/js/ && copyfiles -u 4 ./node_modules/photoswipe/dist/default-skin/*.{svg,png,gif} ./build/",
      "copy:root": "copyfiles -u 2 ./root/_*/* ./build/ && copyfiles -u 1 -a ./root/[!_]* ./build/ && copyfiles -u 1 ./root/[!_]*/**/* ./build/",
      "copy": "npm run copy:lib && npm run copy:root",

      "prerelease": "npm run lint",
      "release": "npm run compile && npm run copy",

      "serve": "lite-server"
  }
}
`;
