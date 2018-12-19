# promise
## callback hell 回调地狱
解决异步调用，不能保证执行顺序，进行嵌套调用

为了解决回调地狱嵌套，所以在 ES6 中新增了一个API: promise

## promise 概念

promise是一个容器，里面存放了一个异步任务 

Promise 是一个构造函数

promise 不是异步的，但里面封装了一个异步任务

1. Promise基本语法
```javascript
var fs = require('fs')
var p1 = new Promise(function(resolve, reject){
	fs.readFile('./data/a.txt', 'utf8', function(err, data){
		if(err) {
			reject(err)
			// 把容器的Pending状态变为Rejected
			// 调用 reject 就相当于调用了 then 方法的第二个参数函数
		}else {
			resolve(data)
			// 把容器的Pending状态变为Resolved
			// 这里调用的 resolve 方法实际上就是 then 方法传递的参数函数
		}
	})
})
var p2 = new Promise(function(resolve, reject){
	fs.readFile('./data/b.txt', 'utf8', function(err, data){
		if(err) {
			reject(err)
		}else {
			resolve(data)
		}
	})
})
var p3 = new Promise(function(resolve, reject){
	fs.readFile('./data/c.txt', 'utf8', function(err, data){
		if(err) {
			reject(err)
		}else {
			resolve(data)
		}
	})
})

// p1 就是 Promise，当p1成功了，然后（then）做指定的操作
// then 方法接收的 function 就是容器的 resolve 函数

p1
.then(function (data) {
	console.log(data)
	// 当 p1 读取成功的时候
	// 当前函数中 return 的结果就可以在后面的 then 中的 function 接收到
	// 当你 return 123 后面就接收到 123
	// 当你 return 'hello' 后面就接收到 'hello'
	// 当你 return 一个Promise 对象的时候，后续的 then 中的方法的第一个参数会作为 p2 的 resolve 函数，第二个参数会作为 p2 的 reject 函数
	return p2
}, function(err) {
	console.log('读取文件失败',err)
})
.then(function (data) {
	console.log(data)
	return p3
})
.then(function (data) {
	console.log(data)
})

```
2. 封装版的 Promise API
```javascript
var fs = require('fs')

function pReadFile(filePath) {
	return new Promise(function(resolve, reject){
		fs.readFile(filePath, 'utf8', function(err, data){
			if(err) {
				reject(err)
			}else {
				resolve(data)
			}
		})
	})
}

pReadFile('./data/a.txt')
	.then(function (data) {
		console.log(data)
		return pReadFile('./data/b.txt')
	})
	.then(function (data) {
		console.log(data)
		return pReadFile('./data/c.txt')
	})
	.then(function (data) {
		console.log(data)
	})
```