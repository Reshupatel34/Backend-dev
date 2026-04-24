import express from 'express';
import cookieParser from 'cookie-parser';
import path from "path";
import userSchema from './Model/userModel.js';
import { fileURLToPath } from "url";


const app=express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());

app.get('/',(req ,res)=>{
   res.render("index");
});


app.post('/create',async(req,res)=>{
      const {username,email,password}=req.body;
      const user = await userSchema.create({
        username,
        emai,password
      });
      
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});