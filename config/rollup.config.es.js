import { esmPlugins } from './getPlugins.js';

/**@type {import('rollup').RollupOptions} */
export default {
  input: 'src/components/index.ts',
  output: {
    dir: './dist/es',
    format: 'esm',
    sourcemap: true,
    preserveModules: true
  },
  plugins: esmPlugins
};
