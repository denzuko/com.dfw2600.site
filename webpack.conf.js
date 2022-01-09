const path = require("path");

module.exports = {
  target: "webworker",
  resolve: {
    alias: {
      fs: path.resolve(__dirname, "./index.js")
    }
  },
  mode: "production",
  optimization: {
    usedExports: true
  }
};
