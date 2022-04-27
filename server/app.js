import express from 'express';
import postsRoutes from './routes/post.routes.js';

const app = express()

//middlewares
app.use(express.json())

//routes
app.use(postsRoutes)

export default app