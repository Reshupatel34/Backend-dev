import express from 'express';
import session from 'express-session';

const app=express();


const port=3000;

// middle ware
app.use(express.json());


// middleware of session

app.use(
    session({
   secret:"mysecretkey",
   resave:false,
   saveUninitialized:false,
   cookie:{
    maxAge:1000*60*5 //1min
   },
    })
);

app.get('/',(req,res)=>{
    // console.log("Welcome to you server ");
    res.send("Welcome to your server");
})

// login

app.get('/login',(req,res)=>{
    let userInfo=[{name:"Miles Morales",profession:"Spider-Man"},
        {name:"Gwen Stacy",profession:"Spider-Woman"},
        {name:"Peter Parker",profession:"Spider-Man"},
        {name:"Harry Potter",profession:"Minister Of Magic"}
    ];

    req.session.user=userInfo;
    res.send(req.session.user);
});

app.get('/profile',(req,res)=>{
    console.log(req.session)
    if(!req.session.user){
       return  res.status(401).send("Unauthorised");
    }
    let names="";
    for(let u of req.session.user){
        names+=u.name+" ";
    }
    res.send(`Welcome users : ${names}`);
});

app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            return res.status(500).send("Could not log out");
        }
        res.send("USer logges out succefully");
    });
});


app.listen(port,()=>{
    console.log("Server is running on port : ",port);
});
