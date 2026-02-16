// import express from'express'
// import fs from 'fs';
// import {showGallery} from '../controller/galleryController.js';


// const router=express();
// router.get('/index',pagination,showGallery);


// export default router














import express from 'express'
import {allUser,createUser,deleteUser} from '../controller/userController.js'

const router=express.Router()

router.get('/user',allUser);
router.post('/user',createUser);
router.delete('/user/:id',deleteUser);

export default router;


// frontend(react)
//    |
// route
//    |
// controller --> view  (res.json to hum controller pe likhte hai vhi view hai )
//    | |
//  model



