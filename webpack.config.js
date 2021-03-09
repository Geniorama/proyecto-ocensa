const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    resolve: {
        extensions: ['.js']
    },

    entry: './src/app.js',
    output: {
        filename: 'js/bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devServer: {
        contentBase: "dist",
        compress: true,
        port: 8000
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'concesion-portuaria.html',
            template: './src/concesion-portuaria.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'terminal-maritimo-covenas.html',
            template: './src/terminal-maritimo-covenas.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'tlu2.html',
            template: './src/tlu2.handlebars',
            minify: false
        }),

        new HtmlWebpackPlugin({
            filename: 'mangueras.html',
            template: './src/mangueras.handlebars',
            minify: false
        }),

        // CSS
        new MiniCssExtractPlugin({
            filename: 'css/app.css'
        }),

        
    ],


    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

            { test: /\.handlebars/, loader: "handlebars-loader" },

            {
                test: /\.(eot|woff|woff2|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options:{
                    publicPath: '../',
                    name: 'fonts/[name].[ext]',
                    limit: 1000
                }
            },

            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('sass'),
                        },
                    },
                    'postcss-loader',
                    'resolve-url-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img'
                        }
                    }
                ]
            },

            {
                test: /\.(mp4|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'video'
                        }
                    }
                ]
            },

            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
        ]
    }
}