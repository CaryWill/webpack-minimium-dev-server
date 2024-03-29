var HtmlwebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    libraryTarget: 'amd',
    library: 'MyLibrary',
  },
  plugins: [
    new OpenBrowserPlugin({
      url: "http://localhost:8080/index.html",
    }),
  ],
  devServer: {
    disableHostCheck: true,
  },
};
