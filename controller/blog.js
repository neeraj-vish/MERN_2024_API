import {blog} from '../models/blog.js'

export const createBlog=async(req,res)=>{
    const {title,description,imgUrl}=req.body

    await blog.create({
        title,
        description,
        imgUrl,
        user:req.user
    })
    res.status(201).json({
        success:true,
        message:"Blog added Successfully!!!",
        })
}

export const myBlog=async(req,res)=>{
const userid=req.user._id
const blogs= await blog.find({user:userid})

res.status(201).json({
    success:true,
    blogs
    })
    }



 export const updateBlog=async(req,res)=>{
    const {title,description,imgUrl}=req.body
    const id=req.params.id
    const blogs= await blog.findById(id)
    if(!blogs) return res.status(404).json({
        success:false,
        message:"Invalid Detail"
    })

    blogs.title=title,
    blogs.description=description,
    blogs.imgUrl=imgUrl
    blogs.save()

res.status(200).json({
success:true,
message:"Blog is updating",
blogs
 })
}

export const deleteBlog=async(req,res)=>{
    const id=req.params.id
    const blogs= await blog.findById(id)
    if(!blogs) return res.status(404).json({
        success:false,
        message:"Invalid Detail"
    })
    await blogs.deleteOne()

    res.status(200).json({
        success:true,
        message:"Blog deleted",
        
         })
}