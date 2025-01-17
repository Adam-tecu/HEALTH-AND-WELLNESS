const mongoose = require('mongoose');

const WomensHealthSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  menstrualCycle: {
    startDate: Date,
    endDate: Date,
    cycleLength: Number,
    symptoms: [String],
  },
  pregnancyTracking: {
    dueDate: Date,
    trimester: Number,
    babySize: String,
    symptoms: [String],
  },
  generalHealth: {
    insights: [String],
  },
});

module.exports = mongoose.model('WomensHealth', WomensHealthSchema);