//import express
const express=require("express");
const isAuth = require("./isAuth");
//instance
const app=new express();
app.use(isAuth);
//PORT
const PORT = 5000;
//root
// app.get('/',(request,response)=>response.send('hello again!!'));
app.get('/',(request,response)=>{response.sendFile(__dirname+"/public/home.html")});
app.get('/contact',(request,response)=>{response.sendFile(__dirname+"/public/contact.html")});
app.get('/services',(request,response)=>{response.sendFile(__dirname+"/public/services.html")})
app.get('/style.css',(req,res)=>{res.sendFile(__dirname+'/public/style.css')})
//listen
app.listen(PORT,(err)=>err?console.log(err):console.log(`server running in port ${PORT}`))