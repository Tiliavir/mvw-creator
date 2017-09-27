export const galleryPug: string = `extends ../template.pug

block variables
  -
    var title = "Bilder";
    var description = "Bildergalerie mit Bildern von dirversen Konzerten, Festen und anderen Anlässen des Musikverein Wollbach.";
    var keywords = "Bilder, Bildergalerie, Fotos, Photos, Alben, Album, Fotoalbum";
    var schemaOrg = "ImageGallery";

block pageStyles
  include ../../node_modules/photoswipe/dist/photoswipe.css
  include ../../node_modules/photoswipe/dist/default-skin/default-skin.css
  include ../styles/bilder.css

block pageScripts
  include ../../node_modules/photoswipe/dist/photoswipe.min.js
  include ../../node_modules/photoswipe/dist/photoswipe-ui-default.min.js
  include ../scripts/bilder.js

block content
  -
    var galleries = require("root/gallery/galleries.json");
    var years = Object.keys(galleries).sort((a, b) => b - a);

  +renderTabs(years)

  .mvw-gallery-overview.tab-content
    - var yearTitles = Object.keys(galleries);
    each yearTitle, index in yearTitles
      - var year = galleries[yearTitle];
      .tab-pane(id=yearTitle class=(index === yearTitles.length - 1 ? "active" : ""))
        each galleryTitle in Object.keys(year).reverse()
          - var gallery = year[galleryTitle]
          .mvw-gallery-container
            .mvw-gallery(onclick="Gallery.openGallery(this); return false;")
              - var preview = gallery.filter((i) => i.s.w === 200)[0] || gallery[0];
              .ratio-content
                img.preview(src=\`/gallery/\${preview.b}s/\${preview.f}\` alt=galleryTitle data-year=yearTitle data-gallery=galleryTitle)
                span.caption #{galleryTitle}

  .pswp(tabindex="-1" role="dialog" aria-hidden="true")
    //-
      Background of PhotoSwipe.
      It's a separate element as animating opacity is faster than rgba().
    .pswp__bg
    //- Slides wrapper with overflow:hidden.
    .pswp__scroll-wrap
      //-
        Container that holds slides.
        PhotoSwipe keeps only 3 of them in the DOM to save memory.
        Don't modify these 3 pswp__item elements, data is added later on.
      .pswp__container
        .pswp__item
        .pswp__item
        .pswp__item
      //- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed.
      .pswp__ui.pswp__ui--hidden
        .pswp__top-bar
          //- Controls are self-explanatory. Order can be changed.
          .pswp__counter
          button.pswp__button.pswp__button--close(title="Close (Esc)")
          button.pswp__button.pswp__button--share(title="Share")
          button.pswp__button.pswp__button--fs(title="Toggle fullscreen")
          button.pswp__button.pswp__button--zoom(title="Zoom in/out")
          //-
            Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR
            element will get class pswp__preloader--active when preloader is running
          .pswp__preloader
            .pswp__preloader__icn
              .pswp__preloader__cut
                .pswp__preloader__donut
        .pswp__share-modal.pswp__share-modal--hidden.pswp__single-tap
          .pswp__share-tooltip
        button.pswp__button.pswp__button--arrow--left(title="Previous (arrow left)")
        button.pswp__button.pswp__button--arrow--right(title="Next (arrow right)")
        .pswp__caption
          .pswp__caption__center
`;
