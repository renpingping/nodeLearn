// 为了让目录结构保持统一静态资源，把前端页面放在views文件夹中
// public文件为公共文件夹

// /pinglun?input_name=张三&input_content=今天天气不错
// 像这样的路径 可以通过 url 模块进行获取请求接口路径和查询字符串
// var urlname = url.parse('/pinglun?XXX', true)
// 	urlname.pathname 接口路径
// 	urlname.query 查询字符串
// 	参数 true 可以把插叙字符串转换成对象

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
	
]

http.createServer(function (req, res) {
	var pathObj = url.parse(req.url, true);
	var pathname = pathObj.pathname
	if (pathname === '/') {
		fs.readFile('./views/index.html',function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			var htmlStr = template.render(data.toString(), {
				comments: comments
			})
			res.end(htmlStr)
		})
	} //统一处理public页面开头的文件
	else if (pathname.indexOf('/public/') === 0) {
		fs.readFile('.' + pathname, function(err, data){
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	} else if (pathname === '/post') {
		fs.readFile('./views/post.html', function(err, data){
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	} else if (pathname === '/pinglun') {
		var comment = pathObj.query
		comment.dataTime = new Date().toLocaleString()
		comments.unshift(comment)
		console.log(comment)
		// 如何通过服务器重定向
		//  1.状态码设置为 302 临时重定向
		//  	statusCode 状态码
		//  	301 永久重定向 浏览器会记住
		//  	302 临时重定向 浏览器不记忆
		//  2.在响应头中通过 Location 告诉服务器往哪重定向
		//  	setHeader 响应头
		
		res.statusCode = 302
		res.setHeader('Location', '/')
		res.end()

		/*fs.readFile('./views/index.html',function (err, data) {
			if (err) {
				return res.end('404 Not Found.')
			}
			var htmlStr = template.render(data.toString(), {
				comments: comments
			})
			res.end(htmlStr)
		})*/
	} else {
		fs.readFile('./views/404.html', function(err, data){
			if (err) {
				return res.end('404 Not Found.')
			}
			res.end(data)
		})
	}

}).listen(3030,function(){
	console.log('3030 running !')
})