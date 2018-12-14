var http = require('http');

var server = http.createServer();
// 	request 请求事件处理函数，需要接受两个参数：
// 		Request 请求对象
// 			请求对象可以用来获取客户端的一些请求信息，例如请求路径
// 		Response 响应对象
// 			响应对象可以用来给客户端发送相应消息
server.on('request',function(request,response){
	console.log('收到客户端请求,请求路径是：'+ request.url);
	// response 对象有一个方法：write可以用来给客户端发送响应数据
	// write可以使用多次，但最后一定要使用end来结束响应，否则客户端回一直等待
	
	/*if (request.url == '/haha') {
		response.write('hello');
	}else if(request.url == '/login'){
		response.write('login');
	}else if(request.url == '/info'){
		response.write('info');
	}else{
		response.write('nodejs');
	}
	//response.write('hello');
	
	// 结束响应
	response.end();*/

	//上面的方式比较麻烦，基本不用。可以结束时直接发送响应
	//response.end('hello world'); 

	//根据不同请求路径发送不同响应
	//1、获取请求路径
	//	request.url 获取的路径都是端口号后面的路径
	//	也就是说所有的 url 都是以/开头的
	//2、判断路径处理响应
	
	var url = request.url;
	/*if(url === '/'){
		response.end('index page');
	}else if(url === '/login'){
		response.end('login page');
	}else if(url === '/info'){
		response.end('info page');
	}else{
		response.end('404 Not Found.');
	}*/
	if (url === '/products') {
		var products =[
			{
				name:'苹果 X',
				price: 8934
			},
			{
				name:'菠萝 X',
				price: 24634
			},
			{
				name:'葡萄 X',
				price: 5634
			}
		]
		//	响应内容只能是二进制数据或者字符串
		//	数字
		//	对象
		//	数组
		//	布尔值
		//	都要转换成字符串
		response.end(JSON.stringify(products));
	}
});
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来访问');
});
