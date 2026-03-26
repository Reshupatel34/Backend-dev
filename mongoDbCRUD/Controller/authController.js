import user from '../Model/userSchema.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export const signup=async(req,res)=>{

    try{
  const {name,email,password}=req.body;
     const salt=await bcrypt.genSalt(10);
      const hashedPaswword=await bcrypt.hash(password,salt);
      const newUser=await user.create({
        name,
        email,
        password:hashedPaswword
        
      });
   

     res.status(200).json({
        message:"User created",
        newUser
     });
    }catch(error){
        res.status(500).json({
            message:"User is not created",
        error:error.message
        });
    }
     
}