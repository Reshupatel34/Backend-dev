import express from 'express';
import methodOverride from "method-override";
import pagesRoute from './router/pagesRoute.js';
import userRoute from './router/userRoute.js';
import {userinfo} from './data.js';
const app=express();


// embedded javascript

// static server
// csr
// ssr
// template engine
// server side renderning

// setting the engine


app.set("view engine",'ejs');
app.use(methodOverride('_method'));
// converts url ka data into js object
app.use(express.urlencoded({extended:true}));
// page/index ,page/editpage

app.use('/page',pagesRoute);
app.use('/api',userRoute);




app.get('/user',(req,res)=>{
    
    let userData={
        name:"Charlie",
        age:25
    }
    // binding
    res.render("user",{userData});
});


app.get('/list',(req,res)=>{
    let arr=['apple','mango','orange'];

   res.render("list",{arr});
});


// pahle hum res.send karte the to ab r
app.listen(3000,()=>{
 console.log("Server is running on port 3000"); 
});