---
title: Threejs学习与总结5
abbrlink: 2bfe5b85
date: 2019-10-08 09:05:42
tags:
---

## Light 光照

在场景中添加光效和阴影效果。首先我们先介绍一下光照的创建。

![1570500658523](Threejs%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%80%BB%E7%BB%935/1570500658523.png)

<!--more-->

### 创建光照

所有的光照效果可以通过这种方式创建出来。

创建出来。

```js
const light = new THREE.DirectionalLight(0xffffff); //添加了一个白色的平行光
```

并且还在场景中添加了一个全局光照：

```js
scene.add(new THREE.AmbientLight(0x222222));
```

不同种类的光照，通过实例化，可以接受两个传值，分别是光照颜色和光照强度。

```js
const light = new THREE.DirectionalLight(0xffffff, 1.0); //添加了一个白色的平行光
```

第二个值光照强度默认值是 1.0，我们可以根据项目需求调整光照强度。

我们也可以动态修改光的颜色和光照强度：

```js
var light = new THREE.DirectionalLight(0xffffff); //添加了一个白色的平行光

light.color.set(0x000000); //将光照的颜色修改为黑色
light.intensity = 2.0; // 光照的强度改为默认的两倍
```

### 光照种类

实现了光照的创建，接下来，我们介绍一下 Three.js 内置的常用的几种光照的种类。

#### AmbientLight 环境全局光

环境光会照亮场景中所有的物体，在计算物体的颜色的时候，都会叠加上环境光的颜色。

```js
var light = new THREE.AmbientLight( 0x404040 ); // 创建一个灰色的环境光
scene.add( light );
```

由于环境光作用于所有的物体，所有的材质，所以环境光是没有方向的，也无法产生阴影效果。

#### DirectionalLight 平衡光

平行光是以特定的方向发射的光。它产生的光都是平行的状态，主要用于模拟太阳光线。

创建平行光也接受两个值，颜色和光线强度：

```js
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); //创建一个颜色为纯白色并且强度为默认的一半的平行光
scene.add( directionalLight );
```

平行光除了可以动态修改光的颜色和强度外，还可以通过设置它的位置和目标位置来确定平行光的照射方向（两点确定一条直线的概念）：

```js
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); 
directionalLight.color.set(0x000000);  //将光照颜色修改为黑色
directionalLight.intensity = 1.0; //将光照强度修改为默认

directionalLight.position.set(10, 10, 10); //设置平行光的位置
directionalLight.target.set(0, 0, 0); //设置当前的平行光的朝向位置
scene.add( directionalLight );
```

##### **添加阴影效果**

平行光是可以产生投影效果的，下面我们来看下平行光是如何产生阴影效果。

首先，需要设置渲染器可以渲染阴影效果：

```js
renderer.shadowMap.enabled = true;
```

实例化灯光时，需要设置灯光渲染阴影：

```js
directionalLight = new THREE.DirectionalLight("#ffffff");
directionalLight.castShadow = true; // 设置平行光投射投影

scene.add(directionalLight);
```

最后，我们还需要设置哪些模型需要产生阴影和哪些模型可以接收阴影：

```js
sphere.castShadow = true; //开启阴影
scene.add(sphere);

cube.castShadow = true; //开启阴影
scene.add(cube);

plane.receiveShadow = true; //可以接收阴影
scene.add(plane);
```

上面我们设置了球体和立方体可以产生阴影，底部的平面可以接收球和立方体产生的阴影，便可以产生下面的图片效果：

![阴影效果](Threejs%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%80%BB%E7%BB%935/4a4dfa00-72ed-11e8-9e76-835574e7e257-1570499341261)

