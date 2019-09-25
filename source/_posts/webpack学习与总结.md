---
title: webpack学习与总结
abbrlink: 6e7939e6
date: 2019-09-24 20:37:14
tags: webpack
---

![1569329464055](webpack%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%80%BB%E7%BB%93/1569329464055.png)

<!--more-->

## 初识Webpack

## Webpack核心概念
### plugin

plugin可以在webpack运行到某一时刻的时候，帮你做一些事情。

htmlWepackPluginnn会在打包结束后，自动生成一个html文件，并把打包的生成的js自动引入到这个html文件中。

```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

const config = {
    mode:"production",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```



### output

publicPath:"http://www..."


## Webpack进阶

## Webpack配置及案例

## Webpack原理及脚手架