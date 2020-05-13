const express = require('express');
const router = express.Router();

const { cabs } = require('../db/cabs');
const { distanceCalculator } = require('../helpers/distance_calculator');

const { ApiError, codes } = require('../helpers/error_handler');

router.get('/', async (req, res) => {
  try {
    const { lat, long } = req.query;
    if (!lat || !long) throw ApiError(codes.InvalidParameters, 'Missing either lat, long');
    const calculatedCabsDistance = [];

    cabs.forEach((cab, i) => {
      const distance = distanceCalculator(lat, long, cab.lat, cab.long);
      calculatedCabsDistance.push({
        distance,
        cabDetails: {
          id: cabs[i].id,
          lat: cabs[i].lat,
          long: cabs[i].long,
          driverName: cabs[i].driverName
        }
      })
    })

    const findNearestCab = calculatedCabsDistance.reduce((prevDistanceValue, currentDistanceValue) => 
      prevDistanceValue.distance < currentDistanceValue.distance ? prevDistanceValue : currentDistanceValue
    )

    return res.status(200).json({
      cab: findNearestCab.cabDetails
    })
  } catch (err) {
    res.status(500).json({
      err: err.message
    })
  }
})

module.exports = router;