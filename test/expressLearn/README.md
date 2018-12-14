# express
## 修改完代码自动重启
	可以使用第三方的命令行工具，`nodemon` 来解决频繁修改代码重启服务器问题
	`nodemon` 是一个基于Node.js开发的，需要独立安装：
		npm install --global nodemon 
	安装后，使用：
	```node app.js
		# 使用 nodemon
		nodemon app.js
	```
	当文件变化时，它会自动重启服务器
## express 基本路由
	路由其实就是一张表，有具体的映射关系
	请求路径 + 请求方法 + 请求处理函数
	get:
		```
			app.get('/', function(req, res){
				res.send('for get /')
			})
		```
	post:
		```
			app.get('/', function(req, res){
				res.send('for post /')
			})
		```
##  静态资源 （公开指定目录）
	- 第一种：
        这样就可以通过 /public/xx 的方式访问 public 目录中的所有资源
       	app.use('/public/', express.static('./public/'))	
       	app.use('/static/', express.static('./static/'))
       
    - 第二种：
        当省略第一个参数的时候，则可以通过省略 ./public 的方式来请求
       	app.use(express.static('./public/'))	
       
    - 第三种
        必须通过 /a/public中的具体路径 来访问，其实是给public起一个别名
        app.use('/a/', express.static('./public/'))

## express 使用
	[art-template-官网]
	- 安装
	- 配置
		app.engine('html',require('express-art-template'))
		第一个参数表示，当渲染以 .html 结尾的文件的时候，使用 art-template 模板引擎
		第一个参数也可以是 .art 结尾文件，查找时去找 .art 文件
		express 为 response 相应对象提供了一个方法：render
		render方法默认是不可用的，但是如果配置了模板引擎就可以使用

		res.render('html模板名', {模板数据})
		第一个参数名不能写路径，默认会去项目中的views目录查找该项目文件
		也就是，express 有一个约定，开发人员把所有的视图文件都放到views目录中

		// 修改默认的路径,第一个参数是固定的，第二个参数是修改的路径
		app.set('views', 'html')

## 在 express 中获取 get 请求体数据
	req.query
## 在 express 中获取 post 请求体数据
	安装一个 body-parser 插件
	安装：
		npm install --save body-parser
	配置：
		var bodyParser = require('body-parser')
		通过 req.body 就可以来获取表单 post 请求体数据

## body-parser 解析表单 post 请求体

## 封装异步API
	定时器是异步的，不会等它结束，下面的代码就会执行

	### 如果需要获取一个函数中异步操作的结果，则必须通过回调函数获取
	如：
	```
		function fu(callback){
			// 现在相当于 var callback = funtion (data) { console.log(data) }
			setTimeout(function() {
				var data = "hello"
				callback(data)
			},1000)
		}

		fn(function(data){
			console.log(data)
		})

	```

## 自己编写的步骤
- 处理模板
- 配置开放静态资源
- 配置模板引擎
- 简单路由： /students 渲染静态
- 路由设计
- 提取路由模块
- 由于接下来的业务操作需要处理文件数据，所以要封装 student.js
- 先写好 student.js 文件结构
	+ 查询所有学生列表的 API find
	+ findById
	+ save
	+ update
	+ delete
- 实现具体功能
	+ 通过路由收到请求
	+ 接收请求中的数据（get、post）
		* req.query
		* req.body
	+ 调用数据操作 API 处理数据
	+ 根据操作结果给客户端发送响应

## 异步操作
	- setTimeout
	- readFile
	- writeFile
	- readdir
	- ajax
	往往异步 API 都伴随一个回调函数
	需要得到其内部异步操作的结果

	这种情况必须通过：回调函数
	```
		function add(x, y, callback){
			setTimeout(function(){
				var ret = x + y
				callback(ret)
			}, 1000)
		}
		add(10, 20, function (result) {
			console.log(result) // 回调函数获取到 ret 的值
		})

	```