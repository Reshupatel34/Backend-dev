// Create a photo gallery using static files and EJS to display images dynamically.



import express from 'express';  
const app=express();

app.set('view engine','ejs');   

app.use('/static',express.static('public'));


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});