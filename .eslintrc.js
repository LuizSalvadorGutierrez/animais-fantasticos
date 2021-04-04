module.exports = {
  root: true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb-case"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "parser": "babel-eslint",
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-param-reassign": 0,
    "import/extensions": 0,
    "no-console": 0
  }
};
