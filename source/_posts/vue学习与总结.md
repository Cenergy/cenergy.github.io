---
title: vue学习与总结
tags: vue
abbrlink: 3d0c447
date: 2019-09-16 09:29:36
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

- v-model 只能用于表单元素

- v-for

- v-if

- v-show

  > 一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换，v-show 较好，如果运行时条件不太可能改变 v-if 较好

## 事件修饰符

- .stop
- .prevent
- .capture
- .self
- .once

vue 中绑定样式两种方式 v-bind:class 和 v-bind:style

## 定义指令

- 使用 Vue.directive()定义全局的指令，比如 v-focus

- 其中 参数 1：指令的名称，定义时不需要加 v-的前缀

- 使用的时候必须在指令名称前面加上 v-前缀来调用

- 参数 2：是一个对象，这个对象上有一些指令相关的函数，这些函数可以在特定的阶段执行相关的操作

  ```javascript
  Vue.dirctive('focus',{
  bind:function(el){
  	//每当指令绑定到元素上的时候会立即执行这个bind函数，只执行一次
      //每个函数中的第一个参数永远是el表示被绑定的指令的那个元素，是原生的js对象
      //每当指令绑定到元素上的时候会立即执行这个bind函数，只执行一次
      // 和样式相关的操作，一般都可以在bind执行
  },
      inserted(el){
          el.focus();
        // 和js行为相关的操作，最好在inserted中执行，防止js行为不生效
      },
      updated(el){
         //当Vnode更新时，会执行updated，可能会触发多次
      }
  }
  ```
- 私有指令的定义

  ```js
   dirctives:{
        //自定义指令的简写形式，等同于定义了 bind 和 update 两个钩子函数
    	'fontsize':function (el,binding){
            el.style.fontSize=binding.value
        }
    }
  ```

  

## JSONP的实现原理

- 由于浏览器安全限制，不允许AXAJ访问协议不同、域名不同、端口号不同——不符合同源策略的。
- 可以通过动态创建script标签的形式，把script标签的src属性指向数据接口的地址。因为script标签不存在跨域限制，这种数据获取方式称之为JSONP
- 具体实现过程
  - 先在客户端定义一个回调方法，预定义对数据的操作；
  - 再把这个回调方法的名称通过URL传参的形式提交到服务器的数据接口；
  - 服务器数据接口组织好要发送给客户端的数据，再拿客户端传递过来的回调方法名称拼接出一个调用这个方法的字符串，发送给客户端解析执行；
  - 客户端拿到服务器的返回的字符串之后，当作script脚本执行。