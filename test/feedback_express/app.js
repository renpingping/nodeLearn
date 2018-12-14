var express = require('express')
var template = require('art-template')
var fs = require('fs')
var bodyParser = require('body-parser')

var app = express()
// 配置模板引擎
app.engine('html', require('express-art-template'))
// 修改默认的路径,第一个参数是固定的，第二个参数是修改的路径
// app.set('views', 'html')

// 配置body-parserz中间件
// 
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

var comments = []

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/views/', express.static('./views/'))

app.get('/', function (req, res) {
	res.render('index.html',{
		comments: comments
	})
})
app.get('/post',function (req, res) {
	res.render('post.html')
})
app.post('/post',function (req, res) {
	console.log('post require')
	// 1. 获取表单post请求体数据
	// 2. 处理
	// 3. 发送请求
	var comment = req.body
	comment.dataTime = new Date().toLocaleString()
	comments.unshift(comment)
	res.redirect('/')
})
// app.get('/pinglun',function (req, res) {
// 	var comment = req.query
// 	comment.dataTime = new Date().toLocaleString()
// 	comments.unshift(comment)
// 	/*console.log(comment)
// 	res.statusCode = 302
// 	res.setHeader('Location', '/')
// 	res.end()*/
// 	res.redirect('/')
// })
app.listen('3000',function () {
	console.log('app is running at port 3000.')
})
