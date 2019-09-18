---
title: vue学习与总结
tags: vue
abbrlink: 3d0c447
date: 2019-09-16 09:29:36
categories: 
  - 编程
  - 更新中
---

## 组件切换
vue 提供了 component，来展示对应的名称组件
component 是一个占位符,:is 属性，可以用来指定展示的组件的名称

## 插值表达式

<!--more-->

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

## 事件修饰符

- .stop
- .prevent
- .capture
- .self
- .once

vue中绑定样式两种方式 v-bind:class和v-bind:style

## 定义指令

- 使用Vue.directive()定义全局的指令，比如v-focus

- 其中 参数1：指令的名称，定义时不需要加v-的前缀

- 使用的时候必须在指令名称前面加上v-前缀来调用

- 参数2：是一个对象，这个对象上有一些指令相关的函数，这些函数可以在特定的阶段执行相关的操作

  ```javascript
  Vue.dirctive('focus',{
  bind:function(el){
  	//每当指令绑定到元素上的时候会立即执行这个bind函数，只执行一次
      //每个函数中的第一个参数永远是el表示被绑定的指令的那个元素，是原生的js对象
      //每当指令绑定到元素上的时候会立即执行这个bind函数，只执行一次
      //
  }
  }
  ```

  



