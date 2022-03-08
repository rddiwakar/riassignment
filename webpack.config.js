var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  // [style-loader](/loaders/style-loader)
                  { loader: 'style-loader' },
                  // [css-loader](/loaders/css-loader)
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true
                    }
                  },
                  // [sass-loader](/loaders/sass-loader)
                  { loader: 'sass-loader' }
                ]
              }
            
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://flutter-assignment-api.herokuapp.com/v1/'
            // apiUrl: 'http://localhost:4000'
        })
    }
}