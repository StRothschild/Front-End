// 引入核心模块
const fs = require('fs');
const path = require('path')
const koa = require('koa');
//const router = require('koa-route');
const static = require('koa-static');

// 实例化 koa
const app = new koa;




// // 用 koa-route 模块来设置路由
// const bar = router.get('/jsonData', (ctx, next) => {
//     // json 数据接口
// 	ctx.response.type = 'application/json';
// 	ctx.response.body = {'foo': 'bar'};

//   	// 执行下一个模块
// 	next();
// });
// app.use(bar);


// // use 方法直接调用 koa-route 模块
// app.use(router.get('/setCookie', (ctx, next) => {
//   		// 设置 cookie
// 	    ctx.cookies.set('sessionId', 
// 	    				new Date().getTime(),
// 	    	            {
// 	    	            	'maxAge': 60*60*24,   // 1天有效期
// 	    	            	'httpOnly': false
// 	    	            }
// 	    );

// 	    // 执行下一个模块
// 	    next();
// 	})
// );





// 获取静态文件
//const staticResource = ;  // __dirname 为当前文件所在目录
console.log(path.join(__dirname));
app.use(static(path.join(__dirname)));



// 不使用 koa-route 模块来设置路由
// const foo = (ctx, next) => {
//     if (ctx.request.url == '/') {
// 		// ctx.set('Content-Type', 'text/html');只能指定 Content-Type,无法指定 charset
//         // ctx.response.type 会自动设置 charset ，也可以用 ctx.type = 'text/html; charset=utf-8'; 来明确指定 charset 
//         ctx.response.type = 'text/html';
//         // 设置返回内容  
//   		ctx.response.body = fs.createReadStream('./index.html');
// 	}

// 	// 执行下一个模块
// 	next();
// }
// app.use(foo);


// 返回js文件。默认 content-type 既可
// ctx.response.body = fs.createReadStream('./src/index.js');




// 通过 app 对象启动一个server
const server = app.listen(3000, function () {
	const host = server.address().address;
	const port = server.address().port;
    console.log('app listening at http://localhost:' + port);
});