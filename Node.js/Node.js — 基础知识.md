# Node.js 基础知识
#### 1. Node.js 提供基于 V8 引擎的服务器端(系统级) JavaScript 执行环境。
#### 2. Node.js 提供基于 npm 的包管理服务。
#### 3. Node.js 的概念与对比如下图所示：

  ![Node.js概念图](https://github.com/StRothschild/Front-End/blob/master/Node.js/resouces/Node.js%20%E2%80%94%20%E6%A6%82%E5%BF%B5.jpg?raw=true)




---
- #### 高性能 I/O
  ##### Node.js 的一个主要特点是可以实现基于异步（并行）处理的高性能 I/O。 I/O 的概念包括了从文件系统中读写数据，也包括从数据库中读写数据。




---
- #### package.json 文件
  ##### 1. 每个 Node 项目的根路径下都有一个 package.json 文件，用于定义项目的元数据(比如名称、版本、许可证)以及所依赖的各种模块。
  ##### 2. package.json 文件可以手工编写，也可以使用 npm init 命令生成。

  ```
  /* 以下是通过 $ npm init 生成的 package.json（仅有元信息），注意 json 文件是不能有注释的，以下注释仅供参考 */
  {
    "name": "packageName",        // 必须          
    "version": "1.0.0",           // 必须   
    "description": "",
    "main": "index.js",           // 模块的入口文件
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
     
    // 依赖的其他模块
     "dependencies": {
    }
  }
  ```



---
- #### 用 Node.js 执行 JavaScript
  ##### Node.js 提供两种方式执行 JavaScript。命令行模式 和 Node交互模式。
  ```
  D:\Backup\nodeTest> node foo.js                   // 在命令行中执行 foo.js
  D:\Backup\nodeTest> node --use_strict foo.js      // 在命令行中以严格模式执行 foo.js
  <!-- 命令行模式只会执行代码，不会返回结果。如果要输出，需要用 console.log() -->


  D:\Backup\nodeTest> node     // 在命令行中执行 node, 进入node交互模式
  > x = 'Hello' + 'World';     // 在node交互模式中直接输入 JavaScript 代码并执行
  > 'HelloWorld'               // 注意，node交互模式会直接返回执行结果
  ```







---
- #### 模块系统
  ##### 1. 在 Node.js 模块系统中，每个文件都被视为一个独立的模块。
  ##### 2. 每个模块都是独立的命名空间。
  ##### 3. 每模块（文件）都会自动创建一个 module 对象，module 对象会创建一个 exports 属性，初始值是 {}。
  ##### 4. 模块通过 module.experts 对象输出(注意和 exprots 对象的区别)。
  ##### 5. 模块通过 require 方法用于输入。

  ```
  /* helloWorld.js */
  'use strict'
  module.exports.foo = () => console.log('Hello World!');   // 给 experts 对象的 foo 属性赋值
  module.exports.bar = 'bar';                               // 给 experts 对象的 bar 属性赋值


  /* main.js */
  'use strict'
  let helloWorld = require('./helloWorld.js');   // 通过 require 获取 experts 对象，并赋值给
  helloWorld
  helloWorld.foo();                              // 执行 helloWorld(experts) 对象中的 foo 方法
  console.log(helloWorld.bar);                   // 打印 helloWorld(experts) 对象中的 bar 属性
  ```






---
- #### module.exports 和 exports
  ##### 1. exports 对象是对 module.exports 的引用。（exports = module.exports）
  ##### 2. 调用模块调用的是 module.exports 对象的一个深拷贝，所以在被调用模块的值最后一次 exports 之后，就无法改变调用模块获取到的值了。
  ##### 3. 如果 exports 对象出现变更，则会造成 exports != module.exports。所以要注意此时更改 exports 对象将对调用模块无效。
  ##### 4. 需要输出属性时可以使用 module.exports 或 exports。要输出一个新对象，则必须使用 module.exports 。





---
- #### require
  ##### 1. Node.js 使用 CommonJs 规范来进行模块的同步加载。
  ##### 2. require 方法会加载并执行一个JS文件（模块），然后返回该模块的 module.exports 对象，如果没有发现指定模块会报错。
  ##### 3. 模块加载的顺序，按照其在代码中 require 调用的顺序。
  ##### 4. 第一次加载模块时，Node.js会缓存该模块。以后再加载该模块，就直接从缓存取出该模块的 module.exports 属性。
  ##### 5. require 方法根据参数的不同格式，去不同路径寻找模块文件，具体如下：

        以 "/" 开头，则表示通过绝对路径加载模块文件。
        以 "./" 开头，则表示通过相对路径加载模块文件。
        不以 "/" 或 "./" 开头，而直接是模块名称。则表示加载的是一个核心模块（全局安装的包或局部安装在 node_modules 目录的包）
