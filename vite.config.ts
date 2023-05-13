import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

import { cssImport } from './vite-plugin-css';

const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), cssImport()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.dependecies || {}),
        ...Object.keys(packageJson.peerDependencies || {}),
      ],
    },
  },
});
