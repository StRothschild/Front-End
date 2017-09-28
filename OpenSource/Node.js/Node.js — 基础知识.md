# Node.js 基础知识
#### Node.js 是基于 V8 引擎的服务器端 JavaScript 执行环境。

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
  $ cnpm install [name]
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
  $ npm install [packageName]

  /* 安装全局 npm 包，用 -g 参数来代表 glabol */
  $ npm install [packageName] -g

  /* 卸载本地 npm 包 */
  $ npm uninstall [packageName]

  /* 卸载全局 npm 包 */
  $ npm uninstall [packageName] -g
  ```




---
- #### npm 包的存放路径
  ##### npm 包的安装分为本地安装（local）和 全局安装（global）。
  ##### 本地安装的 npm 包，会被下载至在当前命令行所在路径下的 node_module 目录中。
  ##### 全局安装的 npm 包，会被下载至 prefix 属性设置的路径下。此属性值可以通过  npm config ls 查看。
  ```
  /* 全局 npm 包在 windows 中的默认下载路径 */
  C:\Users\[userName]\AppData\Roaming\npm\node_modules

  /* 修改全局 npm 包的默认下载路径 */
  $ npm config set prefix [path]
  ```





---
- #### 本地/全局 npm 包的区别
  ##### 
