// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,

    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  // add your custom rules here
  rules: {
    "no-unused-vars": 0,
    "no-underscore-dangle": 0,
  },
  parser: "babel-eslint",
};
