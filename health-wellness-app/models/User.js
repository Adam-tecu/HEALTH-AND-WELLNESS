const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  fitnessGoals: String,
  dietaryPreferences: String,
  // other fields...
});

module.exports = mongoose.model('User', UserSchema);