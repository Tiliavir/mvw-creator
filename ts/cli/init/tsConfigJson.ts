export const tsConfigJson: string = `{
  "compilerOptions": {
    "module": "none",
    "removeComments": true,
    "noImplicitAny": true,
    "noUnusedLocals": true,
    "noImplicitReturns": true,
    "allowUnreachableCode": false,
    "target": "es5",
    "noFallthroughCasesInSwitch": true,
    "noImplicitThis": true,
    "allowJs": false,
    "alwaysStrict": true,
    "inlineSourceMap": false,
    "sourceMap": false,
    "forceConsistentCasingInFileNames": true,
    "lib": [
      "dom",
      "es5",
      "scripthost",
      "es2015.iterable"
    ]
  },
  "include": [
    "partials/scripts/**/*.ts"
  ]
}
`;
