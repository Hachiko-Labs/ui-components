const commonjs = require('@rollup/plugin-commonjs')
const resolve = require('@rollup/plugin-node-resolve')
const postcss = require('rollup-plugin-postcss')

const typescript = require('rollup-plugin-typescript2')

const pkg = require('./package.json')

module.exports = {
    input: 'src/index.ts',
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
    ],
    output: [
        {
            dir: 'dist/cjs',
            format: 'cjs',
            preserveModules: true,
            preserveModulesRoot: 'src',
            exports: 'named',
        },
        {
            dir: 'dist/esm',
            format: 'es',
            preserveModules: true,
            preserveModulesRoot: 'src',
            exports: 'named',
        },
    ],
    plugins: [
        commonjs(),
        typescript(),
        resolve({
            module: false,
            browser: true,
            include: ['node_modules/**'],
        }),
        postcss({
            plugins: [
                require('postcss-import'),
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        }),
    ],
}
