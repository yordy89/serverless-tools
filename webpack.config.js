/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const AwsSamPlugin = require('aws-sam-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const awsSamPlugin = new AwsSamPlugin();

module.exports = {
  entry: () => awsSamPlugin.entry(),
  output: {
    filename: (chunkData) => awsSamPlugin.filename(chunkData),
    libraryTarget: 'commonjs2',
    path: path.resolve('.')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }]
  },
  plugins: [
    awsSamPlugin,
    {
      apply: (compiler) =>
        new CopyPlugin({
          patterns: [
            {
              context: 'src/layers',
              from: '**/**',
              to: `.aws-sam/build/layers`
            }
          ]
        }).apply(compiler)
    }
  ],
  externals: ['aws-sdk', 'pdf']
};
