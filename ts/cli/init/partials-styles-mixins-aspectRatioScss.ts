export const aspectRatioScss: string = `@mixin aspect-ratio($width, $height) {
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: ($height / $width) * 100%;
    width: 100%;
  }

  > .ratio-content {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
}
`;
