import mongoose from "mongoose";


const connectDb=async()=>{
    try{
       await  mongoose.connect("mongodb://127.0.0.1:27017/BackendDb");
       console.log("Connection Successful");
    }catch(error){
        console.log("Connection failed",error);
    }
   
}

export default connectDb;