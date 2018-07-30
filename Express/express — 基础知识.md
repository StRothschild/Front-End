# exprss
> express 是基于 Node.js 的 Web 应用开发框架。它能提供丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件。扩展了通过 Node.js 来构建 Web 应用所需的基本功能。

---
- 1.本地安装 express
  ```
  $ npm install express
  ```




---
- 2.Hello World

  - 安装本地 express

  - 创建 app.js
    ```JavaScript
    // 导入 express 模块
    let express = require('express');

    // 通过 express 模块实例化一个 app 对象
    let app = express();  

    // 配置路由
    app.get('/', function (req, res, next) {
        console.log('Enter callBackFun1 ...');
        // 调用下一个回调函数
        next();
    }, function(req, res){
        console.log('Enter callBackFun2 ...');
        // 返回内容
        res.send('Hello World!');
    });

    // 通过 app 对象启动一个server
    let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;
        console.log('app listening at http://localhost:' + port);
    });
    ```

  - 启动 app
    ```
    $ node app.js
    ```
