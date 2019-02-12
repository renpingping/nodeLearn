var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useMongoClient: true})

var Schema = mongoose.Schema

var userSchema = new Schema({
	email:{
		type: String,
		required: true
	},
	nickName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	created_time: {
		type: Date,
		// 这里不能写 Date.now() 因为会即刻调用
		// 这里直接写方法：Date.now
		// new Model 的时候，若没有传递 create_time,就使用默认的 Date.now 方法
		default: Date.now
	},
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	avatar: {
		type: String,
		default: '/public/images/avatar-default.png'
	},
	bio: {
		type: String,
		default: ''
	},
	gender:{
		type: Number,

	},
	brithday:{
		type: Date
	},
	status: {
		type: Number,
		// 1 不可以评论
		// 2 不可以登陆
		enum: [0,1,2],
		default: 0
	}
})

module.exports = mongoose.model('User', userSchema)