import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: "lib",
      format: "cjs",
      exports: "auto",
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), terser()],
  external: [
    'typeorm'
  ]
}