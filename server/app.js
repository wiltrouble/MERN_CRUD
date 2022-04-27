import express from 'express';
import postsRoutes from './routes/post.routes.js';

const app = express()

app.use(postsRoutes)

export default app