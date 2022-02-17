const express = require('express');
const cors = require('cors');
const router = require('../routes');
const error = require('../middlewares/error');

const app = express();
app.use(express.json());

app.use(cors());
app.use(router);
app.use(error);

module.exports = app;