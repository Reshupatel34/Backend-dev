import connectDb from "./Db.js";
import user from './Model/userSchema.js';
import product from './Model/productSchema.js';


connectDb();

// const createUser = async(name,email,password,role)=>{
//     try{
//       const newUser  = await user.create({
//         name,
//         email,
//         password,
//         role
//     }
// );
//     console.log(newUser)
//     }catch(error){
//  console.log(error);
//     }
   
// }

// const readUser=async()=>{
//       const result=await user.find();
//       console.log("all the users",result);
// }

// const updateUser=async()=>{
//     try{
//      const result=    user.updateOne({name:"reshu"},{$set:{name:"riya"}});
//      console.log(result);
//     //  user.findByIdAndUpdate("69bb7563b25640ca6e510d73",{name:"Riya"})
//     }catch(error){
//        console.log(error)
//     }

// }
// const deleteUser=async(id)=>{
//     try{
        
//     const result=await user.findByIdAndDelete(id);
//     console.log(`User Deleted ${result}`);

//     }catch(error){
//      console.log(error);
//     }
// }
// createUser("reshu","abc@gmail","12323r21","user");

// readUser();
// deleteUser('69bb7563b25640ca6e510d73');




const finAllProducts=async()=>{
    try{
        const result=await product.find().populate("userId");
        console.log(result);
    }catch(error){
        console.log(error);
    }
}


// const findProductById=async(id)=>{
//     try{ 
//         const result=await product.findById(id);
//         console.log(result)
//     }catch(error){
//      console.log(error)
//     }
// }


// finAllProducts();
// findProductById('');

// const createProduct=async()=>{
//     try{
//         const productInfo=await product.create({
//             userId:"69bb755f1a6feeb3e7895071",
//             name:"Bottle",
//             category:"Vessel",
//             price:25,
//             stock:35,
//             specs:{size:32},
//             tags:["Vessels"],
//         });
//         console.log(productInfo)
//     }catch(error){
//         console.log(error);
//     }
// }
// createProduct();



// 1. the simple count

const productCount=async()=>{
    try{
       const result=await product.aggregate([
        {$match:{category:"Accessories"}},
        {$count:"total_count"}
       ]);
       console.log(result);
    }catch(error){
         console.log(error);
    }
}
productCount();

// 2.the high-value filter
// list only names and prices od products that cost more than 1000 dollars

const highValue=async()=>{
    const result=await product.aggregate([
        {$match:{price:{$gte:100}}},
        {$sort:{price:-1}},
        {$limit:5},
        {$project:{_id:0,name:1,price:1}}

    ]);
    console.log(result);
}
highValue();


// 3.Category List
// get a list of all unique categories in the database
// Hint:use $group and set_id to the category

const allCategory=async()=>{
    const result=await product.aggregate([
        {$group:{_id:"$category"}}
    ]);
    console.log(result);
}
allCategory();