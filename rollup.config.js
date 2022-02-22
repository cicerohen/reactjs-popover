import { config } from 'dotenv';

config({
  path: './.env'
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import reload from 'rollup-plugin-livereload';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import html from 'rollup-plugin-html2';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';
import { terser } from 'rollup-plugin-terser';

export default () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const extensions = ['.js', '.jsx'];
  return [
    {
      input: ['src/main.tsx'],
      output: {
        format: 'es',
        dir: 'dist'
      },
      plugins: [
        !isProduction &&
          serve({
            contentBase: ['dist', 'public', 'src'],
            open: false,
            port: process.env.PORT || 3000,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            historyApiFallback: true
          }),
        !isProduction &&
          reload({
            watch: 'dist'
          }),
        copy({
          targets: [{ src: 'src/assets/**/*', dest: 'dist/assets' }]
        }),
        replace({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
          preventAssignment: true
        }),
        html({
          template: './public/index.html'
        }),
        commonjs(),
        postcss(),
        image(),
        resolve({
          extensions
        }),
        json(),
        babel({
          exclude: 'node_modules/**',
          extensions,
          babelHelpers: 'bundled'
        }),
        typescript(),
        isProduction && terser()
      ]
    }
  ];
};
