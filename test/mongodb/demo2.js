var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1.连接数据库
mongoose.connect('mongodb://localhost/test')

// 2.设计文档结构（表结构）
// 字段名就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
	username:{
		type: String,
		required: true //限定必须有
	},
	password:{
		type: String,
		required: true //限定必须有
	},
	email:{
		type: String
	}
})

// 3.将文档结构发布为模型
// mongoose.model 方法用来将一个架构发布位model
// 第一个参数：传入一个大写名词单数字符串用来表示将要创建的数据库名称
// 			  mongoose 会自动将大写名词的字符串生成 小写复数 的集合
// 			  例如这里的 User 最终会变成 users 集合名称
// 第二个参数：架构 Schema
// 
// 返回值： 模型构造函数
var User = mongoose.model('User', userSchema);

// 4. 有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据进行操作（增删改查）

// *******************
// #region /新增数据
// *******************
// var admin = new User({
// 	username: 'lisi',
// 	password: '123456',
// 	email: 'admin@qq.com'
// })

// admin.save(function (err, result) {
// 	if (err) {
// 		console.log('保存失败')
// 	}else{
// 		console.log('保存成功')
// 		console.log(result)
// 	}
// })
// *******************
// #endregion /新增数据 
// *******************

// *****************************
// #region /查询所有数据
// *****************************
// User.find(function (err, result) {
// 	if (err) {
// 		console.log('查询失败')
// 	}else{
// 		console.log(result)
// 	}
// })
// *****************************
// #endregion /查询所有数据 
// *****************************

// ********************************
// #region /按条件查询所有的数据
// ********************************
// User.find({
// 	username:'admin'
// },function (err, result) {
// 	if (err) {
// 		console.log('查询失败')
// 	}else{
// 		console.log(result)
// 	}
// })
// ********************************
// #endregion /按条件查询所有的数据 
// ********************************

// *****************************
// #region /按条件查询单个
// *****************************
// User.findOne({
// 	username:'lisi',
// 	password:'123456'
// },function (err, result) {
// 	if (err) {
// 		console.log('查询失败')
// 	}else{
// 		console.log(result)
// 	}
// })
// *****************************
// #endregion /按条件查询单个 
// *****************************
 
// **********************
// #region /删除数据
// **********************
// User.remove({
// 	username: 'zs'
// },function (err, result) {
// 	if (err) {
// 		console.log('删除失败')
// 	}else{
// 		console.log('删除成功')
// 	}
// })
// **********************
// #endregion /删除数据 
// **********************

/*
 * 根据条件删除一个：
 * Model.findOneAndRemove(conditions, [options], [callback])

 * 根据id删除一个：
 * Model.findByIdAndRemove(id, [options], [callback])
*/

// ****************************
// #region /更新数据 
// ****************************
// * 根据条件更新所有：
// * Model.update(conditions, doc, [options], [callback])
// User.update({username:'lisi'},{username :'reee'},function (err ,result) {
// 	if (err) {
// 		console.log('更新失败')
// 	}else{
// 		console.log('更新成功')
// 		console.log(result)
// 	}
// })
// * 根据id更新一个：
User.findByIdAndUpdate('5c186e860bcf294de85d81dc',{
	password: '123'
},function (err, result) {
	if (err) {
		console.log('更新失败')
	}else{
		console.log('更新成功')
	}
})
// * 根据指定条件更新一个：
// * Model.findOneAndUpdate([conditions], [update],[options], [callback])
// ****************************
// #endregion /更新数据 
// ****************************
User.find(function (err, result) {
	if (err) {
		console.log('查询失败')
	}else{
		console.log(result)
	}
})