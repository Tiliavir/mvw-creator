export const breadcrumbScss: string = `@import 'global-variables';

.breadcrumb {
  list-style: none;
  margin-bottom: 25px;
  padding: 4px 12px;
  background-color: $gray-lightest;
  border-radius: 6px;
  font-size: $font-size-small;
  margin-top: 15px;

  & > li {
    display: inline-block;

    &.active {
      color: $highlight-color;
    }
  }

  & > li + li {
    &::before {
      content: '\\00a0>';
      padding: 0 3px;
      color: $gray;
    }
  }
}
`;
