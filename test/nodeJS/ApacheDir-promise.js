// ApacheDir.js
// 初步实现Apache目录功能
var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/gitTest/nodeLearn/test/nodeJS'
var filePath = './dir.html'

server.on('request',function (req, res) {
	var url = req.url

	preadFile (filePath)
	.then(function (data) {
		fs.readdir(wwwDir, function(err, files){
			if (err) {
				return console.log('目录不存在')
			}
			var content = ''
			files.forEach(function(item){
				// 在 EcmaScript 6 的`(反引号)中，可以用 ${ } 来引用变量
				content += `
					<tr>
				      <td data-value="test/">
				        <a class="icon dir" href="/D:/test/nodeJS/test/">${item}/</a>
				      </td>
				      <td class="detailsColumn" data-value="0"></td>
				      <td class="detailsColumn" data-value="1544001195">2018/12/5 下午5:13:15</td>
				    </tr>
				`
			})
			data = data.toString().replace('^_^', content)
			
			res.end(data)
		})
	})

})

function preadFile (filePath) {
	return new Promise(function (resolve, reject) {
		fs.readFile('./dir.html','utf8', function(err, data){
			if (err) {
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}
server.listen (3000,function(){
	console.log('running')
})

/*

	- fs.readdir 读取文件名、目录名
	- 模板引擎  把读取到的信息放到模板中

*/