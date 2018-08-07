let fs = require('fs');
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


// 获取
const main = ctx => {
    if (ctx.request.url == '/') {
		ctx.response.body = 'Hello World!';
	} else if (ctx.request.url == '/index') {
		ctx.set('Content-Type', 'text/html');
  		ctx.response.body = fs.createReadStream('./static/index.html');
	} else if (ctx.request.url == '/index.js') {
		//ctx.set('Content-Type', 'text/plain');
  		ctx.response.body = fs.createReadStream('./static/index.js');
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