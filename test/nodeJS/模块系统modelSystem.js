//require加载规则
// - 核心模块
// 		本质也是文件，已经编译到二进制文件中了
// 		
// - 第三方模块
// 		+ art-template 必须通过npm来下载使用，使用时通过require('包名')来进行加载
// 		+ 第三方模块加载过程：
// 			* 先找到当前文件所处目录下的 node_modules 目录
// 			* node_modules/art-template
// 			* node_modules/art-template/package.json 文件
// 			* node_modules/art-template/package.json 文件中的 main 属性
// 			* main 属性中记录了 art-template 的入口模块
// 			* 然后加载使用这个第三方包
// 			如果package.json 文件不存在或者 main 指定的入口模块也没有
// 			则node 会自动找改目录下的 index.js 
// 			如果index.js 也不存在，则会去上一级目录中的 node_modules目录中查找
// 			若一直不存在找到当前磁盘根目录还找不到，最后报错：
// 				can not find module xxx
// 			注意： 一个项目有且只有一个node_modules,放在项目根目录中
// - 自己写的模块
// 		+ 自己创建的文件
// 	- 优先从缓存中获取模块
// 	- 判断模块标识
// 		+ 路径形式的模块
// 			* ./	当前目录，不可省略
// 			* ../	上一级目录，不可省略
// 			* /XXX 	几乎不用，代表磁盘根路径
// 			* d:/a/ss 几乎不用，绝对路径
// - 模块查找机制：
// 		优先从缓存中加载
// 		核心模块
// 		路径形式的文件模块
// 		第三方模块	
// 	《深入浅出node.js》 中模块系统一章中
//------------------------------------------------------------		
//
//模块化
// 	+ 文件作用域
// 	+ 通信规则
// 	  * 加载require
// 	  * 导出
// 	  
//CommonJS模块规范
// 	在Node中的JavaScript还有一个很重要的概念：模块系统
// 	+ 模块作用域
// 	+ 使用 require 方法用来加载模块
// 	+ 使用 exports 接口对象来导出模块中的成员
// 	
//加载require
// 	语法： var 自定义变量名称 = require('模块')
// 	两个作用： 
// 		· 执行被加载模块中的代码
// 		· 得到被加载模块中的 exports 导出接口对象
// 		
//导出 exports
// 		Node中是模块作用域，默认文件中的所有成员只在当前文件模块中有效
// 		对于希望可以被其他模块中访问的成员，我们需要把成员挂载在 exports 上
// 		
// 		1、导出多个成员（必须在对象中）：
// 			exports.a = 123
// 			exports.b = hello
// 			exports.c = function () {
// 				console.log('cccc')
// 			}
// 		2、导出单个成员（拿到的是函数对象变量）：
// 			module.exports = 'hello'
// 			以下情况会覆盖：
// 			module.exports = 'hello'
// 			module.exports = 'world' // 会覆盖上面的hello输出
// 			
// 			也可以这样导出多个成员：
// 				module.exports = {
// 					add: function () {
// 						return x + y
// 					},
// 					str:　'hello'
// 				}
// 		原理：
// 			exports 是 module.exports 的一个引用
// 				console.log(exports === module.exports) // true
// 				两者是等价的
// 			导出单个成员直接给exports赋值不管用，会断开和module.exports的联系
// 			最终导出的是module.exports的值
// 	-----------------------------------------------------------
// 	package.json
// 		建议每个项目根目录都要有一个package.json文件，写出项目描述，例如，依赖的包选项（dependencies）
// 		
// 	npm init 命令 创建项目初始化，创建package.json
// 	npm install --save xxx  下载包时，加--save参数，可以添加dependencies选项
// 	
// 	如果node_modules删除也不用担心，我们只需要 npm install 就可以自动把dependencies选项中的所有依赖项都下载回来
// 	
// 	npm --version 				查看版本
// 	npm install --global npm 	升级npm
// 	
// 	npm常用命令：
// 		npm init					生成项目
// 			npm init [-y]/[--yes] 	跳过向导，快速生成
// 		npm install 包名				只下载
// 			npm i 包名 				简写
// 		npm install	--save 包名		下载并保存依赖项（package.json中的dependencies选项
// 			npm i --S 包名			简写
// 		npm uninstall 包名			只删除，如果有依赖项依旧保存
// 			npm un 包名				简写
// 		npm uninstall --save 包名	删除的同时也会把依赖项信息去除
// 			npm un -S 包名			简写
// 		npm help					查看帮助
// 		npm 命令 --help				查看具体命令帮助
// 	配置通过淘宝服务器来下载，但又不用cnpm
// 		npm install -g cnpm --registry=https://registry.npm.taobao.org
// 	npm config list 	查看 npm 配置消息
// 	
//---------------------------------------------------------- 	
/*

var fs = require('fs')
// 文件操作中的相对路径可以省略 ./
// 所有的文件操作的API都是异步的，就像Ajax请求一样，所以模块加载会先输出
fs.readFile('foo.js', function (err, data) {
	if (err) {
		return console.log('读取失败')
	}
	console.log(data.toString())
})

// 模块加载中，相对路径中的 ./ 不能省略
console.log(require('./foo.js')(1,2))
// /foo.js 找的是所在磁盘根目录中的foo.js
*/
