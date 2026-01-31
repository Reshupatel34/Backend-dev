const express=require('express');
const userDetails=require('./data.js');

const app=express();

const port=3000;


app.get('/user',(req,res)=>{
    res.send('User Route');
});

app.get('/user/:id/:lang/:tab',(req,res)=>{
    const id=parseInt(req.params.id);
    const lang=req.params.lang;
    const tab=req.params.tab;

    const user=userDetails.find(s=>s.id===id);

    if(!user){
        return res.status(404).send('Usr not found');
    }

    // for tab
    let message="";
    if(tab==='info'){
        message+='info tab';
    }
    else if(tab==='post'){
        message+='post tab'
    }else if(tab==='settings'){
        message+='settings tab'
    }

    // language
    if(lang==='hi'){
        message+='hindi';
    }
    else if(lang==='en'){
        message+='english';
    }
    res.json({
        user,
        tab,
        lang,
        message
    });

});

app.listen(port,()=>{
   console.log(`Server is running on port ${port}`);
});