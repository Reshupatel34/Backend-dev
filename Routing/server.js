import express from 'express';
import userRoute from './router/userRoute.js';
import registerRoute from './router/registerRoute.js';
import dashboardRoute from './router/dashboardRoute.js';
const app=express();

app.use("/api",userRoute);

app.use("/userAccount",registerRoute);

app.use("/userProfile",dashboardRoute);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

