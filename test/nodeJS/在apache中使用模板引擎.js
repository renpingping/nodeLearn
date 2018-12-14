// ApacheDir.js
// 初步实现Apache目录功能
var http = require('http')
var fs = require('fs')
var template = require('art-template');

var server = http.createServer()

var wwwDir = 'D:/test/nodeJS'

server.on('request',function (req, res) {
	var url = req.url

	fs.readFile('./dir_apache.html', function(err, data){
		if (err) {
			return res.end('404 Not Found')
		}

		fs.readdir('D:/test/nodeJS', function(err, files){
			if (err) {
				return console.log('目录不存在')
			}
			var htmlStr = template.render(data.toString(), {
				title: '哈哈哈',
				files: files
			})
			
			res.end(htmlStr)
		})
	})
})

server.listen (3000,function(){
	console.log('running')
})

/*

	- fs.readdir 读取文件名、目录名
	- 模板引擎  把读取到的信息放到模板中

*/