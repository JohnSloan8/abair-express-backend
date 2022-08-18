const express = require('express');

const synthesis = require('./synthesis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/synthesis', synthesis);

module.exports = router;
