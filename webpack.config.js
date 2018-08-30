module.exports = {
  mode: "development",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "test")
  // },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  }
};
