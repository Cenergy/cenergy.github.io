---
title: webpack学习与总结
abbrlink: 6e7939e6
date: 2019-09-24 20:37:14
tags: webpack
---

![1569329464055](webpack%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%80%BB%E7%BB%93/1569329464055.png)

<!--more-->

## 初识 Webpack

webpack 是模块打包工具

## Webpack 核心概念

### plugin

plugin 可以在 webpack 运行到某一时刻的时候，帮你做一些事情。

htmlWepackPluginnn 会在打包结束后，自动生成一个 html 文件，并把打包的生成的 js 自动引入到这个 html 文件中。

```js
const HtmlWebpackPlugin = require("html-webpack-plugin"); //通过 npm 安装
const webpack = require("webpack"); //访问内置的插件
const path = require("path");

const config = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

module.exports = config;
```

### output

publicPath:"http://www..."

全局安装时可以在命令行中使用 webpack。
局部安装时可以使用`npx webpack`

### npx 的使用

Node 自带 npm 模块，所以可以直接使用 npx 命令。万一不能用，就要手动安装一下。

```bash
npm install -g npx
```

npx 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了 webpack 而且全局没有安装 webpack。

```bash
npm install -D webpack
```

一般来说，调用 webpack，只能在项目脚本和 package.json 的[`scripts`](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)字段里面， 如果想在命令行下调用，必须像下面这样。

```bash
# 项目的根目录下执行
cd node_modules\.bin
webpack --version   # 输出 4.41.0
```

npx 就是想解决这个问题，让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。

```bash
# 项目的根目录下执行
npx webpack --version
```

npx 的原理很简单，就是运行的时候，会到`node_modules/.bin`路径和环境变量`$PATH`里面，检查命令是否存在。

由于 npx 会检查环境变量`$PATH`，所以系统命令也可以调用。

除了调用项目内部模块，npx 还能避免全局安装的模块。比如，`create-react-app`这个模块是全局安装，npx 可以运行它，而且不进行全局安装。

> ```bash
> $ npx create-react-app my-react-app
> ```

上面代码运行时，npx 将`create-react-app`下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载`create-react-app`。

下载全局模块时，npx 允许指定版本。

> ```bash
> $ npx uglify-js@3.1.0 main.js -o ./dist/main.js
> ```

上面代码指定使用 3.1.0 版本的`uglify-js`压缩脚本。

注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装`http-server`模块，下面的命令会自动下载该模块，在当前目录启动一个 Web 服务。

> ```bash
> $ npx http-server
> ```

> 参考：[npx 使用教程](http://www.ruanyifeng.com/blog/2019/02/npx.html)

### loader

#### file-loader

就会拷贝到打包文件夹内

```js
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.jpg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

#### url-loader

会变成 base64，在 js 文件中直接加载

```js
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            limit: 1024
          }
        }
      }
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
```

### css-loader style-loader

## Webpack 核心概念

## Webpack 进阶

## Webpack 配置及案例

## Webpack 原理及脚手架
