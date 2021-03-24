import mongoose from 'mongoose';

const SeasonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  serial: {
    type: String,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  episodes: {
    type: Number,
    required: true,
  },
  serialLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Season || mongoose.model('Season', SeasonSchema);
