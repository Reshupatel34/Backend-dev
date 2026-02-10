import express from 'express';
import fs from 'fs';

const router=express.Router();



router.get('/gallery',(req,res)=>{

     const files=fs.readdirSync('./public');
   console.log(files);  //['k9dog.jpg','chowchow.jpg']
     res.render('Gallery ',{image:files});

});

export default router;