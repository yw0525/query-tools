import { terser } from 'rollup-plugin-terser'

export default {
  input: ['src/index.ts'],
  output: [
    {
      dir: "lib",
      format: "cjs",
    },
  ],
  plugins: [terser()]
}