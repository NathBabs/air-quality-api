const express = require('express')
const router = express.Router()
const { fetchAirQuality } = require('../controller/airquality.controller')

router.route('/api/air_quality').get(fetchAirQuality)

module.exports = router
