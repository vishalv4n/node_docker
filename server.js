var express=require("express");
var mysql=require("mysql");
var router=express();
const connection=mysql.createConnection({
    host:'200.0.1.101',
    user:'root',
    password:'manager',
    database:'app_db',
    port:9099
})

connection.connect();
router.get("/",(request,response)=>{
    query=`select * from mobiles`;
    connection.query(query,(error,result)=>{
    response.send(result);
    })
})
module.exports=router;