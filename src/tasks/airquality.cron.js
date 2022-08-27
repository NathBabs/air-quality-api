const cron = require('node-cron')
const { default: axios } = require('axios')
const AirQuality = require('../models/Quality')
const { logger } = require('../utils/logger')
const EVERY_MINUTE = '* * * * * '

async function getAirQuality(now) {
    const parisLat = 48.856613
    const parisLong = 2.352222

    const apiKey = process.env.IQ_API_KEY

    const url = `http://api.airvisual.com/v2/nearest_city?lat=${parisLat}&lon=${parisLong}&key=${apiKey}`

    // make a request to the IQ API
    const { data } = await axios.get(url)

    // get pollution results from respose
    const { current } = data.data
    const { pollution } = current

    const { ts, aqius, mainus, aqicn, maincn } = pollution

    AirQuality.create({
        ts: ts,
        aqius: aqius,
        mainus: mainus,
        aqicn: aqicn,
        maincn: maincn,
    })

    logger.info(
        `::: Pollution stats for Paris at ${now} are [${ts}, ${aqius}, ${aqicn}, ${mainus}, ${maincn}] :::`
    )
}

const fetchParisAirQuality = cron.schedule(EVERY_MINUTE, getAirQuality, {
    scheduled: false,
})

module.exports = {
    getAirQuality,
    fetchParisAirQuality,
    EVERY_MINUTE,
}
