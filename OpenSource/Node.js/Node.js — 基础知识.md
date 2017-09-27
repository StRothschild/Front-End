# Node.js 基础知识
#### Node.js 是基于 V8 引擎的服务器端 JavaScript 执行环境。

---
- #### npm
  ##### npm（node package manage） 是 Node.js 的包管理工具。

---
- #### cnpm
  #### cnpm 是淘宝提供的国内 npm 仓库镜像。
  #### 通过 cnpm 安装模块时，如果发现该模块还没有被同步到来, cnpm 会要求从官方 npm 的 https://registry.npmjs.org 仓库中下载安装，并且在后台将包自动同步到 cnpm 仓库中。当下次再安装这个模块的时候, 就会直接从 cnpm 下载了。
  ``` node
  // 安装 cnpm 模块，并指定仓库地址为 https://registry.npm.taobao.org
  $ npm install -g cnpm --registry=https://registry.npm.taobao.org

  // 通过 cnpm 安装模块
  $ cnpm install [name]
  ```
