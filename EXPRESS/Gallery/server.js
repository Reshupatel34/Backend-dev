// import express from'express'
// import fs from 'fs';

// const app=express();
// import path from 'path';
// import gallery from './router/gallery.js';


// app.set("view engine",'ejs');
// app.use(express.static(path.join));

// app.use('/api',gallery);

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });














import express from 'express'
import userRouter from './router/userRouter.js'
import dotenv from 'dotenv';
dotenv.config();    

const app=express();
app.use(express.json());

app.use('/api',userRouter);


app.listen(3000,()=>{
    console.log("Server is running on port 3000 ")
});









