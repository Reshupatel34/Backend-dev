import express from "express";
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';



const app=express();

// middleware 

app.use(cookieParser('my-super-secret-key'));


// use 

// app.get('/set-cookie',(req,res)=>{
//     res.cookie("name","Charlie",{httpOnly:true});
//     res.send("Coookie has been set");
// });

// get cookie

// app.get('/get-cookie',(req,res)=>{
//     console.log(req.cookies.name);
// });

// const token=jwt.sign("Reshu","hgkhfydtsutrryuhlj57l");
// console.log(token)








// use case

// 1. set cookie


app.get('/set-cookie',(req,res)=>{
    let user={
        name:"Raghav Chaddha",
        email:"raghav@gmail.com",
        work:"Politician"
     }
     const token=jwt.sign(user,"qwerty");
     res.cookie("token",token,{httpOnly:true});
     res.send("Cookie set");
     console.log(token);

});

const authMiddleware=(req,res,next)=>{
    try{

        if(!req.cookies.token){
            return res.send("invalid user");
        }
        
        const token=req.cookies.token;
        const decode=jwt.verify(token,"qwerty");
        // console.log(decode);
        // res.send(token);
        req.user=decode;
        next();
    }catch(error){
        console.log("Error",error.message);
    }
}
// get cookie
app.get('/dashboard',authMiddleware,(req,res)=>{
    let user=req.user;
    res.send(`User info : ${user.name} ,email : ${user.email} , user's work : ${user.work}`);
});



//profile
app.get('/profile',authMiddleware,(req,res)=>{
    let user=req.user;
    console.log(user);
    res.send(user);

});


// logout
app.get('/logout',authMiddleware,(req,res)=>{
   res.clearCookie("token");
   res.send("Logout successfull");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");

});