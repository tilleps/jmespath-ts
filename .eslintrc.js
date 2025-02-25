// src has additional rules at src/.eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 11,
    'sourceType': 'module',
    'tsconfigRootDir': __dirname,
    'project': ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  rules: {
    curly: 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'] },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
  },
};
