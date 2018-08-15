// 引入核心模块
const fs = require('fs');
const path = require('path');
// 引入 koa 模块
const koa = require('koa');
const router = require('koa-route');
const static = require('koa-static');

// 实例化 koa
const app = new koa;


// 拦截静态资源请求
let staticPath = path.join(__dirname, 'static');  // Node.js 通过 __dirname 获取当前文件所在目录
app.use(static(staticPath));           // koa-static 会将请求拦截并映射到 staticPath 路径下，比如 localhost:3000/js/bar 就会被映射到 __dirname/static/js/bar 

// 注意：koa-static 中间件在对应目录下查找目标资源失败后会默认返回 index.html。所以如果找不到目标资源且目录下正好有个 index.html 文件，则会被返回。




// 不使用 koa-route 模块来设置路由
const foo = (ctx, next) => {
    if (ctx.request.url == '/') {
		// ctx.set('Content-Type', 'text/html');只能指定 Content-Type,无法指定 charset
        // ctx.response.type 会自动设置 charset ，也可以用 ctx.type = 'text/html; charset=utf-8'; 来明确指定 charset 
        ctx.response.type = 'text/html';
        // 设置返回内容  
  		ctx.response.body = fs.createReadStream('./static/view/index.html');

		// 设置 cookie
	    ctx.cookies.set('timeStamp', 
	    				new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
	    	            {
	    	            	'maxAge': 60*60*24,   // 1天有效期
	    	            	'httpOnly': false
	    	            }
	    );
	}
	// 执行下一个模块
	next();
}
app.use(foo);




// 用 koa-route 模块来设置路由
const bar = router.get('/jsonData', (ctx, next) => {
    // json 数据接口
	ctx.response.type = 'application/json';
	ctx.response.body = {'foo': 'bar'};

	// 设置 cookie
    ctx.cookies.set('timeStamp', 
    				new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
    	            {
    	            	'maxAge': 60*60*24,   // 1天有效期
    	            	'httpOnly': false
    	            }
    );
  	// 执行下一个模块
	next();
});
app.use(bar);




// use 方法直接调用 koa-route 模块
app.use(router.get('/download', (ctx, next) => {
	    // 设置 Content-disposition 为 attachment 实现下载
  		ctx.set('Content-disposition', 'attachment; filename=h5.gif');
  		ctx.response.body = fs.createReadStream('./static/image/h5.gif');
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