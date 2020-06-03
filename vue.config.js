module.exports = {
	assetsDir: 'static',
    parallel: false,
    publicPath: './',
	indexPath: 'index.html',
	productionSourceMap: false,
	configureWebpack: {
	    /* externals: {
	        'BMap': 'BMap',
	        'BMap_Symbol_SHAPE_POINT':'BMap_Symbol_SHAPE_POINT'
	    } */
		externals: {
		    'AMap': 'AMap'
		}
	},
  	/*devServer: {
         proxy:{
         	'/': {
		        target: 'http://39.97.77.207:8080',
		        changeOrigin: true,
		    }
         }
 	}*/
}
/*module.exports = {
	assetsDir: 'static',
    parallel: false,
    publicPath: './',
	
    devServer: {
      proxy: {
        '/manage/': {
          target: 'http://39.97.77.207:8080',
          changeOrigin: true
        },
      }
    }
  }*/