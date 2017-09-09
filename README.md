# MVW Creator

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
          "referencedFile": "index",
          "navigation": "none",
          "title": "Willkommen beim Musikverein Wollbach"
        },
        {
          "title": "Aktuelles",
          "children": [
            {
              "referencedFile": "termine",
              "title": "Termine"
            },
            {
              "referencedFile": "rueckblick",
              "title": "Rückblick"
            },
            {
              "referencedFile": "berichte",
              "title": "Berichte"
            }
          ]
        }
      ]
    }