由于设置阴影是一项十分耗性能的工作，所以我们需要尽量设置合适的阴影渲染范围和密度。平行光阴影的实现原理是通过正交相机 OrthographicCamera（将在下一篇讲解相机）检测当前模型，也就是 `directionalLight.shadow.camera`(它是一个正交相机），只要在这个正交相机可视范围内的可以投影的物体才可以被设置投影。并且我们可以通过设置一些相机的属性来实现产生阴影的范围：

```js
directionalLight.shadow.camera.near = 20; //产生阴影的最近距离
directionalLight.shadow.camera.far = 100; //产生阴影的最远距离
directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
directionalLight.shadow.camera.right = 50; //最右边
directionalLight.shadow.camera.top = 50; //最上边
directionalLight.shadow.camera.bottom = -50; //最下面

//这两个值决定生成阴影密度 默认512
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.mapSize.width = 1024;
```

具体效果请查看案例：[点击这里](https://johnson2heng.github.io/GitChat-Three.js/06第六节 Light/directionalLight.html)。

#### PointLight 点光源

点光源就是从一个点的位置向四面八方发射出去的光，一个简单的例子就是一个裸露的灯泡。

实现一个最普通的点光源很简单，如下：

```js
var pointLight = new THREE.PointLight(0xff0000); //创建一个白色的点光源
pointLight.position.set( 50, 50, 50 );
scene.add( pointLight );
```

点光源支持四个参数配置，除了前两个颜色和光的强度外，另外两个是照射范围和衰减度：

```js
var pointLight = new THREE.PointLight(0xff0000, 1, 100, 2); //创建一个白色的点光源
pointLight.position.set( 50, 50, 50 );
scene.add( pointLight );
```

第三个参数为照射范围，如果物体距离点光源超过这个距离，将不会受到点光源的影响，默认是所有的物体会受到点光源的影响。如果设置了参数，将按照第四个参数，即衰减度的值来慢慢减少影响，默认是1，如果需要模拟现实中的效果，这个参数可以设置为2。

这些属性也可以通过动态修改：

```js
pointLight.color.set(0x000000); //修改光照颜色
pointLight.intensity = 0.5; //修改光的强度
pointLight.distance = 50; //修改光的照射范围
pointLight.decay = 1.0; //修改衰减度
```

##### **实现点光源的阴影效果**

实现点光源阴影效果和实现平行光的阴影效果的设置基本一样，而且由于点光源是散射，阴影效果会终止在点光源的影响范围内。我们可以仿照平行光的阴影实现过程进行实现，只是将平行光修改成了点光源：

```js
pointLight = new THREE.PointLight("#ffffff");
pointLight.position.set(40, 60, 10);

//告诉平行光需要开启阴影投射
pointLight.castShadow = true;

scene.add(pointLight);
```

查看点光源的效果：[点击这里](https://johnson2heng.github.io/GitChat-Three.js/06第六节 Light/pointLight.html)。

#### SpotLight 聚光灯光源

聚光灯光源的效果也是从一个点发出光线，然后沿着一个个圆锥体进行照射，可以模仿手电筒，带有灯罩的灯泡等效果。

实现聚光灯的案例最简单的做法是直接设置一个颜色即可，默认照射原点位置的光照：

```js
var spotLight = new THREE.SpotLight( 0xffffff ); //创建一个白色光照
spotLight.position.set( 100, 1000, 100 );
scene.add( spotLight );
```

聚光灯光源和点光源一样，也可以设置光的强度和照射范围：

```js
spotLight = new THREE.SpotLight( 0xffffff, 2.0, 100); //设置光照强度是默认的两倍,照射范围为100
```

聚光灯由于是沿圆锥体照射，我们可以设置聚光灯的这个椎体的角度来影响光照范围：

```js
spotLight = new THREE.SpotLight( 0xffffff, 2.0, 100, Math.PI/4); //设置光的照射圆锥范围为90度
```

因为聚光灯只能照射一定的区域的物体，所以会出现光亮和无法照射地方的交接，我们可以通过配置第五个值来设置交接渐变的过渡效果：

```js
spotLight = new THREE.SpotLight( 0xffffff, 2.0, 100, Math.PI/4, 0.5); //设置交界过渡幅度为0.5，默认是0，没有过渡，最大值为1
```

我们也可以通过设置第六个值来设置聚光灯的衰减度，和点光源一样：

```js
spotLight = new THREE.SpotLight( 0xffffff, 2.0, 100, Math.PI/4, 0.5, 2.0); // 设置衰减度为物理效果的值2.0
```

同样道理，我们也可以动态修改相关配置项：

```js
spotLight.color.set(0x000000); //修改光照颜色
spotLight.intensity = 0.5; //修改光的强度
spotLight.distance = 50; //修改光的照射范围
spotLight.angle = Math.PI/3; //修改光的照射弧度
spotLight.penumbra = 1.0; //修改交界过渡
spotLight.decay = 1.0; //修改衰减度
```

我们也可以修改聚光灯的 target 来修改光的照射方向：

```js
spotLight.target.set(0, 1, 1); //修改照射方向
```

##### **实现聚光灯阴影**

实现聚光灯阴影与实现平行光和点光源的设置一样，聚光灯的设置也是将可以生成阴影设置打开，并将聚光灯添加到场景中即可：

```js
spotLight= new THREE.SpotLight("#ffffff");
spotLight.position.set(40, 60, 10);
//告诉平行光需要开启阴影投射
spotLight.castShadow = true;
scene.add(spotLight);
```

![聚光灯](Threejs%E5%AD%A6%E4%B9%A0%E4%B8%8E%E6%80%BB%E7%BB%935/8191e1a0-731c-11e8-9e76-835574e7e257-1570499335071)

案例查看地址：[点击这里](https://johnson2heng.github.io/GitChat-Three.js/06第六节 Light/spotLight.html)。

#### HemisphereLight 室外光源

最后我们说一下室外光源，这个光源主要是为了模拟在户外的环境光效果，比如在蓝天绿地的户外，模型下面会显示出来绿色的环境光，而上方则会受到蓝天的影响而颜色偏蓝。

实例化室外光源支持三个参数：天空的颜色，地面的颜色，和光的强度。

```js
//添加户外光源
var hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemisphereLight);
```

同样的道理，我们也可以通过配置属性实时修改：

```js
hemisphereLight.color.set(0xffffff); //将天空颜色修改为白色
hemisphereLight.groundColor.set(0x000000); //将地面颜色修改为黑色
```

我们也可以修改 position 配置项来修改渲染的方向：

```js
hemisphereLight.position.set(0, -1, 0); //默认从上往下渲染，也就是天空在上方，当前修改为了，天空颜色从下往上渲染
```

案例查看地址：

















