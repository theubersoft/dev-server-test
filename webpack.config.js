const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meteorExternals = require('webpack-meteor-externals');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: './client/main.js',
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/main.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HOME: JSON.stringify(process.env.HOME)
      }
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  externals: [
    meteorExternals()
  ],
  devServer: {
    hot: true
  }
};

const serverConfig = {
  entry: [
    './server/main.js'
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }],
    }]
  },
  target: 'node',
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['*', '.js']
  },
  externals: [
    meteorExternals(),
    nodeExternals()
  ]
};

module.exports = [clientConfig, serverConfig];