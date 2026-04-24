// server forgets everytime who we are , and for that reason it askes us who we are for each and every task which is called authentication,

// and that is why we have sessions and cookies because we dont want to authenticate everytime , right?

//  learn how to set cookie 
// learn how to use bcrypt for password encryption and decryption
// jwt ? and how to store data in jwt?

// salt---ek random string
// hash-->encrypt then salt is combined with hash and then it is encrypted and hard to decrption is very hard and almost impossibler

 
import express from 'express';
// import cookieParser  from 'cookie-parser';
import bcrypt from "bcrypt";

const app=express();

// app.use(cookieParser());

// set cookie

// app.get('/',(req ,res)=>{
// //    res.send("Welcome");
// res.cookie("name","Reshu");
// res.send("done");
// });

// read  cookies


// app.get('/read',(req,res)=>{
//     console.log(req.cookies);
//    res.send("Read Cookie Page");
// });


// encryption using hashing and salt
 
app.get('/',async(req,res)=>{
   try{

    const salt=await bcrypt.genSalt(10);
    const hash= await bcrypt.hash("marco-polo",salt);

    // hashed password
    console.log(hash);

   }catch(err){
    console.log(err);
    res.status(500).send("Error hashing");
   }
});

// lets decrpyt the encrypted password or a string , we will compare
app.get('/',async (req ,res)=>{
    const result=await bcrypt.compare("marco-polo","$2b$10$brrd4wOim6fESmo6EApXR.QDZFwkvyhYsv0FgNQzG4vb3lgS/69Ra");
    res.send(result);
});

app.listen(3000,()=>{
   console.log("Server  is running on port 3000 ");
});