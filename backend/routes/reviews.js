import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// Get all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get average rating
router.get('/average-rating', async (req, res) => {
  try {
    const result = await Review.aggregate([
      {
        $group: {
          _id: null,
          averageRating: { $avg: '$rating' },
          count: { $sum: 1 }
        }
      }
    ]);

    if (result.length > 0) {
      res.json({
        averageRating: parseFloat(result[0].averageRating.toFixed(1)),
        count: result[0].count
      });
    } else {
      res.json({ averageRating: 0, count: 0 });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new review
router.post('/', async (req, res) => {
  const review = new Review({
    userName: req.body.userName,
    rating: req.body.rating,
    text: req.body.text
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
