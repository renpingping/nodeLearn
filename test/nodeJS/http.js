//	使用node构建web服务器
//	node中有个专门的模块： http
//	http职责是帮助创建编写一个服务器
	
//	1、加载http核心模块
var http = require('http');

// 	2、使用http.createServer()方法创建一个web服务器
//	   返回一个Server实例
var server = http.createServer()
// 	3、监听request请求事件，设置请求处理函数
server.on('request',function(){
	console.log('收到客户端请求');
})
//	4、绑定端口号，启动服务
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来访问');
})