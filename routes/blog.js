import express from 'express'
import { isAuthorized } from '../middlewares/auth.js'
import { createBlog,myBlog,updateBlog,deleteBlog,getAllBlogs,getBlogById } from '../controller/blog.js'

const router=express.Router()

router.post('/new',isAuthorized,createBlog)
router.get('/myblogs',isAuthorized,myBlog)
router.put('/:id',isAuthorized,updateBlog)
router.delete('/:id',isAuthorized,deleteBlog)
router.get('/allblogs',getAllBlogs)
router.get('/blog/:id',isAuthorized,getBlogById)


export default router