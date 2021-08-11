const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"), // 必须是绝对路径
    filename: "bundle.js" // 打包之后的名字
  },
  module: {
    rules: [
      {
        test: /\.css$/,// 正则表达式
        // 1.loader的写法（语法糖）
        // loader: "css-loader"
        // loader其实是语法糖，完整写法：
        
        use: [ // 写在后面的 loader 先加载
          // {loader: "css-loader"},
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}