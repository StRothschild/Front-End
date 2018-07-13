'use strict'

// 核心模块:
let http = require('http'),
	url = require('url'),
	fs = require('fs'),
    querystring = require('querystring');

// 要获取的文本的路径
let filePath = 'index.html';

// 创建 http server
let server = http.createServer(function (req, res) {
    if (req.url == '/index') {
	    // 获取文件状态
	    fs.stat(filePath,  function (err, stats) {
	        if (!err && stats.isFile()) {
	            // 设置 200 响应码
	            res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
	            // 将文件流导入 response，并且会自动 end
	            fs.createReadStream(filePath).pipe(res);
	        } else {
	            // 出错或者文件不存在
	            console.log(err);
	            // 设置 404 响应码
	            res.writeHead(404);
	            // 设置响应体
	            res.write('404 Not Found');
	            // 结束
	            res.end();
	        }
	    });
	} else if (req.url == '/data') {
		// 由于 request body 是分块的，所以每当接收到 request body 的数据时，都添加到临时变量 body 中存储
		let body = '';
	    req.on('data', function (chunk) {
	    	console.log("Into req.data");
	    	// 此处一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
	        body += chunk;   
	        console.log("chunk:", chunk);
	    });

		// 在end事件触发后，通过 querystring.parse 将post解析为真正的POST请求格式
	    req.on('end', function () {
	    	console.log("Into req.end");
	        // 解析参数
	        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
	        console.log("queryBody:", body);
	    });


	    // 将HTTP响应码写入response, 同时设置Content-Type
    	res.writeHead(200, {
    		'Content-Type': 'application/json'
    	});

	    // 在结束 http 请求的同时，将响应的内容写入 response
	    res.end("{'resultMsg':'Hello world!','resultArray':[2,3,4]}");
    }
});

// 服务器开启监听8080端口:
server.listen(8080, function () {
  	console.log('Server start listening ...');
});