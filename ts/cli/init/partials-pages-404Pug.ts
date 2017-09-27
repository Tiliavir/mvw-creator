export const e401Pug: string = `extends ../template.pug

block variables
  -
    var title = "Seite nicht gefunden!";
    var description = "Die von Ihnen angeforderte Seite konnte leider nicht gefunden werden.";

block content
  :marked
    Die von Ihnen angeforderte Seite konnte leider nicht gefunden werden. Falls
    Sie dies für eine Fehlfunktion halten, wenden Sie sich bitte an die
    Administration dieser Seite.

    Im rechten oberen Bereich finden Sie eine Suchfunktion und um sich ein Bild
    der Seiten Struktur, können Sie auch einen Blick auf die
    [Seiten-Übersicht][siteOv] werfen.

    [siteOv]: seiten-uebersicht.html
`;
