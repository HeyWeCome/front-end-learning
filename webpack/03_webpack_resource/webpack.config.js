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
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,// 正则表达式
        use: [ // 写在后面的 loader 先加载
          // {loader: "css-loader"},
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        // 图片资源
        test: /\.(jpg|png|gif|svg|jpe?g)$/i,
        use: {
          loader:"url-loader",
          options: {
            // outputPath: "img", // 打包之后图片存放的地址,可以直接合并到name中
            name: "img/[name]_[hash:6].[ext]",
            // 小于100KB的变成Base64，大的不变
            limit: 100 * 1024
          }
        }
      }
    ]
  }
}