//数据库创建代码


//MySQL モジュール（模块）読み込み
const mysql=require("mysql");
const config =require("config");
//创建连接, 要连接的数据库的基本信息
 const con=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"",
});

//连接到数据库的函数
con.connect((err)=>{
    //检测到错误时抛出错误
    if (err) throw err;
    //连接成功时输出的信息
    console.log("连接成功");
});

//创建新数据库
/*
"CREATE DATABASE "+config.mysql.database;
创建数据库语句 要有空格"CREATE DATABASE "
要创建的数据库的信息读取在 “+config.mysql.database ”
*/
const sql="CREATE DATABASE "+config.mysql.database;
console.log(sql);

//创建数据库后，实行de函数
con.query(sql, (err) => {
    if (err) throw err;
    console.log('created database!');
    });

//结束连接
