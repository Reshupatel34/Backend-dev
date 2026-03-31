

import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
  name:{type:String,required:true,maxlength:[25,"Maximum characters reached"]},
  email:{type:String,required:true},
  password:{type:String,required:true,minlength:[8,"must be atleat of 8 characters"]},
  role:{type:String,enum:["user","admin"],defualt:"user"}
});

const user=mongoose.model("User",userSchema);
export default user;