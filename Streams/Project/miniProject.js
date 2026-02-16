const fs=require('fs');
const http=require('http');

const {Transform}=require('stream');

const  logStream=fs.createWriteStream("access.log",{
    flags:"a"
});

const server=http.createServer((req ,res)=>{
    const baseUrl = "http://localhost:3000";

     const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
    logStream.write(log);
//     const parsedUrl = new URL(req.url,baseUrl);
//     console.log(parsedUrl);
//     res.end("server is running")
   if(req.method==='GET' && req.url==='/'){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("server is running");
   }
   else if(req.method==='POST' && req.url==='/uppercase'){
    
    const upper=new Transform({
    transform(chunk,encoding,cb){
        let modifiedData=chunk.toString().toUpperCase()
        cb(null,modifiedData)
    },
  });

    res.writeHead(200,{"Content-Type":"text/plain"});
    req.pipe(upper).pipe(res)


   }
   else if(req.method==='GET' && req.url==='/user'){
    let userDetails={
        name:"reshu",
        role:"Model"
    }
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end(JSON.stringify(userDetails));
   }

   //process --> change all the vowels to *
   else if(req.method==='POST' && req.url==='/process'){
    const replace=new Transform({
        transform(chunk,encoding,cb){
            let modifiedData=chunk.toString().replace(/[AEIOUaeiou]/g,"*");
            cb(null,modifiedData);
        }
    });
    res.writeHead(200,{"Content-Type":"text/plain"});
    req.pipe(replace).pipe(res)
   }
   else{
     res.writeHead(404,{"Content-type":"text/plain"})
    res.end("Route not found");
   }
    
       
});




server.listen(3000,()=>{
    console.log("server is running");
});
