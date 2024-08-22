import globals from 'globals';
import pluginJs from '@eslint/js';
import airbnbBase from 'eslint-config-airbnb-base';
import pluginJest from 'eslint-plugin-jest';

const eslintConfig = {
  languageOptions: {
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      jest: 'readonly',
      // browser: false,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
  },
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    // Add rules from airbnb-base and plugin:jest/all if needed
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: airbnbBase.globals,
      parserOptions: airbnbBase.parserOptions,
    },
    rules: {
      ...airbnbBase.rules,
      ...eslintConfig.rules,
    },
  },
  {
    languageOptions: {
      globals: pluginJest.configs.all.globals,
    },
    rules: {
      ...pluginJest.configs.all.rules,
    },
  },
];
