module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
  },
  globals: {},
  ignorePatterns: ['.lintstagedrc.json', '.prettierrc.js', '.vscode/*', 'package.json', 'tsconfig.json'],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'max-params': 'off',
  },
};
