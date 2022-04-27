import express from 'express';
import postsRoutes from './routes/post.routes.js';
import { connectDB } from './db.js';
import { PORT } from './config.js';

const app = express()
connectDB()
app.use(postsRoutes)

app.listen(PORT)
console.log('Server is running port', PORT);
