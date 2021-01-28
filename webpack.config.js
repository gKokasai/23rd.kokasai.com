import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
    context: path.join(__dirname, 'src'),
    entry: './index.tsx',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'static'),
        open: true,
        port: 3000,
    },
    plugins: 
        new HtmlWebpackPlugin({
            template: './static/index.html'
            }
        )
    
};

export default config;