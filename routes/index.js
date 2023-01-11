const express = require('express');
const reservationsRouter = require('./reservations.router');
const roomsRouter = require('./rooms.router');

const router = express.Router();

router.use('/reservations', reservationsRouter);
router.use('/rooms', roomsRouter);

module.exports = router;
