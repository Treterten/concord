const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: {
    'public/build/bundle': path.resolve(__dirname, './src/site/index.tsx'),
    main: path.resolve(__dirname, './src/electron/main.ts')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },
  target: 'electron-main',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname)
  },
  plugins: [new ForkTsCheckerWebpackPlugin()]
};
