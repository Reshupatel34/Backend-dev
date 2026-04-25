import mongoose from 'mongoose';


const connectDb = async(req ,res)=>{
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/Authenticate`);
        console.log("Mongodb connected");
    }catch(err){
        console.log("Some error occured during connection of the database",err);
    }
}

export default connectDb;