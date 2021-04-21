import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './main.ts',
  output: {
    file: '../../source/js/main.js',
    format: 'iife',
  },
  plugins: [typescript(), terser()],
}
