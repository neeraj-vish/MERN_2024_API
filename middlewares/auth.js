import jwt from 'jsonwebtoken'
import {User} from '../models/user.js'
export const isAuthorized=async(req,res,next)=>{
    const {token}=req.cookies
    // console.log(token)
  
    if(!token) return res.status(404).json({
      success:'false',
      message:"Please Login....!"
    })
  
  const decode=jwt.verify(token,process.env.JWT_SECRET)
  req.user= await User.findById(decode._id)

  next();
  
  }
  