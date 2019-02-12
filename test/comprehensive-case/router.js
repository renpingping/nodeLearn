var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function (req, res) {
	console.log('-------------------')
	console.log(req.session.user)
	console.log('-------------------')
	res.render('index.html', {
		user: req.session.user
	})
})

router.get('/login', function (req, res) {
	res.render('./login.html')
})

router.post('/login', function (req, res) {
	console.log(req.body)
	var body = req.body
	// // 这里最好不要这样写，账号密码一块判断更好，安全性更高，避免黑客攻击
	// User.findOne({
	// 	email: body.email
	// }, function (err, data) {
	// 	if (err) {
	// 		return res.json({
	// 			err_code: 500,
	// 			message: 'Internal err.'
	// 		})
	// 	}
	// 	if (data) {
	// 		User.findOne({
	// 			email: body.email,
	// 			password: md5(md5(body.password))
	// 		}, function (err, data) {
	// 			if (err) {
	// 				return res.json({
	// 					err_code: 500,
	// 					message: 'Internal err.'
	// 				})
	// 			}
	// 			if (data) {
	// 				req.session.user = data
	// 				res.json({
	// 					err_code: 0,
	// 					message: 'OK'
	// 				})
	// 			}else{
	// 				res.json({
	// 					err_code: 2,
	// 					message: 'Password is error.'
	// 				})
	// 			}
	// 		})
	// 	}else{
	// 		res.json({
	// 			err_code: 1,
	// 			message: 'User not registered, please go to registration'
	// 		})
	// 	}
	// })
	User.findOne({
		email: body.email,
		password: md5(md5(body.password))
	}, function (err, user) {
		if (err) {
			return res.status(500).json({
				err_code: 500,
				message: err.message
			})
		}
		if (!user) {
			return res.status(200).json({
				err_code: 1,
				message: 'email or password is invalid.'
			})
		}

		// 用户存在，登录成功，记录登录状态
		req.session.user = user
		res.status(200).json({
			err_code: 0,
			message: 'OK'
		})
	})
})

router.get('/register', function (req, res) {
	res.render('./register.html')
})

router.post('/register', function (req, res) {
	console.log(req.body)
	var body = req.body
	User.findOne({
		$or: [
			{
				email: body.email
			},
			{
				nickName: body.nickName
			}
		]
	}, function (err, data) {
		if (err) {
			// express 提供一个响应方法 json
			// 该方法接收一个对象作为参数，它会自动把对象转换为字符串再发给浏览器
			return res.status(500).json({
				err_code: 500,
				message: 'intered error'
			})
		}
		if (data) {
			return res.status(200).json({
				err_code: 1,
				message: 'Email and nickname is aleady exists.'
			})
		}
		body.password = md5(md5(body.password))
		new User(body).save(function (err, user){
			if (err) {
				return res.status(500).json({
					err_code: 500,
					message: 'Internal error.'
				})
			}
			req.session.user = user  	// 记录session
			res.status(200).json({
				err_code: 0,
				message: 'OK'
			})
		})
		
	})

})
router.get('/logout', function (req, res) {
	// 清除登录状态，重定向到登录页
	req.session.user = null;
	res.redirect('/login')
})
module.exports = router