module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
};



// const path = require('path');

// module.exports = {
//   entry: ['babel-polyfill', './src/index.js'],
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js'
//   },
//   mode: 'development',
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         include: [
//           path.resolve(__dirname, 'client')
//         ],
//         loader: 'babel-loader'
//       },
//       {
//         test: /\.css$/,
//         use: [
//           'style-loader',
//           'css-loader'
//         ]
//       }
//     ]
//   }
// };