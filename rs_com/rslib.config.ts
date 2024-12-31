import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
      output: {
        distPath: {
          root: './dist/esm',
        },
        minify: true,
      },
    },
    {
      bundle: false,
      dts: true,
      format: 'cjs',
      output: {
        distPath: {
          root: './dist/cjs',
        },
        minify: true,
      },
    },
    {
      format: 'umd',
      umdName: 'rsCom',
      output: {
        externals: {
          react: 'rsCom',
        },
        distPath: {
          root: './dist/umd',
        },
      },
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
