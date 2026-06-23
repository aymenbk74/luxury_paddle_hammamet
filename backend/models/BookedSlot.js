import mongoose from 'mongoose';

const bookedSlotSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: true
  }
});

// Compound index to ensure unique date-time combinations
bookedSlotSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.model('BookedSlot', bookedSlotSchema);
