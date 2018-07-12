# npm
> npm（node package manage） 是 Node.js 的包管理工具，会随同 Node.js 一起被安装。



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
- #### npm 的安装
  > Node.js已经集成了 npm，所以 npm 也已经一并安装好了
  ```
  /* 查看 npm 的配置 */
  $ npm -v     

  /* 升级 npm 版本 */
  $ npm i npm     
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
  ##### 全局安装的 npm 包，会被下载至 prefix 属性设置的路径下。此属性值可以通过 npm config ls -l 查看。
  ##### 本地安装的 npm 包可以在代码中通过 require 调用。全局安装的 npm 包可以在命令行中直接调用。
  ```
  /* 全局 npm 包在 Windows 中的默认下载路径 */
  prefix 默认值为: "C:\Users\<userName>\AppData\Roaming\npm"
  {prefix}\node_modules

  /* 全局 npm 包在 Linux 中的默认下载路径 */
  {prefix}/lib/node_modules

  /* 修改全局 npm 包的默认下载路径 */
  $ npm config set prefix <path>
  ```





---
- #### 本地/全局 npm 包的区别
  ##### 本地安装的包，可以通过模块名，在工程中通过 require() 直接引入。
  ##### 全局安装的包，需要在命令行中使用。这样做，虽然可以多个工程共用一个包，避免包的重复，但不利于版本控制，所以不建议初学者使用。
  ##### 如果需要兼有两者的功能，可以用两种方法各安装一次。或使用 npm link 将全局包和本地包做一个软链接。
  ```Node
  /* 如果当前路径是在包路径下，可以直接使用 npm link 将当前包链接到全局的同名包上 */
  $ npm link

  /* 如果不在包路径下，则需要使用 npm link <packageName> 命令。如果在全局包目录下不存在同名包, 那么 npm 就会先在全局安装这个包。当全局包存在后，复制这个包到当前路径的 node_modules 目录（如果没有会自动创建）下，同时建立本地包到全局包的软链接 */
  $ npm link <packageName>
  ```








---
- #### npm init
  ##### 用来初始化并生成一个新的 package.json 文件。如果使用了 -f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的 package.json 文件。
  ```Node
  /* npm init -y 产生的 package.json 结果如下 */
  {
    "name": "foldName",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  ```
