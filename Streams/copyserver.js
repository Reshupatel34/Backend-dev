const fs=require('fs');


const readStream = fs.createReadStream('./log.txt')


const writeStream=fs.createWriteStream('./output.txt')


readStream.on("data",(chunk)=>{
   let data=chunk.toString();

   writeStream.write(data);

})

readStream.on("end",()=>{
    writeStream.end();
})



// using pipleline

// ReadStream.pipleline(writeStream);




