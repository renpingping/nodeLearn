# Express - crud

## 起步
	
- 初始化
- 模板处理

## 路由设计

  |  请求方法  |     请求路径     | get 参数 |        post 参数        |     备注     |
  |---------- |-----------------|----------|-------------------------|--------------|
  |    GET    | /students       |          |                         | 渲染首页      |
  |    GET    | /students/new   |          |                         | 渲染添加学生  |
  |    POST   | /students/new   |          | id name gender hobbies  | 处理添加学生  |
  |    GET    | /students/edit  | id       |                         | 渲染编辑学生  |
  |    POST   | /students/edit  |          | id name gender hobbies  | 处理编辑学生  |
  |    GET    | /students/delete| id       |                         | 处理删除学生  |
  |           |                 |          |                         |              |