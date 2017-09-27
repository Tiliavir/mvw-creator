export const e404Pug: string = `extends ../template.pug

block variables
  -
    var title = "Unautorisierter Zugriff!";
    var description = "Sie sind leider nicht authorisiert auf diese Seite zuzugreifen.";

block content
  :marked
    Leider haben Sie nicht die nötige Berechtigung, um die von Ihnen
    angeforderte Seite zuzugreifen. Falls Sie dies für einen Fehler des
    Servers halten, wenden Sie sich bitte an die Administration dieser Seite.

    [Zurück zur Seite][domain]

    [domain]: /
`;
