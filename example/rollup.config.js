import babel from 'rollup-plugin-babel'

export default {
  entry: 'script.js',
  format: 'iife',
  plugins: [
    babel()
  ],
  dest: 'bundle.js'
}
