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





---
- 3.Router

  - 创建 router.js
    ```JavaScript
    // 导入 express 模块
    let express = require('express');
    // 获取 Router 对象
    let router = express.Router();

    // 定义主页面的路由
    router.get('/', function(req, res) {
      res.send('Home Page');
    });
    // 定义 about 页面的路由
    router.get('/about', function(req, res) {
      res.send('About Page');
    });

    module.exports = router;
    ```


  - 创建 app.js
    ```JavaScript
    // 导入 express 模块
    let express = require('express');
    // 导入 router.js
    let router = require('./router');

    // 通过 express 模块实例化一个 app 对象
    let app = express();  
    // 使用 router 作为 app 的路由,
    app.use(router);
    // 也可以在所有 router 匹配的 url 之前加一个前缀
    //app.use('/independenRouter', router);



    // 通过 app 对象启动一个server
    let server = app.listen(8080, function () {
    let host = server.address().address;
    let port = server.address().port;
      console.log('app listening at http://localhost:' + port);
    });
    ```



  - 启动 app 后访问
    ```JavaScript
    $ node app.js

    // 有前缀
    localhost:8080/independentRouter                  => 'Home Page'
    // 无前缀
    localhost:8080/independentRouter/about            => 'About Page'  
    ```
