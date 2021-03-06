# express
## 修改完代码自动重启

可以使用第三方的命令行工具，`nodemon` 来解决频繁修改代码重启服务器问题
`nodemon`是一个基于Node.js开发的，需要独立安装：

	npm install --global nodemon                   

安装后，使用：

```javascript

node app.js
# 使用 nodemon
nodemon app.js

```
当文件变化时，它会自动重启服务器

## express 基本路由

路由其实就是一张表，有具体的映射关系
请求路径 + 请求方法 + 请求处理函数

get:

```javascript
app.get('/', function(req, res){
	res.send('for get /')
})

```
post:

```javascript
app.get('/', function(req, res){
	res.send('for post /')
})

```
##  静态资源 （公开指定目录）
- 第一种：
    这样就可以通过 /public/xx 的方式访问 public 目录中的所有资源

```javascript   	
app.use('/public/', express.static('./public/'))	
app.use('/static/', express.static('./static/'))
```
   
- 第二种：
    当省略第一个参数的时候，则可以通过省略 ./public 的方式来请求

```javascript      	
app.use(express.static('./public/'))	
```

- 第三种
    必须通过 /a/public中的具体路径 来访问，其实是给public起一个别名

```javascript       
app.use('/a/', express.static('./public/'))
```

## express 使用
[art-template-官网](http://aui.github.io/art-template)
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

```shell 
npm install --save body-parser 

```

配置：

```shell
var bodyParser = require('body-parser') 

 ```
通过 req.body 就可以来获取表单 post 请求体数据

## body-parser 解析表单 post 请求体

## 封装异步API
<<<<<<< HEAD
=======

>>>>>>> 20ffd78b77b6795942c198e719f006edc5aca7ba
> 定时器是异步的，不会等它结束，下面的代码就会执行

### 如果需要获取一个函数中异步操作的结果，则必须通过回调函数获取
如：

```javascript
function fn(callback){
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
	```javascript
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
<<<<<<< HEAD
- 回调函数
	+ 异步编程
	+ 如果需要得到一个函数内部异步操作的结果，必须通过回调函数来获取
	+ 在调用的位置传递一个函数进来
	+ 在封装的函数内部调用传递进来的函数

## package.json 和 package-lock.json

  npm5 之后出现的`package-lock.json`文件

`package-lock.json`会保存`node-module`中所有包的信息（版本、下载地址）
这样重新下载速度会变快

lock是用来锁定版本的，防止自动升级到新版

## es6 对数组新增了很多方法，以下是和遍历有关的方法
- find
	find会接收一个方法作为参数，方法内部返回一个条件
	find会遍历所有的元素，执行给定的带有条件返回值的函数
	符合该条件的元素会作为find方法的返回值
	如果遍历结束还没有符合该条件的元素，则返回 undefined

- findIndex

    和`find`方法相同，不过它返回的是元素的下标

- every

    判断是否所有都满足条件，返回布尔值

- some

    判断是否有满足条件的项，返回布尔值

- includes

- indexOf
- map
- reduce
=======
>>>>>>> 20ffd78b77b6795942c198e719f006edc5aca7ba
