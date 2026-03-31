let authors=[]

let nextAuthId=1;

// get all the authors


export const getAllAuthors=(req,res)=>{
    res.json(authors);
}

// get authors by id
export const getAuthorById=(req,res)=>{
    const id=parseInt(req.params.id);
    const author=authors.find(s=>s.id===id);
    if(author===-1){
        return res.status(400).json({message:"Author does not exist"});

    }
    res.status(200).json({
        message:"Author found",
        author
    });
}

// create Author
export const createAuthor=(req,res)=>{
    const {name,age,email,books}=req.body;
    const newAuthor={id:nextAuthId++,name,age,email,books};
    authors.push(newAuthor);
    res.status(200).json({
        message:"Author created",
        newAuthor
    });

}


// update Author
export const updateAuthor=(req,res)=>{
    const id=parseInt(req.params.id);
    const index=authors.findIndex(s=>s.id===id);
    if(index===-1){
     return res.json(400).json({error:"Author Does Not Exist"});
    }
    const {name,age,email,books}=req.body;
    // validate
    if(!name || !age || !email || !books){
        return res.status(400).json({message:"name , age ,email ,books , all are required"});
    }
     authors[index]={name,age,email,books};
     res.json(authors[index]);

}


// delete author
export const deleteAuthor=(req,res)=>{
    const id=parseInt(req.params.id);
    const idx=authors.finfIndex(s=>s.id===id);
    if(idx===-1){
        return res.status(400).json({message:"Author not found"});
    }
    const deletedAuthor=authors.splice(idx,1);
    res.status(200).json({message:"User Deleted",deletedAuthor});
}