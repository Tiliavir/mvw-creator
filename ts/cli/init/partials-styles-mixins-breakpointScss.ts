export const breakpointScss: string = `// creates a media query - use zero or negative numbers to lower / upper value from query
@mixin breakpoint($lower, $upper: 0) {
  @if $lower <= 0 {
    @media (max-width: $upper - 1) {
      @content
    }
  } @else if $upper <= 0 {
    @media (min-width: $lower) {
      @content
    }
  } @else {
    @media (min-width: $lower) and (max-width: $upper - 1) {
      @content
    }
  }
}
`;
