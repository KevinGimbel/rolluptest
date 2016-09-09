import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

// Rollup Configuration
export default {
  // The main entry file
  entry: 'main.js',
  // Format of the output script, can be: iife, umd, cjs, es
  format: 'umd',
  // Global defined Libraries
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  // exported/exposed module name
  moduleName: 'myApp',
  // plugins to run
  plugins: [
    /* Fixes issues with things loaded from node_modules */
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    /* Needs to be called before commonJS to transpile JSX */
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    eslint(),
    /* If no environemnt is given, set it to 'development'  */
    replace({
     ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
   }),
   /* If environemnt is production, uglify the output */
   (process.env.NODE_ENV === 'production' && uglify()),
  ],
  // output file
  dest: 'main.bundle.js'
};
