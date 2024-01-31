module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', 'standard', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'generator-star-spacing': 'off',
    'prettier/prettier': 'error',
  },
};
