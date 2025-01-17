const express = require('express');
const { getWomensHealthData, updateWomensHealthData } = require('../controllers/womensHealthController');
const router = express.Router();

router.get('/womens-health', getWomensHealthData);
router.put('/womens-health', updateWomensHealthData);

module.exports = router;