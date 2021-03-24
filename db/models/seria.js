import mongoose from 'mongoose';

const SeriaSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  serial: {
    type: String,
    required: true,
  },
  serialLink: {
    type: String,
    required: true,
  },
  season: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Seria || mongoose.model('Seria', SeriaSchema);
