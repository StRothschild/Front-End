## webapck 基本概念
> 基于 node.js 的前端开发、测试、编译、打包工具。

> 通过 webpack 可以将多个静态资源模块打包成一个 js 文件，业务逻辑和资源的加载都在这个打包好的 js 文件中。

> build：整体工程编译；  make: 改动的文件编译；    compile: 单个文件编译   
---
- #### webpack 的安装
    > webpack4 之后的版本需要同时安装 webpack-cli

    ```bash
    $ npm install webpack
    $ npm install webpack-cli     
    ```



---
- #### webpack-dev-server
    > webpack 用于开发的本地服务器插件

    - 启动 webpack-dev-server 并自动打开浏览器 并且指定 host 为 0.0.0.0（其他机器可以通过本机 IP 来访问，不然只能是 localhost 访问）
        ```bash
        $ webpack-dev-server --open --host 0.0.0.0     
        ```



---
- #### webpack.config.js
    ```javascript
    /* 使用 path 模块，可以实现相对于配置文件的路径 */
    const path = require('path');
    module.exports = {
        entry: path.resolve(__dirname, 'main.js'),

        devServer: {
            contentBase: 'src/main/resources/static',
            proxy: {
                /* 前端请求 http://localhose:8080/api/vi/test 代理后变成 http://newsrec.netease.com/zhimei/api/vi/test */
                "/api": {
                    target: "http://newsrec.netease.com/zhimei",
                    changeOrigin: true    /* changes the origin of the host header to the target URL */
                }
            }
        }
    };
    ```


---
- #### webpack + babel
    > webpack 可以通过使用 babel 来将 ES6 的代码转化成 ES5。
