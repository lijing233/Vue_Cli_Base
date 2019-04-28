module.exports = {
  // baseUrl: './',
  // assetsDir: './',
  devServer: {
    port: 8989,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // }
  }
}
