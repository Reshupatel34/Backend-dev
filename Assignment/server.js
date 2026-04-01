import express from 'express';
import authorRoute from './Route/authorRoute.js';
import bookRoute from './Route/bookRoute.js';
const app=express();

const port=3000;

app.use(express.json());

app.use('/api/author',authorRoute);

app.use('/api/book',bookRoute);

app.listen(port,()=>{
    console.log("Server is running on port ",port);
});