## RequireJs 使用总结

#### AMD
##### AMD（Asynchronous Module Definition）是一种基于模块的异步加载的规范。这里有两个重点：一个是模块化，另一个是异步加载。

##### AMD 规范推荐将 JavaScript 代码按功能封装成模块，从而将对全局对象的依赖变成了对其他模块的依赖。这些"全局变量"作为参数被传递到模块的回调函数中，这样就避免了全局对象的污染和命名空间的管理。由于模块化的 JavaScript 是松耦合的，可以极大的提升代码的复用性、可维护性。

##### AMD 规范通过使用延迟和按需加载来解决各个模块之间的依赖关系。这种非阻塞式的加载，使页面上其他不依赖 JavaScript 代码的元素（比如图片、CSS以及其他DOM节点）得以先加载完毕，从而加快页面加载速度。



---
#### 支持 AMD 规范的库
##### JQuery 大于 1.7 版本（大部分 JQuery 插件还没有遵循 AMD 规范，所以需用使用 shim 配置）



---
#### RequireJs 概念
##### RequireJs 是 AMD 规范的一个实现。主要功能是帮助页面完成异步非阻塞的 JavaScript 文件加载和模块的定义。



---
#### RequireJs API
##### RequireJs 有 3 个最主要的 API 需要了解 ：config（配置）， require（加载）和 define（创建）。
