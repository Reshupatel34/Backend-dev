import express from 'express';
import {showUser,createUser,deleteUser,updateUser,salaryCount,editPage,addPage} from '../controller/userController.js';

const router=express.Router();

router.get('/user',showUser);
router.get('/user/add',addPage);
router.post('/user/addUser',createUser)

router.get('/user/edit/:id',editPage);
router.post('/user/update/:id',updateUser);

router.post('/user/delete/:id',deleteUser);


router.get('/user/:id/salaryCount',salaryCount);

export default router;

