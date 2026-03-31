import mongoose from 'mongoose';

const productSchema=mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId,ref:'User',required:true},
    name:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true,min:[1,"Price must be greater than 1"]},
    stock:{type:Number,required:true},
     specs:{type:Object},
      tags:[{type:String,required:true}],

});

const product=mongoose.model("products",productSchema);
export default product;