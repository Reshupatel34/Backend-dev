import express from 'express';
 


const app=express();
const port=3000;


// middleware: configure EJS view engine
app.set('view engine','ejs')


// converts url ka data into js object
app.use(express.urlencoded({extended:true}));
let todoitems=[
//    {
//     id:1,task:"Buy milk"
//    },
//    {
//     id:2,task:"Pay Bills"
//    }
];


app.get('/',(req,res)=>{
    res.render('todolist');
});


// get the list
app.get('/userTodo',(req,res)=>{
    res.render('todolist',{todoitems});
});


// post new items from forms
app.post('/api/todo',(req,res)=>{
    const {task}=req.body ||{};
    const newTask={
        id:todoitems.length+1,
        task:task
    }

    todoitems.push(newTask);

    res.redirect('/userTodo');
});


// delete a task by id
app.get('/api/todo/:id',(req,res)=>{
    const id = Number(req.params.id);
    const idx = todoitems.findIndex(s => s.id === id);
    if (idx === -1) {
        return res.send('Task not found');
    }

    todoitems.splice(idx, 1);
    res.redirect('/userTodo');
});

app.listen(port,()=>{
   console.log(`Server is Running on port ${port}`);
});
