import fs from 'fs';

 const logFunc=(req,res,next)=>{
    let log=`timestamp ${new Date().toString()} url ${req.url} and method ${req.method}`;
    fs.appendFileSync('./log.txt',log);
    // console.log(log);
    next();
};

export default logFunc;