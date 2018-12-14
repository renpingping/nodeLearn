/*
 * router.js 路由模块
 * 职责：
 * 		处理路由
 * 		根据不同的请求方法+请求路径设置具体的处理函数
 * 		
 */

var fs = require('fs')
var express = require('express')
var Student = require('./student.js')

// 1、创建一个路由容器
var router = express.Router()

// 2、把路由都挂载到 router 路由容器中
router.get('/students', function (req, res) {
	/*fs.readFile('./db.json', 'utf-8', function (err, data) {
		// readFile 的第二个参数可选，传入utf-8就转换为utf-8编码
		if (err) {
			return res.status(500).send('Server error.')
		}
		// 文件中读取到的数据一定是字符串
		// 所以这里手动转换成对象
		var students = JSON.parse(data).students
		// console.log(students)
		res.render('index.html',{
			fruits: [
				'苹果',
				'香蕉',
				'葡萄',
				'橘子'
			],
			students: students
		})
	})*/
	Student.find(function (err, students) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('index.html',{
			fruits: [
				'苹果',
				'香蕉',
				'葡萄',
				'橘子'
			],
			students: students
		})
	})
})

router.get('/students/new', function (req, res) {
	res.render('new.html')
})

router.post('/students/new', function (req, res) {
	Student.save(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

router.get('/students/edit', function (req, res) {
	// 获取数据 渲染
	Student.findById(parseInt(req.query.id), function (err, student) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('edit.html',{
			student: student
		})
	})
})
router.post('/students/edit', function (req, res) {
	Student.updateById(req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})
router.get('/students/delete', function (req, res) {
	console.log(req.query.id)
	Student.delete(parseInt(req.query.id), function (err) {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

// 3、 把 router 导出
module.exports = router
