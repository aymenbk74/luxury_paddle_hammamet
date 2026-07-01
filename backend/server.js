import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import reviewRoutes from './routes/reviews.js';
import bookedSlotRoutes from './routes/bookedSlots.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/paddleboard';

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);

// Routes
app.use('/api/reviews', reviewRoutes);
app.use('/api/booked-slots', bookedSlotRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
