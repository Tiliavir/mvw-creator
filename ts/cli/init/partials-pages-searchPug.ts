export const searchPug: string = `extends ../template.pug

block variables
  -
    var title = "Suche";
    var description = "Durchsuche Inhalte der Webseite des Musikverein Wollbach 1866 e.V.";
    var keywords = "Suche, Seitensuche";
    var schemaOrg = "SearchResultsPage";

block content
  form(itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction")
    meta(itemprop="target" content="http://www.mv-wollbach.de/search.html?q={query}")
    input.mvw-search-field(itemprop="query-input" placeholder="Suche..." type="search" name="query")
  ol.results

block pageStyles
  include ../styles/suche.css

block pageScripts
  include ../../node_modules/lunr/lunr.js
  include ../scripts/suche.js
`;
