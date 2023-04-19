import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { cssImport } from './vite-plugin-css';

const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssImport(), dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependecies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ],
    },
  },
});
