const WomensHealth = require('../models/WomensHealth');

exports.getWomensHealthData = async (req, res) => {
  const data = await WomensHealth.findOne({ userId: req.user.id });
  res.json(data);
};

exports.updateWomensHealthData = async (req, res) => {
  const data = await WomensHealth.findOneAndUpdate({ userId: req.user.id }, req.body, { new: true });
  res.json(data);
};