---
title: Mapbox的表达式
date: 2019-10-18 09:52:50
tags: Mapbox
---

mapbox-gl的表达式可以将任何布局`layout`属性，绘图`paint`属性或过滤器`filter`的值指定为表达式。表达式定义了一个公式，用于使用以下描述的*运算符*计算属性的值。Mapbox GL提供的表达式运算符集包括：

- 用于对数值执行算术运算和其他运算的数学运算符(如'+' '-' '*' '/')
- 用于操纵布尔值和进行条件决策的逻辑运算符(如'case' 'let')
- 用于操纵字符串的字符串运算符(如string转number)
- 数据操作员，提供对源功能属性的访问(如 ‘get')
- 摄像机操作员，提供对定义当前地图视图的参数的访问(如 'zoom')

mapbox-gl.js表达式使用类似Lisp的语法，表达式表示为JSON数组。表达式数组的第一个元素是命名表达式运算符的字符串，例如或。后续元素（如果有）是表达式的*参数*。每个参数都是文字值（字符串，数字，布尔值或），或者是另一个表达式数组。 [`"*"`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-*) [`"case"`](https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-case) `null`

```json
[expression_name, argument_0, argument_1, ...]
```

