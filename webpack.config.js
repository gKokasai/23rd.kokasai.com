const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CnameWebpackPlugin = require("cname-webpack-plugin");

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
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          },
          {
            loader:"sass-loader",
            options: {
              implementaons: require('sass'),
              sassOptions: {
                outputStyle: 'compressed',
              },
            }
          }
        ]
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),

    new CnameWebpackPlugin({
      domain:"23rd.kokasai.com"
    })
  ],
};
