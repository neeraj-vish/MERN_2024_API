import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import blogRouter from './routes/blog.js'
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin:[process.env.FRONTEND_URL],
  method:["GET","POST","PUT","DELETE"],
  credential:true
}))
config({
  path:"./data/config.env"
})
mongoose
  .connect(process.env.MONGO_URL, { dbName: 'MERN_Learning' })
  .then(() => console.log('Mongodb connected.....'));

  // userRouter
app.use('/api/users',userRouter)

// BlogRouter
app.use('/api/blogs',blogRouter)








const port = process.env.PORT;
app.listen(port, () => console.log(`Server started at port ${port}`));
