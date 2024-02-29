import path from 'path'
import webpackNodeExternals from 'webpack-node-externals'

export default {
  mode: 'production',
  entry: path.join(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        loader: 'ts-loader',
        exclude: [/node_modules/, /test/]
      }
    ]
  },
  externals: [webpackNodeExternals()]
}
