module.exports = {
  extends: [
    "jest-enzyme",
    "kentcdodds",
    "kentcdodds/possible-errors",
    "kentcdodds/best-practices",
    "kentcdodds/import",
    "kentcdodds/stylistic",
    "kentcdodds/jest",
    "kentcdodds/jsx-a11y",
    "kentcdodds/react",
    "kentcdodds/webpack",
  ],
  rules: {
    semi: ["error", "never"],
    "no-shadow": "off",
    "babel/no-invalid-this": 1,
    "no-invalid-this": 0,
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/no-named-as-default": "off",
    "babel/quotes": ["error", "double"],
    "no-unused-vars": "warn",
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
}
