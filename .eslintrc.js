module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'react-hooks', 'jest'],
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/array-type': [
      'error',
      {
        'default': 'array'
      }
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'curly': ['error', 'multi-line'],
    'eqeqeq': ['error', 'smart'],
    'max-len': ['warn', { 'code': 160 }],
    'no-duplicate-case': 'error',
    'no-unused-vars': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'no-extra-semi': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'no-non-null-assertion': 'off',
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto'
      },
      {
        'usePrettierrc': true
      }
    ],
    'no-extend-native': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'off',
  },
  ignorePatterns: ['.eslintrc.js', 'node_modules/'],
  globals: {
    NodeJS: true
  },
};
