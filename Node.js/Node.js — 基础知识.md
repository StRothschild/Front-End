# Node.js 基础知识
#### Node.js 提供基于 V8 引擎的服务器端(系统级) JavaScript 执行环境。
#### Node.js 提供基于 npm 的包管理服务。
#### Node.js 的概念与对比如下图所示：


![Node.js概念图](https://github.com/StRothschild/Front-End/blob/master/Node.js/resouces/Node.js%20%E2%80%94%20%E6%A6%82%E5%BF%B5.jpg?raw=true)




---
- #### 高性能 I/O
  ##### Node.js 的一个主要特点是可以实现基于异步（并行）处理的高性能 I/O。 I/O 的概念包括了从文件系统中读写数据，也包括从数据库中读写数据。




---
- #### package.json 文件
  ##### 每个 Node 项目的根路径下都有一个 package.json 文件，用于定义项目的元数据（比如名称、版本、许可证等），以及所依赖的各种模块。

  ##### package.json 文件可以手工编写，也可以使用 npm init 命令生成。

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
    "license": "ISC"
  }
  ```
