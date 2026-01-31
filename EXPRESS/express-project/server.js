const express=require("express");
const userDetails=require('./data.js');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Home Page");
});

app.get('/user',(req,res)=>{
    res.json(userDetails);
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});