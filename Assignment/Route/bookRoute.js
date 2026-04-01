import express from 'express';
import { createBook, getAllBooks } from '../Controller/bookController.js';

const route=express.Router();

route.get('/getallbooks',getAllBooks);

route.post('/createbook',createBook);
export default route;