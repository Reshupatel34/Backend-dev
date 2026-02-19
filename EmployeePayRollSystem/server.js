import express from 'express';
import userRouter from './router/userRouter.js';
import {employeeData} from './model/data.js';
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',userRouter);
app.set('view engines','ejs');

app.get('/',(req,res)=>{
    res.render('index.ejs',{employeeData});
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});