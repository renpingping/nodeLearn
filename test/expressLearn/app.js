// 1. 引包
var express = require('express')

// 2. 创建服务器应用程序
// 		相当于 http.createServer
var app = express()

// 静态资源 （公开指定目录）
// 	第一种：
// 这样就可以通过 /public/xx 的方式访问 public 目录中的所有资源
//app.use('/public/', express.static('./public/'))	
//app.use('/static/', express.static('./static/'))
//
//	第二种：
// 当省略第一个参数的时候，则可以通过省略 ./public 的方式来请求
//app.use(express.static('./public/'))	
//
//	第三种
// 必须通过 /a/public中的具体路径 来访问，其实是给public起一个别名
// app.use('/a/', express.static('./public/'))
app.get('/', function (req, res) {
	console.log(req.query) //req.query 获取查询字符串参数
	//在express中使用模板引擎方式：res.render('文件名', {模板对象})
	//去看 art-template 官方文档：如何让art-template结合express使用
	res.send('hello express')
})
app.get('/about', function (req, res) {
	res.send('I am about ')
})
app.get('/login', function (req, res) {
	res.send('I am login ')
})
app.listen('3000', function () {
	console.log('app is running at port 3000.')
})