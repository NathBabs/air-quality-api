const express = require('express')
const router = express.Router()
const {
    fetchAirQuality,
    fetchMostPollutedPeriod,
} = require('../controller/airquality.controller')

router.route('/api/air_quality').get(fetchAirQuality)

router
    .route('/api/air_quality/paris/most_polluted')
    .get(fetchMostPollutedPeriod)

module.exports = router
