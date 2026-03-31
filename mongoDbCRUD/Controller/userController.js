

import user from '../Model/userSchema.js';

export const getAllUsers=async(req,res)=>{
  try{
    const users=await user.find();
    res.status(200).json({
      success:true,
      users
    })
  }catch(error){
    console.log("Error in get all users",error);
  }
}


// get a specific user
export const getUser=async(req,res)=>{
     try{
        const id = req.params.id;  

        const userData = await user.findById(id);

        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(userData);
     }catch(error){
        console.log("Error in getting a single user",error);
     }
}