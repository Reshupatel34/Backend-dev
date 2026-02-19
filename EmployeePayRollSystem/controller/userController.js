
import {employeeData} from '../model/data.js';


// all users

export let showUser = (req,res) =>{
        res.json({
            message:"All Users",
            employeeData
        });
}


// create user

export let createUser = (req,res)=>{
    // destructuring
    const {name,gender,department,email,basicSalary,startDate}=req.body;
    let newUser={id:employeeData.length+1,name:name,gender:gender,email:email,department:department,basicSalary:basicSalary,startDate:startDate}
    employeeData.push(newUser);

    // res.json({
    //     message:"New User Created",
    //     newUser
    // });
    res.redirect('/');
}

export let addPage=(req,res)=>{
    res.render('add.ejs');
}



// delete user
export let deleteUser=(req,res)=>{
    const id=parseInt(req.params.id);
    const idx=employeeData.findIndex(s=>s.id===id);

    if(idx===-1){
      return  res.json({
            message:"User Not found"
        });
    }

    employeeData.splice(idx,1);
    // res.json({
    //     message:"User Deleted"
    // });
    res.render('index.ejs',{employeeData});

}

// update User
export let updateUser=(req,res)=>{
    const id=parseInt(req.params.id);

    const user=employeeData.find(s=>s.id===id);
    if(!user){
      return  res.json({
            message:"User Does not exist"
        });
    }
    user.name=req.body.name || user.name;
     user.gender=req.body.gender || user.gender;
     user.department=req.body.department || user.department;
    user.email=req.body.email || user.email;
    user.basicSalary=req.body.basicSalary || user.basicSalary;
    user.startDate=req.body.startDate || user.startDate;

    // res.json({
    //     message:"User updated",
    //     user
    // });
    res.redirect('/');

}


// get salary count\

export let salaryCount=(req,res)=>{
    const id=parseInt(req.params.id);
    const user=employeeData.find(s=>s.id===id);
     if(!user){
      return  res.json({
            message:"User Does not exist"
        });
    }
    console.log(employeeData)
    let basicSalary = employeeData[0].basicSalary;
    console.log(basicSalary)
    let salary=(basicSalary + (basicSalary*0.2)+(basicSalary*0.1)-(basicSalary*0.05));
    console.log(salary);
    res.json({
        message:"User Total Salary",
        salary
    });

}

// edit page user controller

export let editPage=(req,res)=>{
    const id=req.params.id;
    const employee=employeeData.find(s=>s.id==id);
    if(!employee){
        res.json({
            message:"Employee not found"
        });
    }

    // if emp found then just render to the edit.ejs page with all the information of the curr employee
    res.render('edit.ejs',{employee});
    
}