module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "@typescript-eslint/no-var-requires": false,
    "@typescript-eslint/no-empty-interface": false,
    "@typescript-eslint/no-explicit-any": false,
    "@typescript-eslint/no-object-literal-type-assertion": false,
    "@typescript-eslint/camelcase": false,
    "@typescript-eslint/explicit-function-return-type": false
  }
};
