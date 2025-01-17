const crypto = require('crypto');

const encryptData = (req, res, next) => {
  if (req.body.data) {
    const cipher = crypto.createCipher('aes-256-cbc', process.env.ENCRYPTION_KEY);
    let encrypted = cipher.update(req.body.data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    req.body.data = encrypted;
  }
  next();
};

module.exports = encryptData;