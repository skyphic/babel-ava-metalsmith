const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const localVariable = require('./local_variable');

const srcDir = "./src/js/";
const scripts = {};
const scriptFiles = glob.sync('./src/js/*/index.js');
for (let i in scriptFiles) {
  const script = scriptFiles[i];
  const name = script.slice(srcDir.length, -3).split('/')[0];
  scripts[name] = script;
}

module.exports = [
  {
    entry: scripts,
    output: {
      path: path.join(__dirname, '../dist/js/'),
      filename: "[name].js"
    },
    module: {
      noParse: /es6-promise\.js$/, // avoid webpack shimming process
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: "eslint-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {loader: 'css-loader', options: {importLoaders: 1}},
            'postcss-loader'
          ]
        },
        {
          test: /\.css$/,
          loader: 'postcss-loader',
          options: {
            config: {
              path: 'postcss.config.js'
            }
          }
        }
      ]
    },
    plugins: []
      .concat(process.env.NODE_ENV === 'production' ? [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.local_variable': localVariable
          }),
          new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
          }),] :
        [new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.local_variable': localVariable
          })
        ]),
    devtool: '#inline-source-map'
  }
];
