export const tsLintJson: string = `{
  "extends": "tslint:recommended",
  "rules": {
    "max-line-length": {
      "options": [120]
    },
    "new-parens": true,
    "no-arg": true,
    "no-bitwise": true,
    "no-reference": false,
    "trailing-comma": false,
    "no-namespace": false,
    "no-conditional-assignment": true,
    "no-console": {
      "options": [
        "debug",
        "info",
        "log",
        "time",
        "timeEnd",
        "trace"
      ]
    }
  },
  "jsRules": {
    "max-line-length": {
      "options": [120]
    }
  }
}
`;
