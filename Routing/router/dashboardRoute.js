
import express from 'express';


const router=express.Router();


router.get('/profile',(req,res)=>{
    res.send("user Profile");
});


router.get('/report',(req,res)=>{
   res.send("user Report");
});

export default router;