export const structureScss: string = `@import 'mixins/breakpoint';
@import 'global-variables';

$footer-shadow-gray: #0c0d0e;
$footer-border-gray: #e7e7e7;

%content-width-behavior {
  width: 80vw;
  max-width: $content-max-width;
  margin: 0 auto;
}

main {
  // fix for IE
  display: block;
}

.content,
header {
  @extend %content-width-behavior;
  min-height: 200px;
  margin-top: $top-nav-height + 30px;
}

header {
  &~.content {
    margin-top: 30px;
  }
}

@include breakpoint(0, $mobile-max-width) {
  %width-and-padding-reset {
    width: initial;
    padding: 0 5px;
  }

  .footer {
    ul {
      @extend %width-and-padding-reset;
    }
  }

  .content {
    @extend %width-and-padding-reset;
  }
}

.page-title {
  margin-top: 40px;
}

.footer {
  background-color: $gray-lightest;
  height: 40px;
  margin: 30px 0 20px;
  border-color: $footer-border-gray;
  box-shadow: 0 1px 0 transparentize($footer-shadow-gray, .9), 0 1px 3px transparentize($footer-shadow-gray, .9), 0 4px 20px transparentize($footer-shadow-gray, .965), 0 1px 1px transparentize($footer-shadow-gray, .975);

  ul {
    @extend %content-width-behavior;
    list-style: none;
    padding-left: 0;
  }

  li {
    display: inline-block;
    padding: 0 10px;
    line-height: 40px;
    height: 40px;
  }

  a {
    text-decoration: none;
    color: darken($gray-lightest, 35%);

    &:hover {
      color: darken($gray-lightest, 50%);
      text-decoration: none;
    }
  }
}
`;
