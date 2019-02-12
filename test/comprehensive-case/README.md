# node 综合 Web 案例
1. 目录结构

```javascript
.
|—— app.js 				项目执行入口文件
|—— controllers
|—— models				存储使用 mongoose 设计的数据模型
|—— node_modules		第三方包
|—— package.json 		包描述文件
|—— package-lock.json 	第三方包版本锁定文件
|—— public				公共的静态资源
|—— README.md 			项目说明文档
|—— routes				路由设计
|—— views				存储视图目录
```
2. 模板页

[子模板](http://aui.github.io/art-template/zh-cn/docs/syntax.html#%E5%AD%90%E6%A8%A1%E6%9D%BF)

[模板继承](http://aui.github.io/art-template/zh-cn/docs/syntax.html#%E6%A8%A1%E6%9D%BF%E7%BB%A7%E6%89%BF)

3. 路由设计

|    路径   |  方法 |get参数| post参数 | 是否需要登陆  |备注|
|-----------|------|-------|----------|--------------|----|
| /         | GET  |       |          |              |首页|
| /register | GET  |       |          |              |渲染注册页面|
| /register | POST |       |email,nickname,password| |渲染注册页面|
| /login    | GET  |       |          |              |渲染登陆页面|
| /login    | POST |       |email,password|          |渲染注册页面|
| /loginout | GET  |       |          |              |处理退出请求|

4. 模型设计

+ 创建目录结构
+ 整合静态页-模板页
	- include
	- block
	- extend
+ 设计用户登录、退出、注册的路由
+ 用户注册
	- 先处理好客户端页面的内容（表单控件的name、手机表单数据）
	- 服务端
		* 获取客户端表单请求数据
		* 操作数据库
			* 如果有错，发送 500 错误内容到客户端
			* 根据业务发送不同的响应数据
+ 用户登录
+ 用户退出