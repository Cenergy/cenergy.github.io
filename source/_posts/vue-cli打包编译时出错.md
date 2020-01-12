---
title: vue-cli打包编译时出错
abbrlink: 1e403be1
date: 2020-01-12 20:42:46
tags:
---

```shell
npm run build // 出错
```

`vue-cli-service build报错No module factory available for dependency type: CssDependency`

https://forum.vuejs.org/t/vue-cli-service-build/83951

在`vue.config.js`文件中配置

```js
module.exports = {
  css: {
    extract: false
  }
};
```

原因看下面
https://cli.vuejs.org/config/#css-extract
https://segmentfault.com/a/1190000016390112
