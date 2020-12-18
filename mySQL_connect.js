//数据库连接代码

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
    if (err) throw err
    //连接成功时输出的信息
    console.log("连接成功");
});

//结束连接
con.end();
