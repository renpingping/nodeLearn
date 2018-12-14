// 初步实现Apache功能
var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function (req, res) {
	var url = req.url
	var wwwDir = 'D:/test/nodeJS'
	var filePath = '/http-helloworld.js';

	if(url !== '/'){
		filePath = url
	}

	fs.readFile(wwwDir + filePath, function(err, data){
		if (err) {
			return res.end('404 Not Found')
		}
		res.end(data)
	})
})

server.listen (3000,function(){
	console.log('running')
})