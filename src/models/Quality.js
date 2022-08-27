const mongoose = require('mongoose')

const airQualitySchema = new mongoose.Schema({
    ts: {
        type: Date,
    },
    aqius: {
        type: Number,
    },
    mainus: {
        type: String,
    },
    aqicn: {
        type: Number,
    },
    maincn: {
        type: String,
    },
})

// set an index on aqius and aqicn, for better performance when finding
airQualitySchema.index({ aqius: 1 })
airQualitySchema.index({ aqicn: 1 })

const AirQuality = mongoose.model('AirQuality', airQualitySchema)

module.exports = AirQuality
