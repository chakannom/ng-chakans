const webpack = require('webpack');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const utils = require('./utils.js');

module.exports = (options) => ({
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        alias: {
            app: utils.root('src/demo/app/'),
            ...rxPaths()
        }
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    caseSensitive: true,
                    removeAttributeQuotes:false,
                    minifyJS:false,
                    minifyCSS:false
                },
                exclude: /(src\/demo\/index.html)/
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]'
                }
            },
            // Ignore warnings about System.import in Angular
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${options.env}'`,
                BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
                DEBUG_INFO_ENABLED: options.env === 'development',
                SERVER_API_URL: `''`
            }
        }),
        new CopyWebpackPlugin([
            { from: './src/demo/content/', to: 'content' },
        ]),
        new MergeJsonWebpackPlugin({
            output: {
                groupBy: [
                    { pattern: "./src/demo/i18n/en.json", fileName: "./i18n/en.json" },
                    { pattern: "./src/demo/i18n/ko.json", fileName: "./i18n/ko.json" }
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/demo/index.html',
            chunks: ['polyfills', 'main', 'global'],
            chunksSortMode: 'manual',
            inject: 'body'
        }),
        new BaseHrefWebpackPlugin({ baseHref: '/' })
    ]
});
