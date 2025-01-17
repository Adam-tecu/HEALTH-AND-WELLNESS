const mongoose = require('mongoose');

const SymptomSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  symptom: String,
  severity: Number,
  notes: String,
});

module.exports = mongoose.model('Symptom', SymptomSchema);