const webpack = require("webpack");
module.exports = {
  entry: "./src/OlStyleParser.ts",
  output: {
    filename: "olStyleParser.js",
    path: __dirname + "/browser",
    library: "GeoStylerOpenlayersParser"
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.ts$/,
        include: /src/,
        loader: "awesome-typescript-loader"
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
};
