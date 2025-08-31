// .eslintrc.cjs
module.exports = {
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "prettier"
  ],
  settings: {
    react: { version: "detect" },
    "import/resolver": { typescript: true, node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } }
  },
  rules: {
    "no-console": "warn",
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-target-blank": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": ["error", { args: "none" }],
    "jsx-a11y/label-has-associated-control": "off",
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
