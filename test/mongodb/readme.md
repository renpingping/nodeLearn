### Mongodb 

## 启动和关闭数据库

启动：
```shell
  # mongodb 默认使用执行 mongod 命令所处盘符下的 /data/db 作为自己的数据存储目录
  # 所以在第一次执行该命令之前先自己手动新建一个/data/db
  mongod  # 开启服务

```
如果想要修改默认的数据存储目录，可以，

```shell
  
  mongod --dbpath=数据存储目录路径

```
停止：

```shell
  在开启服务的控制台，直接Ctrl+c，或者直接退出控制台

```
## 连接和退出
连接：
	mongo
退出：
	exit
## 基本命令
- show dbs
	+ 查看显示所有数据库
- db
	+ 查看当前操作的数据库
- use 数据库名称
	+ 切换到指定数据库
- 插入数据
	+ insertOne({"name":"Jack"})

```shell

> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use itcast				# 使用数据库
switched to db itcast
> db						# 查看当前的使用数据库
itcast
> db.students.insertOne({"name":"Jack"})  	# 在集合中插入数据
{
        "acknowledged" : true,
        "insertedId" : ObjectId("5c164e9900b47f901c639c51")
}
> show dbs
admin   0.000GB
config  0.000GB
itcast  0.000GB
local   0.000GB
> show collections			# 查看数据库中的集合
students
> db.students.find() 		# 查看students集合中的数据
{ "_id" : ObjectId("5c164e9900b47f901c639c51"), "name" : "Jack" }

```
## mongoDB数据库的基本概念
	- 可以有多个数据库
	- 一个数据库可以有多个集合（表）
	- 一个集合中可以有多个文档文档（表记录）
	- 文档结构很灵活，没有任何限制

## 在Node中如何操作Mongodb数据库

### 使用官方的mongodb包来操作

> https://github.com/mongodb/node-mongodb-native

### 使用第三方mongoose来操作MongoDB数据库

第三方包：`mongoose` 基于 MongoDB 官方的 mongodb 包再做了一次封装

## mongoose

- 官网： https://mongoosejs.com/
- 官方指南： https://mongoosejs.com/docs/guide.html
- 官方API文档：https://mongoosejs.com/docs/api.html



安装：

```shell
npm i mongoose

```
