var express = require('express')
var path = require('path')
var artTemplate = require('art-template')
var bodyParser = require('body-parser')
var session = require('express-session')
var router = require('./router')

var app = express()

app.use('/node_modules/', express.static(path.join(__dirname, './node_modules')))
app.use('/public/', express.static(path.join(__dirname, './public')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views'))    // 默认访问页面路径就是 ./views 目录

// 配置解析表单 post 请求体插件 （注意：一定要在 路由挂载之前）
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// 通过req.session 来访问和设置session 成员
// 添加 session 数据：req.session.foo = 'bar'
// 访问 session 数据：req.session.foo
app.use(session({
	secret: 'keyboard cat', // 配置加密字符串，目的是为了增加安全性，防止客户端恶意伪造
	resave: false,
	saveUninitiallized: true  // 无论是否使用 session，都会默认生成
}))

app.use(router)

app.listen('3000',function () {
	console.log('3000 port is running ...')
})