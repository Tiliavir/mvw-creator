# MVW Creator

[![Build Status](https://travis-ci.com/Tiliavir/mvw-website.svg?branch=master)](https://travis-ci.com/tiliavir/mvw-creator)
[![NPM version](https://img.shields.io/npm/v/mvw-creator.svg?style=flat)](https://www.npmjs.com/package/mvw-creator)

For a sample implementation have a look here: [mvw-website](https://github.com/Tiliavir/mvw-website)

# CLI
- mvwc-lint: pug lint
- mvwc: generator

# Configuration
Supporting several configs in this priority:
  - .mvwc-config
  - .mvwc-config.js
  - .mvwc-config.json
  - mvwc node in package.json

## Sample configuration:

```json
    {
      "environment": "prod",
      "environments": {
        "base": {
          "siteTitle": "Musikverein Wollbach 1866 e.V."
        },
        "prod": {
          "key": "prod",
          "baseUrl": "https://www.mv-wollbach.de/",
          "isRelease": true
        },
        "dev": {
          "key": "dev",
          "baseUrl": "http://localhost/"
        }
      },
      "destinationPath": "./build/",
      "navigationPath": "./partials/",
      "ampPath": "./partials/pages/Blog/*.pug",
      "pugLintPath": "./partials/**/*.pug",
      "pugPath": "./partials/pages/**/*.pug",
      "searchIndex": {
        "bodySelector": "main"
      },
      "structure": [
        {
          "reference": "index",
          "navigation": "none",
          "title": "Willkommen beim Musikverein Wollbach"
        },
        {
          "title": "Aktuelles",
          "children": [
            {
              "reference": "termine",
              "title": "Termine"
            },
            {
              "reference": "rueckblick",
              "title": "Rückblick"
            },
            {
              "reference": "berichte",
              "title": "Berichte"
            }
          ]
        }
      ]
    }
```
