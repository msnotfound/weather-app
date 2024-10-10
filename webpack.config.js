const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname) // Directory for the output file
  },
  mode: 'development', // You can change this to 'production' for production builds
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile ES6+ code to ES5 if needed
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile ES6+ code to ES5
        }
      }
    ]
  },
  devtool: 'source-map' // Generates source maps for easier debugging
};