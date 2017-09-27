export const globalStyleScss: string = `@import 'global-variables';
@import 'mixins/breakpoint';

@include breakpoint(0, 480px) {
  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 26px;
  }
}

* {
  $black-rgba: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: $black-rgba;

  &:focus,
  &:hover {
    outline: none;
  }
}

body {
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: $font-family;
  font-size: $font-size-base;
  background-color: $body-bg;
  color: $text-color;
  line-height: $line-height-base;
  min-height: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6,
input,
button,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

figure {
  margin: 0;
}

img {
  border: 0;
  vertical-align: middle;
}

svg {
  &:not(:root) {
    overflow: hidden;
  }
}

button {
  overflow: visible;
  background-color: $highlight-color;
  color: $gray-lightest;
  border: 0;
  padding: 10px;

  &:hover {
    background-color: lighten($highlight-color, 10%);
  }
}

blockquote {
  padding: 10px 20px;
  margin: 0 0 20px;
  border-left: 5px solid $gray-lighter;
}

table {
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  border: 0;
  padding: 6px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
  font-weight: 400;

  small {
    font-weight: normal;
    line-height: 1;
    color: $gray-light;
  }
}

h1,
h2,
h3 {
  margin-top: 20px;
  margin-bottom: 5px;

  small {
    font-size: 65%;
  }
}

h4,
h5,
h6 {
  margin-top: 10px;
  margin-bottom: 5px;

  small {
    font-size: 75%;
  }
}

h1 {
  font-weight: 300;
  font-size: 1.33 * $font-size-larger;
  color: $highlight-color;
  letter-spacing: 1px;
  border-bottom: 1px solid $gray-lighter;
  padding-bottom: 10px;
}

h2 {
  font-size: $font-size-larger;
}

h3 {
  font-size: $font-size-large;
  font-weight: 500;
}

h4 {
  font-size: $font-size-base;
}

h5 {
  font-size: $font-size-small + 1;
}

h6 {
  font-size: $font-size-small;
}

p {
  margin: 10px 0;
  text-align: justify;
  hyphens: auto;
}

.caption {
  font-style: italic;
  text-align: center;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 10px;

  ul,
  ol {
    margin-bottom: 0;
  }
}

small,
.small {
  font-size: 85%;
}

.content,
.footer {
  a {
    &:not(.unstyled) {
      color: $highlight-color;
      text-decoration: none;

      &:hover,
      &:focus {
        border-bottom: 1px solid $highlight-color;
        color: $text-color;
        text-decoration: none;
      }
    }
  }
}

.hidden {
  display: none;
}

.overlay {
  background-color: transparentize($black, .6);
  cursor: pointer;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transition: .5s;
  width: 100%;
  z-index: 2000;
}

.video {
  position: relative;
  padding-bottom: percentage(9 / 16);
  padding-top: 25px;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
`;
