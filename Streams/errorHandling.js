// console.log("start")


// throw new error("Something is wrong")

// const {error}=require("console")



// const a=10;
// console.log(a/0)




// to handle error we will use try catch

// try{
//     throw new error("this is wrong")
// }catch{
//     console.log(error)
// }


// console.log("end")









const http=require('http')

const server=http.createServer((req ,res)=>{
    try{
      throw new Error("there is somth wrong")
    }catch(error){
        console.log(error.message)
    }
   
})

server.listen(3000,()=>{
    console.log("server is runinng")
})


