const Symptom = require('../models/Symptom');

exports.getSymptoms = async (req, res) => {
  const symptoms = await Symptom.find({ userId: req.user.id });
  res.json(symptoms);
};

exports.addSymptom = async (req, res) => {
  const symptom = new Symptom({ ...req.body, userId: req.user.id });
  await symptom.save();
  res.json(symptom);
};