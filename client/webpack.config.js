var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var _root = path.resolve(__dirname);

module.exports = {
    entry: {
        'app': "./src/app/main.ts",
        'polyfills': "./libs/polyfills.ts",
        'vendor': "./libs/vendor.ts",
    },
    resolve: {
        extensions: [".ts", ".js",".css", ".html"]
    },
    output: {
        path: root("dist"),
        filename: 'assets/js/[name].js'
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["awesome-typescript-loader", "angular2-template-loader"]
            },
            {
                test: /\.html$/,

                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: false,
                            removeComments: true,
                            collapseWhitespace: false,

                            // angular 2 templates break if these are omitted
                            removeAttributeQuotes: false,
                            keepClosingSlash: true,
                            caseSensitive: true,
                            conservativeCollapse: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader"]
                })
            },
            {   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, 
                use: 'file-loader?limit=10000&name=assets/fonts/[name].[ext]' 
            }
        ]
    },
    devServer: {
        compress: true,
        port: 1000,
        open: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root("./src"),
        {}),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app","vendor", "polyfills"]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new ExtractTextPlugin("assets/css/[name].css"),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};

function root(args) {
    args = Array.prototype.slice.call(arguments, 0);

    return path.join.apply(path, [_root].concat(args));
}