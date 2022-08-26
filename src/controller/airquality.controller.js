const {
    getAirQuality,
    getMostPollutedPeriod,
} = require('../services/airquality.service')

exports.fetchAirQuality = async (req, res, next) => {
    const { latitude, longitude } = req.query
    const params = { latitude, longitude }
    getAirQuality({ params })
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            next(error)
        })
}

exports.fetchMostPollutedPeriod = async (req, res, next) => {
    getMostPollutedPeriod()
        .then((result) => {
            res.status(200).send(result)
        })
        .catch((error) => {
            next(error)
        })
}
