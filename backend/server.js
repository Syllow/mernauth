import dotenv from 'dotenv';
import express from 'express';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 8000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send('Hello world!'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// https://www.youtube.com/watch?v=R4AhvYORZRY&t=2240s
