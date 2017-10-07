# Node.js 基础知识
#### Node.js 提供基于 V8 引擎的服务器端(系统级) JavaScript 执行环境。
#### Node.js 提供基于 npm 的模块管理服务。


---
- #### 高性能 I/O
  ##### Node.js 的一个主要特点是可以实现基于异步（并行）处理的高性能 I/O。 I/O 的概念包括了从文件系统中读写数据，也包括从数据库中读写数据。



---
- #### npm
  ##### npm（node package manage） 是 Node.js 的包管理工具，会随同 Node.js 一起被安装。




---
- #### cnpm
  #### cnpm 是淘宝提供的国内 npm 仓库镜像。
  #### 通过 cnpm 安装模块时，如果发现该模块还没有被同步到来, cnpm 会要求从官方 npm 的 https://registry.npmjs.org 仓库中下载安装，并且在后台将包自动同步到 cnpm 仓库中。当下次再安装这个模块的时候, 就会直接从 cnpm 下载了。
  ``` node
  /* 安装 cnpm 模块，并指定远程仓库地址 */
  $ npm install -g cnpm --registry=https://registry.npm.taobao.org

  /* 通过 cnpm 安装模块 */
  $ cnpm install <name>
  ```




---
- #### npm 的配置
  ```
  /* 查看 npm 的配置 */
  $ npm config ls      

  /* 查看 npm 所有的默认配置 */
  $ npm config ls -l      
  ```





---
- #### npm 包的安装/卸载
  ##### npm 中的包，也可以理解为一个模块，类似于 Java 中的 jar 包。
  ```
  /* 安装本地 npm 包 */
  $ npm install <packageName>

  /* 安装全局 npm 包，用 -g 参数来代表 glabol */
  $ npm install <packageName> -g
  $ npm install --global <packageName>

  /* 卸载本地 npm 包 */
  $ npm uninstall <packageName>

  /* 卸载全局 npm 包 */
  $ npm uninstall <packageName> -g
  $ npm uninstall --global <packageName>


  /* 基于 package.json 依赖配置（dependencies 和 devDependencies）的包安装，详见 package.json 介绍 */
  $ npm install
  /* --save 参数会将包写入到 package.json 的 dependencies */
  $ npm install <packageName> --save
  /* --save-dev 参数会将包写入到 package.json 的 devDependencies */
  $ npm install <packageName> --save-dev

  // --save 和 --save-dev 参数的好处在于，即使删除了项目的 node_modules，依然可以通过 package.json 内保存的依赖配置，用 $ npm intall 命令来恢复 node_modules。
  ```




---
- #### npm 包的存放路径
  ##### npm 包的安装分为本地安装（local）和 全局安装（global）。
  ##### 本地安装的 npm 包，会被下载至在当前命令行所在路径下的 node_module 目录中。
  ##### 全局安装的 npm 包，会被下载至 prefix 属性设置的路径下。此属性值可以通过  npm config ls 查看。
  ```
  /* 全局 npm 包在 Windows 中的默认下载路径 */
  prefix = "C:\Users\<userName>\AppData\Roaming\npm"
  {prefix}\node_modules

  /* 全局 npm 包在 Linux 中的默认下载路径 */
  {prefix}/lib/node_modules

  /* 修改全局 npm 包的默认下载路径 */
  $ npm config set prefix <path>
  ```





---
- #### 本地/全局 npm 包的区别
  ##### 本地安装的包，可以在工程中通过 require() 来引入。
  ##### 全局安装的包，可以直接在命令行中使用。
  ##### 如果需要兼有两者的功能，可以用两种方法各安装一次。或使用 npm link 将全局包和本地包做一个软链接。
  ```Node
  /* 如果当前路径是在包路径下，可以直接使用 npm link 将当前包链接到全局的同名包上 */
  $ npm link

  /* 如果不在包路径下，则需要使用 npm link <packageName> 命令。如果在全局包目录下不存在同名包, 那么 npm 就会先在全局安装这个包。当全局包存在后，复制这个包到当前路径的 node_modules 目录（如果没有会自动创建）下，同时建立本地包到全局包的软链接 */
  $ npm link <packageName>
  ```






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
