import express from 'express';

const router=express.Router();

// create a login midlleware that logs idf the user is valid or not using query params
let loginValidation=(req,res,next)=>{
    const {token}=req.query.token;
    if(token==="123"){
        next();
    
    }else{
      return res.send("access denied");
    }       
}

router.get('/login',loginValidation,(req,res)=>{
res.end("login");

});

router.get('/register',(req,res)=>{
res.end("register");
});

export default router;