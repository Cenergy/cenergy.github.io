---
title: vue学习与总结
tags: vue
abbrlink: 3d0c447
date: 2019-09-16 09:29:36
---

组件切换
vue 提供了 component，来展示对应的名称组件
component 是一个占位符,:is 属性，可以用来指定展示的组件的名称

插值表达式

- v-cloak

- v-text

- v-html

- v-bind(缩写:)

- v-on(缩写@)

- v-model    只能用于表单元素

- v-for

- v-if

- v-show

  >一般来说，v-if有更高的切换消耗而v-show有更高的初始渲染消耗。因此，如果需要频繁切换，v-show较好，如果运行时条件不太可能改变v-if较好

事件修饰符

- .stop
- .prevent
- .capture
- .self
- .once

vue中绑定样式两种方式 v-bind:class和v-bind:style

