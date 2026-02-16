import express from "express";
import logfunc from './middleware.js';
import {user} from './data.js';



const app = express();

app.use(express.json());


// global middleware

app.use(logfunc)





app.get("/user", (req, res) => {
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);

  const { name, password } = req.body;

  // password validtion

  if (!name || !password) {
    return res.status(404).json({
      message: "user name is empty",
    });
  }

  // some validations
  if (name.length < 6) {
    return res.send("username too short , minimum 6 length");
  }

//   let newUser = { id: user.length + 1, name, password };

//   user.push(newUser);


// using rest
  user.push({
    id:user.length+1,
   ...req.body
  })

  res.status(200).json({
    message: "user created",
  });
});


// const userValidation=(req,res,next)=>{
//   const {name,password} = 
// }

// Update

app.put('/user/:id',(req,res)=>{
    const id=parseInt(req.params.id);
     let {name}=req.body;
    let userIdx=user.findIndex(s=>s.id===id);
  
    if(userIdx==-1){
     res.status(404).json({
        message:"User not found"
     });

    }

    let updateUser={...user[userIdx],name:name};

    user[userIdx]=updateUser;
    res.status(200).json({
        message:"User Updated Successfully"
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


app.listen(3000, () => {
  console.log("Server is running");
});
