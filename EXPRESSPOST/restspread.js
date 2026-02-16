// rest spread operator

const emp ={
    id:1,
    name:"Charlie",
    salary:50000,
    age:35,
    address:"delhi",
    department:"HR"
}

// copy the emp object into other object



const empCopy={...emp}

console.log(empCopy)


// now retreive id and name , salary


// rest--> if we are receiving some data so it is rest
const {id,name,salary,...otherInfo}=emp;


console.log(otherInfo)


// change some values and put it inside another object

const changeAddress={...emp,address:"Banglore",age:67}

console.log(changeAddress);
