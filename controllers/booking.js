const express = require('express');
const router = express.Router();

const { bookings } = require('../db/bookings');
const { bookingId } = require('../helpers/booking_id');

const { ApiError, codes } = require('../helpers/error_handler');


router.post('/', async (req, res) => {
  try {
    const { lat, long, passengerName } = req.body;
    if (!lat || !long || !passengerName) throw ApiError(codes.InvalidParameters, 'Missing either lat, long, or passengerName');

    const bookingDetails = {
      lat, 
      long, 
      bookingId: bookingId(),
      passengerName
    }

    bookings.push(bookingDetails)

    return res.status(200).json({
      booking: bookingDetails
    })
  } catch (err) {
    res.status(400).json({
      err: err.message
    })
  }
});

router.get('/', async (req, res) => {
  try {
    return res.status(200).json({
      bookings
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
})

module.exports = router;