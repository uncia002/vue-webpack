const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/index.js`,
  mode: "development",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // ファイルが.vueで終われば...
        loader: "vue-loader", // vue-loaderを使う
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES2020 を ES5 に変換
            "@babel/preset-env",
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"], // css-loader -> vue-style-loaderの順で通していく
      },
    ],
  },
  devServer: {
    contentBase: "dist",
  },
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  plugins: [new VueLoaderPlugin()],
  target: ["web", "es5"],
};
