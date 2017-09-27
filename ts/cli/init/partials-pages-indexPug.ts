export const indexPug: string = `extends ../template.pug

block variables
  -
    var title = "Willkommen beim Musikverein Wollbach";
    var description = "Die Website des Musikverein Wollbach 1866 e.V.. Alles Rund um unsere Auftritte, Jugendarbeit, Besetzung, Bilder und Einblicke in die Vereinshistorie.";
    var keywords = "Wollbach, Musikverein, Musikverein Wollbach 1866 e.V., Verein, Musik, Orchester, Blasmusik, Instrument, Jugendarbeit, Konzert";

block pageStyles
  include ../styles/index.css

block pageScripts
  include ../scripts/index.js

block header
  header
    .mvw-brand
      +image("/img/slider/logo.png", "Das neue Logo des Musikverein Wollbach")
    .cd
      a(href="blog_2016-still-feeling-good.html")
        +image("/img/events/cd.jpg", "Still Feelin' Good")

block content
  -
    let slides = [
      {
        "title": "Der Musikverein vor dem Jahreskonzert 2015",
        "url": "/img/jahreskonzerte/konzert_2015.jpg"
      },
      {
        "title": "Musikverein",
        "url": "/img/slider/alle_1.jpg"
      },
      {
        "title": "Altsaxophon",
        "url": "/img/slider/altsaxophon.jpg"
      },
      {
        "title": "Baritonsaxophon",
        "url": "/img/slider/baritonsaxophon.jpg"
      },
      {
        "title": "Dampfmusik",
        "url": "/img/slider/dampfmusik.jpg"
      },
      {
        "title": "Musikverein",
        "url": "/img/slider/alle_2.jpg"
      },
      {
        "title": "Euphonium",
        "url": "/img/slider/euphonium.jpg"
      },
      {
        "title": "Fagott",
        "url": "/img/slider/fagott.jpg"
      },
      {
        "title": "Gitarre",
        "url": "/img/slider/gitarre.jpg"
      },
      {
        "title": "Musikverein",
        "url": "/img/slider/alle_3.jpg"
      },
      {
        "title": "Horn",
        "url": "/img/slider/horn.jpg"
      },
      {
        "title": "Klarinette",
        "url": "/img/slider/klarinette.jpg"
      },
      {
        "title": "Klavier",
        "url": "/img/slider/klavier.jpg"
      },
      {
        "title": "Musikverein",
        "url": "/img/slider/alle_4.jpg"
      },
      {
        "title": "Posaune",
        "url": "/img/slider/posaune.jpg"
      },
      {
        "title": "Querflöte",
        "url": "/img/slider/querfloete.jpg"
      },
      {
        "title": "Saxophon",
        "url": "/img/slider/saxophon.jpg"
      },
      {
        "title": "Musikverein",
        "url": "/img/slider/alle_5.jpg"
      },
      {
        "title": "Schlagzeug",
        "url": "/img/slider/schlagzeug.jpg"
      },
      {
        "title": "Tenorsaxophon",
        "url": "/img/slider/tenorsaxophon.jpg"
      },
      {
        "title": "Trompete",
        "url": "/img/slider/trompete.jpg"
      },
      {
        "title": "Tuba",
        "url": "/img/slider/tuba.jpg"
      }
    ];

  .slider
    ol.slider-items
      for slide in slides
        li.slider-item
          .fill(style=\`background-image: url('\${slide.url}');\` data-alt=slide.title)
    a.unstyled.left.slider-control(href="#slider")
      span.icon-prev &lt;
    a.unstyled.right.slider-control(href="#slider")
      span.icon-next &gt;

  .tiles
    +tile("blog_2017-sauserfahrt", "./img/events/chanderli.jpg", "Sauserfahrt mit dem Chanderli", "Am 14. Oktober dampft der 'Sauser-Express' auch dieses Jahr wieder durch das Kandertal...")
    +tile("mitgliedschaft", "./img/slider/alle_4.jpg", "Mitglied werden", "Wir konnten Ihr Interesse an unserem Verein wecken und Sie wollen uns unterstützen? Hier können Sie Mitglied werden.")
`;
