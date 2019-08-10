const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'sentry-minapp.min.js',
    library: 'Sentry',
    path: path.resolve(__dirname, './examples/vendor')
  },
  resolve: {
    extensions: [".ts", ".tsx", "js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  }
};