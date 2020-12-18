//load db.js moudle

const db=require("./lib/db");

//db connect
const con=db.connect();

//sql 1
let sql="";
sql="SELECT * FROM users";
con.query(sql,(err,results)=>{
    results.forEach((user) => {
        //show user email
        console.log(user.id);
        console.log(user.email);
    })
});

//sql 2
sql="SELECT * FROM users WHERE ?";
let params={}
params={id: 3}
//exec SQL
con.query(sql,params,(err,results)=>{
        if (err) throw err;
        let user=results[0];       
        console.log("${user.first_name}${user.last_name}");
    
});

//sql 3
sql="SELECT * FROM users  LIMIT ? OFFSET ?";
const limit=3;
const offset=0;


params=[limit,offset]
//exec SQL
con.query(sql,params,(err,results)=>{
        if(err) throw err;
        results.forEach(user=>{
            console.log(user.email);
        })

});

//db connection closed

con.end();