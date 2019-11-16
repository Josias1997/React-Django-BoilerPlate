module.exports = {
    module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: {
					loader: 'css-loader',
				}
            },
            {
                test: /\.png|jpe?g|gif|svg$/,
                use: {
                    loader: 'file-loader'
                }
            }

		]
	},
	watch: true,
};