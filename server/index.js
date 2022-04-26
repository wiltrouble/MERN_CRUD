import express from 'express';
import postsRoutes from './routes/post.routes.js';

const app = express()
app.use(postsRoutes)

app.listen(3000)
console.log('Server is running port', 3000);
