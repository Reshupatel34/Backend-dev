const express=require("express");
const userDetails=require('./data.js');

const app=express();

const port=3000;

// for array destructuring
let arr=[1,2,3];
const [a,b,c]=arr;

app.get('/',(req,res)=>{
    res.send("Home Page");
});

app.get('/user',(req,res)=>{
    res.json(userDetails);
});

app.get('/userAge',(req,res)=>{
    let userAge=userDetails.filter(s=>s.age>18);
    res.json(userAge);

});

// if gender female then add "Mrs" is male then add "Mr" in front of their name
app.get('/userStatus',(req,res)=>{
    let userName=userDetails.map(user=>{
        if(user.gender==='Female'){
            return 'Ms.'+user.name;
        }
        else{
            return 'Mr.'+user.name;
        }
    });
    res.json(userName);
});

// get user by id
app.get('/user/profile/:id',(req,res)=>{
 const id=parseInt(req.params.id);
 let user=userDetails.find(s=>s.id===id);
 res.json(user);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});