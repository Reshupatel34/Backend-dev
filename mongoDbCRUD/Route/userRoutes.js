

import express from 'express';
import {getAllUsers,getUser} from "../Controller/userController.js";

const router=express.Router();
router.get('/user',getAllUsers);
router.get('/specificUser/:id',getUser);

export default router;
