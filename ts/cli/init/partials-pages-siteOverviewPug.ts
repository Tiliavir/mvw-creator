export const siteOverviewPug: string = `extends ../template.pug

block variables
  -
    var title = "Seiten-Übersicht";
    var description = "Eine Übersicht der Inhalte der Webseite des Musikverein Wollbach.";
    var keywords = "Übersicht, Struktur, Gliederung, Aufbau";

block content
  include ../site-overview.pug
`;
