const express = require('express');
const { browse } = require('../controllers/rooms.controller');

const router = express.Router();

router.get('/', browse);

module.exports = router;
