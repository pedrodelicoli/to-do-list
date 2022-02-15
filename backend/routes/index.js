const express = require('express');

const router = express.Router();

router.post('/task', insertOne);

module.exports = router; 