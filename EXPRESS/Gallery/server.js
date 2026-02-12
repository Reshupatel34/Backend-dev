import express from'express'
import fs from 'fs';

const app=express();

app.set('view engines','ejs');
app.use(express.static('public'));

app.get('/index',()=>{
    const file=fs.readdirync('./public');

    res.render("index",{image:file});
     
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});