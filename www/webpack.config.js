const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    // js 文件
    entry: "/index.js",
    output: {
        // 生成的目标文件夹
        path: path.resolve(__dirname, "public"),
        filename: "index.js",
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{ from: "./index.html",  to: "./" }]
        })
    ]
}