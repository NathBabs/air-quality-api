require('dotenv').config()
const app = require('./app')
const { connectDB } = require('./db/connection')
const { fetchParisAirQuality } = require('./tasks/airquality.cron')
const port = process.env.PORT || 3000

connectDB()
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
    fetchParisAirQuality.start()
})
