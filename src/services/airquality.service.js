const { default: axios } = require('axios')
const CustomError = require('../utils/CustomError')
const { logger } = require('../utils/logger')

exports.getAirQuality = async function ({ params }) {
    try {
        if (!params) {
            throw new CustomError(500, 'params is required')
        }
        // get latitude and longitude from params
        const latitude = params.latitude
        const longitude = params.longitude
        if (isNaN(latitude) && isNaN(longitude)) {
            throw new CustomError(
                400,
                'latitude and longitude must be a number'
            )
        }
        // get API key
        const apiKey = process.env.IQ_API_KEY

        const url = `http://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${apiKey}`

        // make a request to the IQ API
        const { data } = await axios.get(url)

        // get pollution results from respose
        const { current } = data.data
        const { pollution } = current

        const { ts, aqius, mainus, aqicn, maincn } = pollution

        return {
            Result: {
                Pollution: {
                    ts,
                    aqius,
                    mainus,
                    aqicn,
                    maincn,
                },
            },
        }
    } catch (error) {
        logger.error(`::: getting air quality failed with ${error}:::`)
        throw new CustomError(
            error.statusCode || 500,
            error.message || 'Something went wrong'
        )
    }
}
