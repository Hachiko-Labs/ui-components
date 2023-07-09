module.exports = {
    root: true,
    extends: [
        'plugin:react/recommended',
        'plugin:storybook/recommended',
        'plugin:prettier/recommended',
        'plugin:storybook/recommended',
        'eslint:recommended',
    ],
    parserOptions: {
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
    },
}
