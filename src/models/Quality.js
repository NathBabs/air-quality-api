const mongoose = require('mongoose')

const airQualitySchema = new mongoose.Schema({
    ts: {
        type: Date,
    },
    aqius: {
        type: Number,
    },
    mainus: {
        ttype: String,
    },
    aqicn: {
        type: Number,
    },
    maincn: {
        String,
    },
})

const AirQuality = mongoose.model('AirQuality', airQualitySchema)

module.exports = AirQuality
