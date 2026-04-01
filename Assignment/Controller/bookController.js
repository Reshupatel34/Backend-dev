let books=[];

let newId=1;


export const getAllBooks=(req,res)=>{
    try{
        const {author,year,title,page,limit}=req.query;
        let filtered=books;
        if(title){
          filtered=  filtered.filter(s=>s.title.toLowerCase()===title.toLowerCase());
        }
        if(author){
            filtered=filtered.filter(s=>s.author.toLowerCase()===author.toLowerCase());
        }
        if(year){
            filtered=filtered.filter(s=>s.year===year);
        }
        

        const pagination=parseInt(page) || 1;
        const limitNum=parseInt(limit) || filtered.length;

        const start=(pagination-1)*limit;
        const end=start+limit;

        const paginatedData=filtered.splice(start,end);

        res.json({
            total:filtered.length,
            page:pagination,
            limit:limitNum,
            data:paginatedData
        });



    }catch(error){
        res.status(400).send(error.message);
    }
}


export const createBook=(req,res)=>{
    try{
    const {author,year,title}=req.body;
    const newBook={id:nextId++,author:author,year:year,title:title};
    books.push(newBook);
    res.json({newBook});
    }catch(error){
        res.send({error:message});
    }
}


