import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
    {
      format: 'umd',
      file: 'dist/index.umd.js',
      name: 'ReactSplitPaneNext',
      exports: 'named',
    },
  ],
  external: [...Object.keys(pkg.dependencies)],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
  watch: {
    include: 'src/**',
  },
};
