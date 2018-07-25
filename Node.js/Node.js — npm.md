# npm
> npm（node package manage） 是 Node.js 的包管理工具，会随同 Node.js 一起被安装。

> 环境变量会在安装 Node.js 时自动配置，所以 'node' 和 'npm' 可以在命令行中直接执行。


---
- #### cnpm
  > cnpm 是淘宝提供的国内 npm 仓库镜像。

  - 1.安装 cnpm 模块，并指定远程仓库地址
    ```
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

  - 2.通过 cnpm 安装模块
    ```
    $ cnpm install <name>
    ```

  - 3.通过 cnpm 来安装模块时，如果发现该模块还没有被同步到 cnpm 的仓库时, cnpm 会要求从官方 npm 的 https://registry.npmjs.org 仓库中下载安装，并且在后台将包自动同步到 cnpm 仓库中。当下次再安装这个模块的时候, 就会直接从 cnpm 下载了。



---
- #### npm 的安装
  > Node.js已经集成了 npm，所以 npm 也会被一并安装。

  - 1.查看 npm 的配版本
    ```
    $ npm -v     
    ```

  - 2.升级 npm 版本
    ```
    $ npm i npm     
    ```



---
- #### npm 的配置
  - 1.查看 npm 的配置
    ```
    $ npm config ls      
    ```

  - 2.查看 npm 所有的 cli config、 user config、default value（返回的数据里分号代表注释）
    ```
    $ npm config ls -l      
    ```




---
- #### npm 包的安装/卸载
  > npm 中的包，也可以理解为一个模块，类似于 Java 中的 jar 包。
  - 1.安装本地 npm 包
    ```
    $ npm install <packageName>
    ```
  - 2.安装全局 npm 包，用 -g 参数来代表 glabol
    ```
    $ npm install <packageName> -g
    $ npm install --global <packageName>
    ```
  - 3.卸载本地 npm 包
    ```
    $ npm uninstall <packageName>
    ```
  - 4.卸载全局 npm 包
    ```
    $ npm uninstall <packageName> -g
    $ npm uninstall --global <packageName>
    ```
  - 5.基于 package.json 依赖配置（dependencies 和 devDependencies）的包安装，详见 package.json 介绍
    ```
    $ npm install
    ```
  - 6.--save 参数会将包写入到 package.json 的 dependencies
    ```
    $ npm install <packageName> --save
    ```
  - 7.--save-dev 参数会将包写入到 package.json 的 devDependencies
    ```
    $ npm install <packageName> --save-dev
    ```

  - 可选参数 --save 和 --save-dev 的作用在于，即使删除了项目的 node_modules 文件夹，依然可以通过 package.json 内保存的依赖配置，用 npm intall 命令来恢复 node_modules 文件夹。

  - 使用原则: 运行时需要用到的包使用 --save, 否则使用 --save-dev。





---
- #### npm 包的存放路径
  - 1.npm 包的安装分为本地安装（local）和 全局安装（global）。

  - 2.本地安装的 npm 包，会被下载至在当前命令行所在路径下的 node_module 目录中。

  - 3.全局安装的 npm 包，会被下载至 prefix 属性设置的路径下。此属性值可以通过 npm config ls -l 查看。

  - 4.本地安装的 npm 包可以在代码中通过 require 调用。而全局安装的 npm 包需要在命令行中调用。

  - 5.通过 npm config ls -l 查看 prefix 参数的值
    ```
    $ npm config ls -l
    ```

  - 6.全局 npm 包在 Windows 中的默认下载路径
    ```
    prefix 默认值为: "C:\Users\<userName>\AppData\Roaming\npm"
    windwos 中 npm 包的默认地址为: {prefix}\node_modules
    Linux 中 npm 包的默认地址为: {prefix}/lib/node_modules
    ```

  - 7.全局 npm 包的默认 cache 路径
    ```
    cache 默认值为: "C:\Users\<userName>\AppData\Roaming\npm-cache
    npm 包的默认: cache 地址为: {cache}
    ```






---
- #### 修改 npm 全局包存放的默认路径
  - 1.查看当前全局 npm 包的默认下载路径
    ```
    $ npm config get prefix
    ```
  - 2.修改全局 npm 包的默认下载路径
    ```
    $ npm config set prefix <path>
    ```

  - 3.查看当前全局 npm 包的默认下载路径
    ```
    $ npm config get cache
    ```
  - 4.修改全局 npm 包的默认 cache 路径
    ```
    $ npm config set cache <path>
    ```






---
- #### 本地/全局 npm 包的区别
  - 1.本地安装的包，可以通过模块名，在工程中通过 require() 方法直接引入。

  - 2.全局安装的包，不可以直接在工程中引用，需要在命令行中使用。这样做，虽然可以多个工程共用一个包，避免包的重复，但不利于版本控制，所以只在有命令行需求时使用。所以一般不推荐安装全局包。

  - 3.如果需要兼有两者的功能，可以用两种方法各安装一次。或使用 npm link 将全局包和本地包做一个软链接。

  - 4.如果当前路径是在包路径下，可以直接使用 npm link 将当前包链接到全局的同名包上。
    ```
    $ npm link
    ```

  - 5.如果不在包路径下，则需要使用 npm link <packageName> 命令。如果在全局包目录下不存在同名包, 那么 npm 就会先在全局安装这个包。当全局包存在后，复制这个包到当前路径的 node_modules 目录（如果没有会自动创建）下，同时建立本地包到全局包的软链接。
    ```
    $ npm link <packageName>
    ```




---
- #### 包的内容
  > 一个规范的包目录结构一般有如下几个目录和文件:

  - package.json（包描述文件）

  - bin（存放可执行的二进制文件目录）

  - lib（存放JS代码的文件目录）

  - doc（存放文档的文件目录）

  - test（存放单元测试的文件目录）




---
- #### package.json 文件
  - 1.每个 Node 项目的根路径下都有一个 package.json 文件，用于定义项目的元数据(比如名称、版本、许可证)以及所依赖的各种模块。

  - 2.package.json 文件可以手工编写，也可以使用 npm init 命令生成（参见 npm init 命令）。

  - 3.在 package.json 所在的目录下执行 npm install 命令时，npm 就会根据这个文件来自动下载所需的模块，也就是配置项目所需的运行和开发环境。

  - 4.以下是通过 $ npm init 生成的 package.json（仅有元信息），注意 json 文件是不能有注释的，以下注释仅供参考:
    ```
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
     
       "dependencies": {            // 依赖的其他模块
      }

      "devDependencies": {          // 开发时依赖的其他模块
      }
    }
    ```






---
- #### npm init
  > 用来初始化并生成一个新的 package.json 文件。

  - 如果使用了 -f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的 package.json 文件。npm init -y 产生的 package.json 结果如下:
    ```
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
