var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
    module:{
      rules: [{
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use:[{
              loader: 'babel-loader',
              options: {
                presets: [
                    '@babel/preset-env',//引入babel
                    '@babel/preset-react' //引入babel-react 
                  ],
                plugins: [
                    "@babel/plugin-proposal-class-properties",
                ]
              }
          }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|PNG|jpg|gif|ovg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
    },
}