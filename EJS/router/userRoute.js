
import express from 'express';
const router=express.Router();
import {userinfo} from '../data.js';


// user info
router.get('/userInformation',(req,res)=>{
    res.render("userInfo",{userinfo});
});

//userinfo
router.post('/api/user',(req,res)=>{
    const {name,age}=req.body;
    let newUser={
        id:userinfo.length+1,
        name,
        age
    }
    userinfo.push(newUser);
    res.redirect('/userInformation');

});

// userInfo ko delete karna hai to
router.delete('/api/user/:id',(req,res)=>{

    const id=Number(req.params.id);
    const idx=userinfo.findIndex(s=> s.id===id);
    if(id===-1){
        return res.send("User Not Found");
    }
    userinfo.splice(idx,1);

    res.redirect('/userInformation');

});


// edit 
router.put('/api/userInformation/:id',(req,res)=>{
   const {name,age}=req.body;
   const id=parseInt(req.params.id);

   const userIdx=userinfo.findIndex(s=>s.id===id);
   if(userIdx===-1){
    return res.render("User not found");
   }
   userinfo[userIdx]={id,name,age};
   res.redirect('/userInformation');

});

export default router;