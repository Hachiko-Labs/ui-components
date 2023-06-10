module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'eslint:recommended',
    'prettier',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    createDefaultProgram: true,
  },
};
