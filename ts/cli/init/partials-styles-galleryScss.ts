export const galleryScss: string = `@import 'mixins/aspect-ratio';

$overlay-bg-color: #333;
$overlay-color: #fff;
$gallery-bg-color: #ccc;

.tab-pane {
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.mvw-gallery-overview {
  .mvw-gallery-container {
    flex-grow: 1;
    width: 230px;
    max-width: 400px;
    float: left;
    padding: 10px;
  }

  .mvw-gallery {
    @include aspect-ratio(4.5, 3);
    background-color: $gallery-bg-color;
    cursor: pointer;
    overflow: hidden;
  }

  .preview {
    bottom: 0;
    width: 100%;

    &:hover {
      opacity: .9;
    }
  }

  .caption {
    background-color: $overlay-bg-color;
    bottom: 0;
    color: $overlay-color;
    display: block;
    line-height: 2em;
    opacity: .9;
    overflow: hidden;
    position: absolute;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;

    &:hover {
      text-overflow: initial;
      white-space: normal;
      word-wrap: break-word;
    }
  }
}
`;
