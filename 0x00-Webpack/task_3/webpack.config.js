const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { map } = require("jquery");
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        header: {
            import: path.resolve(__dirname, "./modules/header/header.js"),
            dependOn: "shared",
        },
        body: {
            import: path.resolve(__dirname, "./modules/body/body.js"),
            dependOn: "shared",
        },
        footer: {
            import: path.resolve(__dirname, "./modules/footer/footer.js"),
            dependOn: "shared",
        },
        shared: "jquery",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jp?g|svg)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.join(__dirname, "public"),
        },
        compress: true,
        port: 8564,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "task_3",
        }),
        new CleanWebpackPlugin(),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};