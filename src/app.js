// require dotenv to load environment variables
require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const docs = require('./docs')
const routes = require('./routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(
        `Welcome 👋 To Air Quality Filter ${
            new Date().toISOString().split('T')[0]
        }`
    )
})

app.use(routes)

app.use((err, req, res, next) => {
    const { message = 'Something went wrong', statusCode = 500 } = err
    return res.status(statusCode).send({
        success: false,
        message: message,
    })
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docs))

module.exports = app
