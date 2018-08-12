// 引入核心模块
const fs = require('fs');
const koa = require('koa');
const router = require('koa-route');
const serve = require('koa-static');

// 实例化 koa
const app = new koa;


// 不使用 koa-route 模块来设置路由
const first = (ctx, next) => {
    if (ctx.request.url == '/') {
		// ctx.set('Content-Type', 'text/html');只能指定 Content-Type,无法指定 charset
        // ctx.response.type 会自动设置 charset ，也可以用 ctx.type = 'text/html; charset=utf-8'; 来明确指定 charset 
        ctx.response.type = 'text/html';
        // 设置返回内容  
  		ctx.response.body = fs.createReadStream('./src/index.html');
	}

	// 执行下一个模块
	next();
}
app.use(first);



// 获取静态文件
const staticResource = serve(__dirname + '/src/vendor');  // __dirname 为绝对路径前缀
app.use(staticResource);


// 返回js文件。默认 content-type 既可
// ctx.response.body = fs.createReadStream('./src/index.js');



// 用 koa-route 模块来设置路由
const third = router.get('/jsonData', (ctx, next) => {
    // json 数据接口
	ctx.response.type = 'application/json';
	ctx.response.body = {'foo': 'bar'};

  	// 执行下一个模块
	next();
});
app.use(third);


// use 方法直接调用 koa-route 模块
app.use(router.get('/setCookie', (ctx, next) => {
  		// 设置 cookie
	    ctx.cookies.set('sessionId', 
	    				new Date().getTime(),
	    	            {
	    	            	'maxAge': 60*60*24,   // 1天有效期
	    	            	'httpOnly': false
	    	            }
	    );

	    // 执行下一个模块
	    next();
	})
);



// 通过 app 对象启动一个server
const server = app.listen(3000, function () {
	const host = server.address().address;
	const port = server.address().port;
    console.log('app listening at http://localhost:' + port);
});