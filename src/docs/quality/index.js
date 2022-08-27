const getAirQuality = require('./get-air-quality')
const getMostPolluted = require('./get-most-polluted-time')

module.exports = {
    paths: {
        '/api/air_quality': {
            ...getAirQuality,
        },
        '/api/air_quality/paris/most_polluted': {
            ...getMostPolluted,
        },
    },
}
