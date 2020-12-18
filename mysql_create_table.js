//load custom moudle
const db=require("./lib/db");
db.connect();
//外部的SQL文件设定
let files=[
    "./sql/01_create_table_users.sql",
];
//遍历导入的sql文件
files.forEach((file)=>{
    db.importSQL(file);
});