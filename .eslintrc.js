module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  rules: {
    "linebreak-style": 0,
    "react/prefer-stateless-function": [0, { ignorePureComponents: true }],
    "react/prop-types": 0,
    "react/no-danger": 0,
    "no-shadow": 0,
    "react/forbid-prop-types": 0,
    "react/destructuring-assignment": 0,
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 120,
        semi: true
      }
    ]
  },
  plugins: ["prettier"],
  "env": {
    "browser": true,
    "node": true
  }  
};
