const express = require("express");
const router = express.Router();

const bookingController = require('../controllers/booking');
const cabsController = require('../controllers/cabs');

router.use('/booking', bookingController);
router.use('/cabs', cabsController);

module.exports = router;