// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
  devServer: {
    open: true,
    host: "localhost",
    hot: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: false,
      inject: "body",
    }),

    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        //include: path.resolve(__dirname, 'src/html/'),
        loader: "html-loader",
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: stylesHandler,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "expanded", //compressed
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]",
        },
      },

      {
        test: /\.(svg|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/icons/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "/public/icons/[name].[ext]",
        },
        loader: "image-webpack-loader",
        options: {
          name: "assets/images/[name][ext]",
        },
        options: {
          mozjpeg: {
            progressive: true,
          },
          optipng: {
            enabled: false,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75,
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    );
  } else {
    config.mode = "development";
  }
  return config;
};
