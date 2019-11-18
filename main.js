var express=require("express");
var app=express();
var router=require("./server.js");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use("/mobiles",router);
app.listen(4000,()=>
{
    console.log("server started on port number 4000");
});
