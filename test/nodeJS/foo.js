var foo = 'bar'
function add(x, y) {
	return x + y
}

// exports是一个对象，可以通过多次为这个对象添加成员实现对外导出多个内部成员
// 这样做的目的是为了解决变量命名冲突问题

/*exports.add = add
exports.foo = foo*/

// 如果某个成员直接导出，而非挂载
// 那必须要用下面这种方式
module.exports = add