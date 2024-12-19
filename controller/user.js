import bcrypt from 'bcrypt';


import {User} from '../models/user.js'
import {generateCookie} from '../utils/feature.js'



// Register

export const userRegister=async (req, res) => {
    const { name, email, password } = req.body;
  
    let user = await User.findOne({ email });
  
    if (user) {
      return res.status(400).json({
        success: false,
        message: 'User already exists',
      });
    }
  
    const hashpassword = await bcrypt.hash(password, 10);
  
    user = await User.create({
      name,
      email,
      password: hashpassword,
    });
  
   generateCookie(user,res,201,"User registered successfully")
  
  }

// login
export const userLogin=async (req, res) => {
    const {email, password } = req.body;
  
    let user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Such user not present',
      });
    }
  
    const isMatch= await bcrypt.compare(password,user.password)

    if(!isMatch) return res.status(400).json({
        success:false,
        message:'Invalid detail'
    })
  
    generateCookie(user,res,201,`Welcome ${user.name}`)
  
    
  }


  //logout
export const userLogout=(req, res) => {
    
    res.status(200).cookie("token"," ",{expires: new Date(Date.now())}).json({
        success: true,
        message: "LogOut Sucessful",
      });
  }


//GetMyProfile

export const getMyProfile=(req,res)=>{
  res.json({
    success:true,
    user:req.user
  })
}