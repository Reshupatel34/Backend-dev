
const http=require("http");
let user2={
    name:"reshu",
    email:"patelreshu284@gmail.com"
}

const server =http.createServer((req ,res)=>{
    //  http://172.16.156.26:3000/user?name=reshu&email=patelreshu284@gmail.com.com
   const baseUrl = "http://localhost:3000"
   const parsedURL = new URL(req.url,baseUrl);

   console.log(parsedUrl);
   res.end("server is running")
})

server.listen(3000,()=>{
    console.log("server is running")
})




// let arr=["apple","mango","jnr"]

// const f1=arr[0]
// const f2=arr[1]
// const f3=arr[2]

// const {f1,f2,f3}=arr;

