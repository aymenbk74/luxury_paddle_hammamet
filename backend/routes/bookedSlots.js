import express from 'express';
import BookedSlot from '../models/BookedSlot.js';

const router = express.Router();

// Get booked slots for a specific date
router.get('/:date', async (req, res) => {
  try {
    const slots = await BookedSlot.find({ date: req.params.date });
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Toggle a time slot (booked/available)
router.post('/:date/:time', async (req, res) => {
  try {
    let slot = await BookedSlot.findOne({ 
      date: req.params.date, 
      time: req.params.time 
    });

    if (!slot) {
      // Create new slot as booked
      slot = new BookedSlot({
        date: req.params.date,
        time: req.params.time,
        isBooked: true
      });
    } else {
      // Toggle existing slot
      slot.isBooked = !slot.isBooked;
    }

    const updatedSlot = await slot.save();
    res.json(updatedSlot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all booked time slots (for display in admin)
router.get('/', async (req, res) => {
  try {
    const slots = await BookedSlot.find();
    res.json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
