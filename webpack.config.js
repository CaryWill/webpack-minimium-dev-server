var HtmlwebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    libraryTarget: 'umd',
    library: 'MyLibrary',
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "Webpack-demos",
      filename: "index.html",
    }),
    new OpenBrowserPlugin({
      url: "http://localhost:8080",
    }),
  ],
  devServer: {
    disableHostCheck: true,
  },
};
