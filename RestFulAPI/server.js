const express=require("express");
// import express from 'express'
const app=express();

// middleware
app.use(express.json());


// in-memory database(Array)

let movies=[
    {id:1,title:"The Great Gatsby",actor:"Leonardo Dicaprio"},
    {id:2,title:"Seven",actor:"Brad Pitt"},
    {id:3,title:"Mr & Mrs Smith",actor:"Angelina Jolie"}
];


let newId=4;

const port=3000;


app.get('/',(req,res)=>{
    console.log("home");
    res.send("Welcome");
});

// Create a new movie
app.post('/api/movie',(req,res)=>{
    // console.log(req.body);
   const {title,actor}=req.body;

//    validation
if(!title || !actor){
    return res.status(400).json({error:"Title , actor , both are required"});

}
   const newMovie={ id:newId++,title,actor};
   movies.push(newMovie);
   res.status(201).json(newMovie);
});

// get all the movies
app.get("/getAllMovies",(req,res)=>{
     res.json(movies); 
});


// get by ids
app.get('/api/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const movie=movies.find(s=>s.id===id);
  if(!movie){
    return res.send("Does not exist");
  }
  res.send(movie);
});


// updation

// 1.using put
app.put('/api/movies/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const movieIndex=movies.findIndex(s=>s.id===id);
    if(movieIndex===-1){
        return res.status(400).send("Does not exist");
    }
    const {title,actor}=req.body;

    // validation
    if(!title || !actor){
        return res.status(400).json({error:"title and actor both are required"});
    }

    // replace the entire movie object
    movies[movieIndex]={id,title,actor};

    res.json(movies[movieIndex]);

});

// 2. using patch
app.patch('/api/updatePatch/:id',(req,res)=>{
    const id=req.params.id;
    const index=movies.findIndex(s=>s.id==id);
    if(!index){
        return res.status(400).json({error:"Does not exist"});
    }
    const {title,actor}=req.body;

    // validation
    if(title!=undefined){
        movies[index].title=title;
    }
    if(actor!=undefined){
        movies[index].actor=actor;
    }
    res.send(movies[index]);
});


// Delete Operation
app.delete('/api/delete/:id',(req,res)=>{
  const id=parseInt(req.params.id);
  const index=movies.findIndex(s=>s.id===id);
  if(index===-1){
    return res.status(400).json("movie does not exist");
  }
  const deletedMovie=movies.splice(index,1);
  res.json({
    message:"Movie deleted",deletedMovie});
});



app.listen(port,()=>{
    console.log("Server is running on port",port);
});

