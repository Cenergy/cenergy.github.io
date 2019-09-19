---
title: JavaScript面向对象编程总结
abbrlink: 9364fbab
date: 2019-09-19 12:35:34
tags: javascript
---

## What is Object-oriented Programming

<div class="note info">OOP是一种编程范例，或者编程风格，这是围绕对象而不是函数</div>
面向对象编程中的四个核心概念

`Encapsulation`封装

`Abstraction` 抽象

`Inheritance` 继承

`Polymorphism` 多态

区别与面向过程编程

<!-- more-->

![1568869135169](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869135169.png)

![1568868905016](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568868905016.png)

<div class="note danger">改变了其中一个函数，然后其他几个函数可能就奔溃了，这就是我们说的意大利面条代码。
函数之间深层次的关联变成了各种问题的来源，OOP就应运而生。</div>

![1568869159417](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869159417.png)

OOP 就一组相关的变量和函数组成合成一个单元，我们称之为对象(object)。把里面的函数称为方法，里面的变量称之为属性。

![1568869302595](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869302595.png)

最好的函数是那些没有参数的函数，参数个数越少，使用和维护就越简单。这就是封装！

![1568869634914](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869634914.png)

向外隐藏一些属性和方法，这将会使这些对象的接口更简单

![1568869829906](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869829906.png)

![1568869855201](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869855201.png)

![1568869889043](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568869889043.png)

![1568873343511](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568873343511.png)

![1568873363029](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568873363029.png)

使用封装重新组合的相关的变量和函数，这样可以减少复杂性，可以在程序的不同部分重用这些对象

或者在不同程序中，通过抽象，隐藏细节和复杂性，只显示必要性，这种技术降低了复杂性，也隔离了代码更改的影响。

继承让我们消除多余的代码

多态性可以避免写出复杂丑陋的选择性代码

![1568873756718](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568873756718.png)

## 编辑器和插件

推荐vscode，安装插件live server

原型`Prototypes` 和 原型继承`Prototyical Inheritance`

JavaScript中的类并不同于Java或者c#中的类，因为Javascript是动态语言，所以类的本质上是更像是为了配合原型和原型继承所采取的必要的技术。

```javascript
const circle={} //创建了一个空对象
//一个Javascript的对象实际上是一组键值对的集合
//使用创建对象的语法来创建多个对象是有问题的，那就是对象的行为性，就像人一样可以做很多事就叫做行为性。
//解决方法就是用工厂函数（factory）或者构造函数（constructor）

//工厂函数
function createCircle(radius){
  return {radius,
         draw(){
             console.log('draw')
         }
    }
}
const circle2=createCircle(1)
// 构造函数
function Circle(radius){
    this.radius=raius;
    this.draw=function (){
        console.log('draw')
    }
}
const circle3=new Circle(2)
//当我们使用new操作符调用一个函数时，3件事发生了
//首先new操作符创建了一个空对象，然后设置this指向这个对象，最后返回这个对象
```



每个对象都有构造函数属性

这个属性引用了用来创建这个对象的构造函数

```javascript
new String() // ''," ",``
new Boolean() // true ,false
new Number() //1,2,3,4,5,6
new Object() //{}
```

![1568897883740](JavaScript%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E6%80%BB%E7%BB%93/1568897883740.png)











[next station is](https://www.bilibili.com/video/av35179218/?p=10)