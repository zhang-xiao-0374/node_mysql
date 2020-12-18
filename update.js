//load db.js moudle

const db=require("./lib/db");

//db connect
const con=db.connect();

//修改既有的数据库数据

const first_name="張";
const last_name="暁宇";
//const email="z496151046@gmail.com";
const id=1;
let params=[first_name,last_name,id];

const sql="UPDATE users SET first_name =?, last_name=? WHERE id= ?";
con.query(sql,params,(err ,results)=>{
    if (err) throw err;
    console.log(results);
    console.log("update 成功!!");
}
)
//db connection closed

con.end();