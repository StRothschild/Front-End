let fs = require('fs');
//let cookies = require('cookies');
let koa = require('koa');
let app = new koa;

// const one = (ctx, next) => {
//   console.log('>> one');
//   next();
//   console.log('<< one2');
// }

// const two = (ctx, next) => {
//   console.log('>> two');
//   //next();
//   console.log('<< two2');
// }

// const three = (ctx, next) => {
//   console.log('>> three');
//   next();
//   console.log('<< three2');
// }

// app.use(one);
// app.use(two);
// app.use(three);



// 入口方法
const main = ctx => {
    if (ctx.request.url == '/') {
		ctx.response.body = 'Hello World!';
	} else if (ctx.request.url == '/index') {
		// ctx.set('Content-Type', 'text/html');只能指定 Content-Type,无法指定 charset
        // ctx.response.type 会自动设置 charset ，也可以用 ctx.type = 'text/html; charset=utf-8'; 来明确指定 charset 
        ctx.response.type = 'text/html';
        
        // 设置返回内容  
  		ctx.response.body = fs.createReadStream('./static/index.html');
	} else if (ctx.request.url == '/index.js') {
		// 默认的 Content-Type 为
  		ctx.response.body = fs.createReadStream('./static/index.js');
	} else if (ctx.request.url == '/name') {
	    // set a cookie
	    ctx.cookies.set('maxAge', 
	    				'666',
	    	            {
	    	            	// 'maxAge': Date.now(),
	    	            	// 'httpOnly': false
	    	            });

		ctx.response.body = {name: 'test'};
	}
}






// const second = router.get('/about', function(req, res) {
//   	res.send('About Page');
// });

app.use(main);

// 通过 app 对象启动一个server
let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;
    console.log('app listening at http://localhost:' + port);
});