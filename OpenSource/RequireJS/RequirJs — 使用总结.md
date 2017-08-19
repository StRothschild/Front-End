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



---
#### RequireJs 加载路径的处理方式
##### 在加载模块时，默认加载 JavaScript 文件，所以可以省略加载文件的 .js 后缀，并默认从 baseUrl 开始查找。如果带有 .js 后缀、或以 "/" 开始、或包含URL协议（http/https）则将根据具体的路径来查找。

##### config > data-main > 默认baseUrl

##### 配置 config 时，可以显式的设置 baseUrl，也可为每一个模块单独设置路径
##### 如果没有对 config 和 data-main 进行设置，则默认 baseUrl 为引用 require.js 的那个 HTML 页面所在目录
##### 设置data-main，则baseUrl为主模块所在目录（如第一段HTML中的主模块为page1.js，因此以其所在目录/scripts为根目录）
