const path = require("path");
const TailwindCss = require("tailwindcss");
const Autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  TailwindCss,
                  Autoprefixer
                ]
              }
            }
          }
        ]
      },
    ],
  },
  devServer: {
    static: {
      directory: `${__dirname}/static`
    },
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/login':{
        target: 'https://kokasai.com',
        changeOrigin: true
      }
    }
  },

  plugins: [
    new CopyPlugin(
      {
        patterns: [
          { from: "**/*.svg", to: path.resolve(__dirname, "dist"), context: "static"}
        ]
      }
    ),
    new WriteFilePlugin(),
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "404.html",
      template: "./static/404.html",
      inject: false
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),

  ]
};
