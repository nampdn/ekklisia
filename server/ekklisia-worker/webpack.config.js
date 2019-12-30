const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    server: './src/server.ts'
  },
  target: 'node',
  mode: 'development',
  module: {
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.json'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
