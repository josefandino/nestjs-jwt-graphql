module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:prettier/recommended',
    'plugin:rxjs/recommended',
    'plugin:sonarjs/recommended'
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': ['error', {
        'singleQuote': true, 
        'trailingComma': 'all', 
        'tabWidth': 2, 
        'semi': true, 
        'printWidth': 120, 
        'bracketSpacing': true, 
        'useTabs': false,
        'arrowParens': 'always',
        'quoteProps': 'as-needed',
        'requirePragma': false,
        'insertPragma': false, 
    }],
    "@typescript-eslint/no-unsafe-assignment": "off"
  },
};
