var foo = 'Hello World'
console.log(foo)


//  1、创建js脚本文件
//  2、打开终端，定位到脚本文件所属目录
//  3、输入 ‘node 文件名’ 执行对应的文件
//  注意：文件名不要使用node.js来命名。
//  node.js没有bom和dom,和浏览器的js不同
//  浏览器中的js没有文件操作能力，但node.js可以
//  fs 是file-system的简写，文件系统的意思

//  1、使用require方法加载fs核心模块
var fs = require('fs')
// 	2、读取文件
// 		第一个参数是要读取文件路径
// 		第二个参数是回调函数
// 			error
// 				如果读取失败，error就是错误对象
// 				如果读取成功，error就是null
// 			data 
// 				如果读取成功，data就是读取到的数据
// 				如果读取失败，error就是错误对象
// 			成功
// 				data 数据
// 				error null
// 			失败
// 				data undefined
// 				error 错误对象
// 					
fs.readFile('../json.txt', function (error,data) {
	//文件中的数据存储为二进制，使用时需toString()转换
	//通过判断error是否成功
	console.log(error);
	if (error) {
		console.log('读取失败了');
		return;
	}else{
		console.log(data.toString());
	}
})