// vite.build.config.js
import path from 'path';
import baseConfig from './vite.config';

// vite.config.js

export default {
  ...baseConfig,

  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'libraryName'
    },
    rollupOptions: {
      output: {
        dir: 'dist/components',
        entryFileNames: '[name]/index.js',
        chunkFileNames: '[name]/[name].[hash].js',
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    }
  }
};
