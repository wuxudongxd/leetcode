module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  env: {
    node: true,
  },
  globals: {},
  ignorePatterns: ['.lintstagedrc.json', '.prettierrc.js', '.vscode/*', 'package.json', 'tsconfig.json'],
  rules: {},
};
