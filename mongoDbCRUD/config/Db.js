

import mongoose from 'mongoose';

const connectDb=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/BackendDb");
        console.log("Connection Successfull");
    }catch(error){
        console.log("Some error Occured",error);
    }
}

export default connectDb;