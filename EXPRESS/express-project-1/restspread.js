// rest spread operator

const emp={id:1,
    name:"Charlie",
    salary:50000,
    age:35,
    address:"Delhi",
    department:"SDE"
}

// copy the emp object into other conject
const empCopy={...emp};

console.log(empCopy);



// copy name,id,slalary
const {id,name,salary,...otherinfo}=emp;
console.log(otherinfo);

// change some of the values and then put it again inside the emp on=bject
const changeAddress={...emp,address:"Mumbai"}
console.log(changeAddress);


