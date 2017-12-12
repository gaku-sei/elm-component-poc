const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',

  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.elm']
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Elm Counter',
      template: 'index.ejs',
    }),
  ],

  module: {
    rules: [{
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: {
        loader: 'elm-webpack-loader',
        options: {},
      },
    }],
  },
};
