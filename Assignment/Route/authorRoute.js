import express from 'express';
import { createAuthor, deleteAuthor, getAllAuthors, getAuthorById, updateAuthor } from '../Controller/authorController.js';

const router=express.Router();

router.get('/getallauthor',getAllAuthors);

router.get('/getauthor/:id',getAuthorById);

router.post('/createauthor',createAuthor);

router.put('/updateauthor',updateAuthor);

router.delete('/deleteauthor',deleteAuthor);

export default router;