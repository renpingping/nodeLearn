/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 
 */

var fs = require('fs')

var dbPath = './db.json'

/**
 * 获取所有学生列表
 * callback 中的参数
 * 		第一个参数是 err
 * 			成功是 null
 * 			错误是 错误对象
 * 		第二个参数是 data
 * 			成功是 data
 * 			错误是 undefined
 * return []
 */
exports.find = function (callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}

/**
 * 根据id获取学生信息对象
 * @param  {[string]}   id       学生id
 * @param  {Function} callback 	回调函数
 * @return {[type]}            单条学生信息
 */
exports.findById = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students =  JSON.parse(data).students
		var ret = students.find(function (item) {
			console.log(item.id)
			return item.id === parseInt(id)
		})
		callback(null, ret)
	})
}

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		// 处理 id 唯一
		student.id = students[students.length-1].id + 1
		students.push(student)
		var fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/**
 * 更新学生
 */
exports.updateById = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		student.id = parseInt(student.id)
		var students = JSON.parse(data).students
		// find 方法：接收一个函数，当某项符合时，返回遍历项本身
		var stu = students.find(function (item) {
			return item.id === student.id
		})
		// 循环遍历拷贝对象
		for (var key in student) {
			stu[key] = student[key]
		}

		var fileData = JSON.stringify({
			students: students
		})

		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/**
 * 删除学生
 */
exports.delete = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		console.log(students)
		// findIndex() 返回查找元素的下标
		var stuId = students.findIndex(function (item) {
			return item.id === parseInt(id)
		})

		students.splice(stuId, 1)

		var fileData = JSON.stringify({
			students: students
		})
		console.log(students)
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				return callback(err)
			}
			callback(null)
		})

	})
}
