import mongoose from 'mongoose';


const connectdb = async(req ,res)=>{
    await mongoose.connect(``);
}