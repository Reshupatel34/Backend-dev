import express from 'express';
import { createBook, getAllBooks ,getBookById} from '../Controller/bookController.js';

const route=express.Router();

route.get('/getallbooks',getAllBooks);

route.post('/createbook',createBook);

route.get('/getbookbyid/:id',getBookById);

export default route;