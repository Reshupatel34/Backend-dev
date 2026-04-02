
import express from "express";
import connectDb from './config/Db.js';
import meremankarouternaam from './Route/userRoutes.js';
import authRoutes from './Route/authRoutes.js';


const app=express();
connectDb();
app.use(express.json());

app.use('/api',meremankarouternaam);

app.use('/api/auth',authRoutes);

app.get('/',(req,res)=>{
    res.send("Welcome hoeeee");
});


app.listen(3000,()=>{
    console.log("server is running on port ",3000);
});