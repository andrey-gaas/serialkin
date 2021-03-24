import mongoose from 'mongoose';

const SerialSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  seasons: {
    type: Number,
    required: true,
  },
  yearFrom: {
    type: Number,
    required: true,
  },
  yearTo: {
    type: Number,
  },
  status: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ketwords: {
    type: String,
    required: true,
  }
});

export default mongoose.models.Serial || mongoose.model('Serial', SerialSchema);
