import express from 'express'
import { isAuthorized } from '../middlewares/auth.js'
import { createBlog,myBlog,updateBlog,deleteBlog } from '../controller/blog.js'

const router=express.Router()

router.post('/new',isAuthorized,createBlog)
router.get('/myblogs',isAuthorized,myBlog)
router.put('/:id',isAuthorized,updateBlog)
router.delete('/:id',isAuthorized,deleteBlog)



export default router