import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import userSchema from "./Model/userModel.js";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDb from './config/db.js';


const app = express();
connectDb();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const createdUser = await userSchema.create({
      username,
      email,
      password: hash,
    });
   const token=jwt.sign({email:createdUser.email},'secret');
   res.cookie("token",token);
    res.send(createdUser);
  } catch (error) {
    res.status(500).send(error);
  }
});



// for rendering login page
app.get('/login',(req ,res)=>{
    res.render("login");
});

app.post('/login',async(req,res)=>{
     const user=await userSchema.findOne({email:req.body.email});
      if(!user){
        return res.send("Email or Password Doesnot exist");
       }


   const result=await bcrypt.compare(req.body.password,user.password);
   if(!result){
     return res.send("You cant login");
   }
   else{
      const token=jwt.sign({email:user.email},'secret');
   res.cookie("token",token);
    res.send("Logged in")
   }
});

// logout
app.get('/logout',(req,res)=>{
    res.clearCookie("token");
    res.redirect('/');
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
