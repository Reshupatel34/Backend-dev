import express from 'express';
import {fileURLToPath} from 'url';

const app=express();


// const __filename=fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// const filepath=path.join(__dirname,"public");
// app.use('/static',express.static(filepath));

// to tell express where the images are
// middleware

// http://localhost:3000/static/chowchow.jpg
app.use('/static',express.static('public'));

// or we can use this
// app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.send("Home ")
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});