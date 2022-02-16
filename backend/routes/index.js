const express = require('express');
const createOne = require('../controllers/createOne');
const findAll = require('../controllers/findAll');
const searchOne = require('../controllers/searchOne');
const update = require('../controllers/update');
const remove = require('../controllers/remove');

const router = express.Router();

router.post('/task', createOne);
router.get('/task', findAll);
router.get('/task/:id', searchOne);
router.put('/task', update);
router.delete('/task/:id', remove);

module.exports = router; 