var path = require('path');

var mode = 'production';

module.exports = {
	mode: mode,
	entry: './src/main.js',
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: {
			colors: true
	},
	devtool: mode === 'production' ? false : 'srouce-map'  // 디버깅 시 번들링된 파일에서도 브라우저 디버깅이 가능하게 만들어 줌
};
