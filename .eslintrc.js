module.exports = {
    // Ignore ESLint in .eslintrc.js
    ignorePatterns: [".eslintrc.js"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'standard-with-typescript',
      'plugin:react/recommended',
    ],
    overrides: [
      {
        env: {
          node: true,
        },
        files: ['.eslintrc.{js,cjs}'],
        parserOptions: {
          sourceType: 'script',
        },
      },
    ],
    parserOptions: {
      ecmaVersion: 2021, // Set a specific ECMAScript version
      sourceType: 'module',
    },
    rules: {},
  };