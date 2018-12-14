/*核心模块：
	fs		文件操作
	http    服务器端操作
	path	路径操作
	os		操作系统操作

*/
var http = require('http');
var server = http.createServer();
var os = require('os');
var path = require('path');

server.listen(80,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000');
})
server.on('request',function(req,res){
	console.log('收到客户端请求,请求路径是：',req.url);
	res.end(JSON.stringify(os.cpus())+'/n'+os.totalmem());
})

//cpu 信息
//console.log(os.cpus());

//memory 内存
//console.log(os.totalmem());
//获取路径后缀名
console.log(path.extname('c:/1/2/sdf/ads.txt'))

//require()方法可以引用执行其他js文件
//相对路径必须加 ./，否则报错。
//可以省略后缀名
//在node中，没有全局作用域，只有模块作用域
//	外部访问不到内部，内部也访问不到外部
//	默认都是封闭的
//	
//exports可以引用其他js文件中的变量
//
//IP地址用来定位计算机
//端口号用来定位具体的应用程序
//端口号范围为 0~65536 之间
//

// 对照查询读取文件类型 (HTTP Content-type) http://tool.oschina.net/commons