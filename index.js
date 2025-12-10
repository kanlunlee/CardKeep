import express from 'express';
import logger from './middleware/logger.js';
import cardsRoutes from './routes/cards.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('MongoDB connection error:', err);
    };
}

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*'}));
app.use(logger);
app.use('/', cardsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
