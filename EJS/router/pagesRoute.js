
import express from 'express';

const router=express.Router();



// // user info
// router.get('/userInformation',(req,res)=>{
//     res.render("userInfo",{userinfo});
// });


// render index
router.get('/',(req,res)=>{
  res.render("index");
});


// edit page 

router.get('/editpage/:id',(req,res)=>{
    const id=Number(req.params.id);
    const idx=userinfo.findIndex(s=> s.id===id);        
    if(idx===-1){
        return res.render("User not found");
    }
    const userinfoToEdit=userinfo[idx];
    res.render("edit",{userinfo:[userinfoToEdit]});
});



export default router;