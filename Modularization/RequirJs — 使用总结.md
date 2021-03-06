## RequireJs 使用总结

- #### AMD
  ##### AMD（Asynchronous Module Definition）是一种基于模块的异步加载的规范。这里有两个重点：一个是模块化，另一个是异步加载。

  ##### AMD 规范推荐将 JavaScript 代码按功能封装成模块（以文件为单位,一个文件就是一个模块），从而将对全局对象的依赖变成了对其他模块的依赖。这些"全局变量"作为参数被传递到模块的回调函数中，这样就避免了全局对象的污染和命名空间的管理。由于模块化的 JavaScript 是松耦合的，可以极大的提升代码的复用性、可维护性。

  ##### AMD 规范通过使用延迟和按需加载来解决各个模块之间的依赖关系。这种非阻塞式的加载，使页面上其他不依赖 JavaScript 代码的元素（比如图片、CSS以及其他DOM节点）得以先加载完毕，从而加快页面加载速度。



---
- #### 支持 AMD 规范的库
  ##### JQuery 大于 1.7 版本（大部分 JQuery 插件还没有遵循 AMD 规范，所以需用使用 shim config 来明确这些插件的依赖）



---
- #### RequireJs 概念
  ##### RequireJs 是 AMD 规范的一个实现。主要功能是帮助页面完成异步非阻塞的 JavaScript 文件加载和模块的定义。



---
- #### RequireJs API
  ##### RequireJs 有 3 个最主要的 API 需要了解 ：requirejs.config（配置）， require（加载）和 define（创建）。



---
- #### RequireJs 加载路径的处理方式
  ##### 1. RequireJS 加载文件是通过 baseUrl 来作为路径的参照起点。 baseUrl 属性可以通过 requirejs.config 方法指定。如果没有 requirejs.config 方法指定，则 data-main 属性指定的 script 文件路径作为 baseUrl。如果两者都不存在则以引用 require.js 的那个 HTML 页面所在目录为 baseUrl。
  ##### 2. config > data-main > 默认baseUrl


  ##### 3. 在加载模块时，默认加载 JavaScript 文件，所以可以省略加载文件的 .js 后缀。如果：
             1. 带有 .js 后缀
             2. 以 "/" 开始
             3. 包含URL协议（http/https）
  ##### 则将这个路径作为普通的 url，根据其具体的路径来查找。


  ##### 4. 由于模块中不仅只有 JavaScript，还有 hmtl 模板或 css 文件，当要加载这些资源时，需要使用 RequireJs 的 text 插件。



---
- #### Require 示例
  ```JavaScript
  // 导入 require.js
  <script src="scripts/require.js"></script>
  // 入口文件
  <script>
      // requirejs 是 require.js 定义的一个全局方法，同时也是一个对象，可以通过其有用的 config 方法进行定义
      requirejs.config({
          baseUrl: "/another/path",
          paths: {
              Vue: 'vendors/vue/vue',
              cssLoader: 'vendors/require/css',        // 用于导入 CSS 文件
              textLoader: 'vendors/require/text',      // 用于导入 文本 文件
              a: 'js/newsWarehouse/pictureSetArticle/modules/articleContent'
          }
      });
      // 作为入口，执行 require 方法，异步加载所需要的其他模块。
      require(["a", "b.js", "some/module"], function(a, b, someModule) {
             //This function will be called when all the dependencies
             //listed above are loaded. Note that this function could
             //be called before the page is loaded.
             //This callback is optional.
          }
      );
  </script>

  // 在 foo.js 通过全局的 define 方法定义一个模块
  define([
    'Vue',
    'textLoader!js/newsWarehouse/pictureSetArticle/modules/articleContent.tpl'
  ], function(Vue, template){
    return Vue.extend({
        template: template,
        props: ['articleContent']
      });
  });
```







---
- ### 常见错误
  ##### MISMATCHED ANONYMOUS DEFINE() MODULES ...
  ##### 这个错误一般是和现有的其他资源冲突了，重复定义了 define 函数。解决方法是把 requir.js 作为最后一个资源引入。


  #### Require 不能识别路径中的某一段有两个及以上的大写字母？
