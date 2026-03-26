import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type:String ,require:true,maxLength:[25,"Name must be of 25 characters only"]},
    email:{ type:String,require:true,unique:true},
    password:{ type:String,require:true,minLength:[8,"Password must be of more than 8 characters"]},
    role:{ type:String,enum:["user","admin"],defualt:"user"}
});

const user=mongoose.model("User",userSchema);

export default user;



