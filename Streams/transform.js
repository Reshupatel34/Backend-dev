// transform karna hai text ko upper lower me 


const fs=require('fs')


// used for text modification

const {Transform}=require("stream")



const upper= new Transform({
    transform(chunk, encoding, callback){
        const modifiedData=chunk.toString().toUpperCase()
        callback(null,modifiedData)
    }
})

const readStream=fs.createReadStream('./info.txt')

const writeStream=fs.createWriteStream('./info_output.txt')


// pipelining

readStream.pipe(upper).pipe(writeStream)

