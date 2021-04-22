var path = require('path');

module.exports = {
    // mode: "development",
    entry: {
      './js/polyfill': "babel-polyfill",
      './js/main': './src/js/main.js', 
      './js/panier': './src/js/panier.js', 
      './js/article': './src/js/article.js'
      },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: ["@babel/plugin-transform-runtime"]
              }
            }
          }
        ]
      },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};