var path = require('path');

module.exports = {
    mode: "production",
  entry: {
    main: "./src/js/main.js",
    article: "./src/js/article.js",
    panier: "./src/js/panier.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};