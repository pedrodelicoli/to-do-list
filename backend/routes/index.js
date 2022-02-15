const express = require('express');
const createOne = require('../controllers/createOne');
const findAll = require('../controllers/findAll');

const router = express.Router();

router.post('/task', createOne);
router.get('/task', findAll);

module.exports = router; 