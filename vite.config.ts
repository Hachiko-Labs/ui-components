import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const packageJSON = require(resolve('package.json'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'index.es.js' : 'index.js'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJSON.dependencies || {}),
        'antd/dist/antd.css',
        'react/jsx-runtime',
      ],
    },
    sourcemap: true,
    minify: false,
  },
});
