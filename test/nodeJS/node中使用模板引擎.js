// art-template 不仅可以在浏览器中使用，还可以在node中使用
// 		npm install art-template
//  	该命令在那执行就会把包下载到哪里，默认会下载到node_modules中
//  	
// 客户端渲染不利于seo搜索引擎优化
// 服务端渲染可以被爬虫抓取的
// 
// 进入node控制台 : node
// 			退出 ： 按两次 Ctrl+C
// 			
// 	each 和 forEach
// 		art-template 模板中each
// 			{{ each 数组 }}
// 				<li>{{ $value }}</li>
// 			{{ /each }}
// 		jQuery 中 each
// 			$.each(数组, function)
// 			$('div').each(function)  //一般用于遍历 jQuery 选择器选择道德伪数组实例对象
// 		javaScript 中 forEach	
// 			EcmaScript 5 中的一个数组遍历函数，是javascript原生支持的遍历方法，可以遍历所有能遍历的对象
// 			ie8不支持(需要兼容ie8的话用j
// 			query1点多版本可以兼容)
// 	jquery的 each 
// 		1.方便遍历 jquery 元素
// 		2.可以在不兼容 forEach 的低版本浏览器中使用 jQuery 的 each 方法		
;['abc','d','efg'].forEach(function (item, index) {
	console.log(item)
}) 	

$.each(['abc','d','efg'], function (index, item) {
	console.log(item)
})		

;[].slice.call($('div').forEach(function (item) {
	console.log(item)
}))