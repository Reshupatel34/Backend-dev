import express from 'express';
import logFunc from './middleware.js';
import user from './data.js';

const app=express();

const port=3000;
app.use(express.json());

// global middleware
app.use(logFunc);

app.get('/user',(req,res)=>{
   res.send(user);
});

// post method
app.post('/user',(req,res)=>{
  console.log(req.body);
  const {name,password}=req.body;

  if(!name || !password){
    return res.status(404).json({
        message:"user name is empty"
    });

    
  }
  // validation
    if(password.length<8){
        return res.send("Password is too short");
    }

    // let newUser={id:user.length+1,name,password};
    // user.push(newUser);

    // using rest
    user.push({
        id:user.length+1,
        ...req.body
    });

    res.status(200).json({
        message:"user created"
    });


});

// update user
app.put('/user/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  let {name}=req.body;
  let userIdx=user.findIndex(s=>s.id===id);
  if(userIdx!==-1){
    res.status(404).json({
        message:"User not found"
    });

  }
  let updatedUser={...user[userIdx],name:name};
  user[userIdx]=updatedUser;
  res.status(200).json({
    message:"user updates successfully"
  });

});

// delete

app.delete('/user/:id',logfunc(),(req,res)=>{
 
 const id=parseInt(req.params.id);
  const userIdx=user.findIndex(s=>s.id===id);

  const userdeleted=user[userIdx];

  if(userIdx==-1){
    return res.status(400).json({
      message:"User Not Found"
    });
  }

  user.splice(userIdx,1);

  res.status(200).json({
    message:"user deleted",
    user:userdeleted
  });
});



app.listen(port,()=>{
    console.log("Server is running");
})
