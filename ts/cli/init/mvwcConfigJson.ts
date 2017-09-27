export const mvwcConfigJson: string = `{
  "environment": "prod",
  "environments": {
    "base": {
      "siteTitle": "MVWC Demo Site"
    },
    "prod": {
      "key": "prod",
      "baseUrl": "https://www.my-prod-server.com/",
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
      "title": "Welcome"
    },
    {
      "referencedFile": "gallery",
      "title": "Gallery"
    },
    {
      "children": [
        {
          "referencedFile": "site-overview",
          "navigation": "none",
          "title": "Site Overview"
        }
      ],
      "referencedFile": "impressum",
      "navigation": "footer",
      "title": "Impressum"
    },
    {
      "title": "Search",
      "referencedFile": "search",
      "navigation": "footer"
    },
    {
      "referencedFile": "404",
      "navigation": "none",
      "title": "Seite nicht gefunden!"
    },
    {
      "referencedFile": "401",
      "navigation": "none",
      "title": "Unautorisierter Zugriff!"
    }
  ]
}
`;
