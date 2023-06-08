module.exports = {
  devServer: {
    proxy: {
			'/api': {
				target: 'https://hyxsjd1.zjqfxx.net',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/api': ''
				}
			},
			'/v9.0': {
				target: 'https://hyxsjd1.zjqfxx.net/',
				// ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/v9.0': ''
				}
			},
    }
  },
}