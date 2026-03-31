import express from 'express';
import authorRoute from './Route/authorRoute.js';
const app=express();

const port=3000;

app.use(express.json());

app.use('/api/author',authorRoute);



app.listen(port,()=>{
    console.log("Server is running on port ",port);
});