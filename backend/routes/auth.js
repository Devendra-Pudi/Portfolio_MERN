const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// User authentication routes can be added here if needed in the future
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
