import express from 'express'
const router=express.Router();
import {userRegister,userLogin,userLogout,getMyProfile} from '../controller/user.js'
import {isAuthorized} from '../middlewares/auth.js'



// Home Router
router.get('/', (req, res) => {
    res.json({ success: 'true', message: 'You are in home route' });
  });


//   Register Router
  router.post('/register', userRegister);

//  Login  Router

router.post('/login',userLogin);

//  LogOut  Router
router.get('/logOut',userLogout);


//My Profile
router.get('/myprofile',isAuthorized,getMyProfile)


export default router