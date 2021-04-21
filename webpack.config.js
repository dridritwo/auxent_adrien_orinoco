var path = require('path');

module.exports = {
    mode: "production",
    entry: {
        './js/main': './src/js/main.js', 
        './js/panier': './src/js/panier.js', 
        './js/article': './src/js/article.js'
        },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // }
};