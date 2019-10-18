---
title: Mapbox的表达式
tags: Mapbox
abbrlink: 9c1bf78f
date: 2019-10-18 09:52:50
---

## Expressions

mapbox-gl的表达式可以将任何布局`layout`属性，绘图`paint`属性或过滤器`filter`的值指定为表达式。

![expression](Mapbox%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F/expression.jpg)

<!--more-->

表达式定义了一个公式，用于使用以下描述的*运算符*计算属性的值。Mapbox GL提供的表达式运算符集包括：

- Mathematical operators：数学计算器用于数值计算和其他数值相关的属性(如'+' '-' '*' '/')
- Logical operators：用于操纵布尔值和进行条件决策的逻辑运算符(如'case' 'let')
- String operators：用于操纵字符串的字符串运算符(如string转number)
- Data operators：提供调用数据源要素集属性的接口(如 ‘get')
- Camera operators：提供定义当前地图视角参数的接口(如 'zoom')

xpressions表达式使用类似Lisp的语法，表达式数组的第一个元素是一个表示计算器的字符串，例如`*`或`case`。后面的元素是表达式的参数，每个参数要么是个原始的值（字符串、数字、布尔值或null），要么是另一个表达式数组。

```json
[expression_name, argument_0, argument_1, ...]
```

### Data expressions

数据表达式是任何能够调用要素数据的表达式，这种表达式使用如下一种数据计算器：[`get`](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-get)、[`has`](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-has)、[`id`](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-id)、[`geometry-type`](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-geometry-type)、[`properties`](https://www.mapbox.com/mapbox-gl-js/style-spec#expressions-properties)、or `feature-state`。数据表达式利用要素集的属性或者状态来决定如何表达要素，它们可以在同一图层中创建不同的数据表达。

```json
{
    "circle-color": [
        "rgb",
        // red is higher when feature.properties.temperature is higher
        ["get", "temperature"],
        // green is always zero
        0,
        // blue is higher when feature.properties.temperature is lower
        ["-", 100, ["get", "temperature"]]
    ]
}
```

上面这个例子使用`get`运算符来获取每个要素的温度值，这个结果值被用作rgb运算符的属性值，rgb运算符是用红绿蓝定义颜色的操作符。

数据表达式可以被用作filter的属性值和大多数paint、layout属性值的计算。然而，一些绘画`paint`和布局`layout`属性并不支持数据表达式。支持级别可以在支持列表中查看。`feature-state`运算符的数据表达式仅适用于绘画`paint`属性中。

### Camera expressions

一个相机表达式是指任何使用zoom操作符的表达式，这些表达式允许一个图层改变地图的缩放等级。相机表达式可以用来创建表现的深度和控制数据密度。

```json
{
    "circle-radius": [
        "interpolate", ["linear"], ["zoom"],
        // zoom is 5 (or less) -> circle radius will be 1px
        5, 1,
        // zoom is 10 (or greater) -> circle radius will be 5px
        10, 5
    ]
}
```

这个例子使用interpolate运算符用来定义缩放等级和圆大小的线性相对关系，在这个例子中，表达式表明了圆半径在zoom等级为5或者更低时为1像素，在zoom等级为10或者更高时为5像素。在此之间的room，半径线性的在1到5像素之间变化。

相机表达式在任何表达式使用的地方都能使用，然后当相机表达式用于layout或者paint的属性值时，它必须是以下一种形式：

```json
[ "interpolate", interpolation, ["zoom"], ... ]
```

