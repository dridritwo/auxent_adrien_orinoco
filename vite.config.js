const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        article: resolve(__dirname, 'article.html'),
        recept: resolve(__dirname, 'recept.html'),
        panier: resolve(__dirname, 'panier.html')
      }
    }
  }
}