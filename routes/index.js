const express = require('express');
const { get } = require('../controllers/index');

const router = express.Router();

router.get('/', get);

module.exports = router;
