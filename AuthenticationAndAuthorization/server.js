// server forgets everytime who we are , and for that reason it askes us who we are for each and every task which is called authentication,

// and that is why we have sessions and cookies because we dont want to authenticate everytime , right?

//  learn how to set cookie 
// learn how to use bcrypt for password encryption and decryption
// jwt ? and how to store data in jwt?

// salt---ek random string
// hash-->encrypt then salt is combined with hash and then it is encrypted and hard to decrption is very hard and almost impossibler

 
import express from 'express';
import cookieParser  from 'cookie-parser';
import bcrypt from "bcrypt";

const app=express();

app.use(cookieParser());

// set cookie
app.get('/',(req ,res)=>{
//    res.send("Welcome");
res.cookie("name","Reshu");
res.send("done");
});

// read  cookies
app.get('/read',(req,res)=>{
    console.log(req.cookies);
   res.send("Read Cookie Page");
});

app.listen(3000,()=>{
   console.log("Server  is running on port 3000 ");
});