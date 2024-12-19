import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.js';
import blogRouter from './routes/blog.js';
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import cors from 'cors';

// Configure environment variables
config({ path: "./data/config.env" });

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_URL, // Allow the frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies to be sent across origins
}));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: 'MERN_Learning',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', userRouter);
app.use('/api/blogs', blogRouter);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Backend API!');
});

// Port Configuration
const port = process.env.PORT || 4000; // Use 4000 as the fallback port

// Start the Server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at port ${port}`);
});


