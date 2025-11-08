const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => ({
  mode: argv.mode || "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename:
      argv.mode === "production" ? "[name].[contenthash].js" : "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      app: path.resolve(__dirname, "src/app"),
      entities: path.resolve(__dirname, "src/entities"),
      features: path.resolve(__dirname, "src/features"),
      pages: path.resolve(__dirname, "src/pages"),
      processes: path.resolve(__dirname, "src/processes"),
      shared: path.resolve(__dirname, "src/shared"),
      widgets: path.resolve(__dirname, "src/widgets"),
    },
  },
  devtool: argv.mode === "production" ? "source-map" : "eval-source-map",
  module: {
    rules: [
      // TypeScript
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },

      // CSS Modules
      {
        test: /.module.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: false,
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
        ],
      },

      // Обычные CSS
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ["style-loader", "css-loader"],
      },

      // Source maps
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "public/index.html" }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
  },
});
