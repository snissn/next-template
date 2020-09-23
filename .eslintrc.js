// https://eslint.org/docs/user-guide/configuring

module.exports = {
  env: {
    browser: true,

    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  //extends: ['airbnb-base',  'plugin:prettier/recommended'],
  // add your custom rules here
  rules: {
    "no-unused-vars": 0,
  },
  parser: "babel-eslint",
};
