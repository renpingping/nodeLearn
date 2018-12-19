var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'onlinelearn'
})

connection.connect();

var querySql = 'select * from users';
var addSql = 'insert into users(Id,name,password) values(0,?,?)';
var addSqlParams = ['Lyfren','751'];
var modSql = 'update users set name = ?,password = ? where Id = ?';
var modSqlParams = ['Jackon', '751880', 4];
var delSql = 'delete from users where id = 3';

connection.query(modSql, modSqlParams, function (err, result) {
	if (err) {
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('--------------------------INSERT----------------------------');
    console.log(result.affectedRows);
    console.log('------------------------------------------------------------\n\n');  
})

connection.query(querySql, function (err, result) {
	if (err) {
		console.log('[SELECT ERROR] - ', err.message);
		return;
	}
	console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  	
})

connection.end();
