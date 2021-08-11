const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
    filename: "bundle.js" // 打包之后的名字
  }
}