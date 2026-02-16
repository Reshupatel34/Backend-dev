const fs=require('fs')

const {Transform}=require('stream')



const upper= new Transform({
    transform(chunk, encoding, callback){
        const modifiedData=chunk.toString().toUpperCase()
        callback(null,modifiedData)
    }
})
const removeVowel= new Transform({
    transform(chunk,encoding,cb){
        let modifiedData=chunk.toString().replace(/[AEIOU]/g,"*")
        cb(null,modifiedData)
    }
})
const readStream=fs.createReadStream('vowelfile.txt')

const writeStream=fs.createWriteStream('vowelToAsteric.txt')




readStream.pipe(upper).pipe(removeVowel).pipe(writeStream)