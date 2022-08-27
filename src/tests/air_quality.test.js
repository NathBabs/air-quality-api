const { describe, beforeEach, afterEach, it } = require('mocha')
const nock = require('nock')
const sinon = require('sinon')
const chai = require('chai')
const supertest = require('supertest')
const app = require('../app')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const AirQuality = require('../models/Quality')
const { fakeData, fakeAggregateData } = require('./air_quality.data')

const request = supertest(app)

chai.should()

describe('Air Quality API', () => {
    let maxPollutedPeriod
    beforeEach(() => {
        const fakeApiKey = 'fakeApiKey'

        process.env = {
            IQ_API_KEY: fakeApiKey,
        }

        // stub aggregate method on AirQuality model
        maxPollutedPeriod = sinon.stub(AirQuality, 'aggregate')
        maxPollutedPeriod.returns(fakeAggregateData)
    })

    afterEach(() => {
        // restore the stubbed methods
        maxPollutedPeriod.restore()
    })

    it('should fetch the air quality for an area', async () => {
        const latitude = 601838
        const longitude = 3.351486
        const apiKey = 'fakeApiKey'

        nock('http://api.airvisual.com/v2')
            .get('/nearest_city')
            .query({
                lat: latitude,
                lon: longitude,
                key: apiKey,
            })
            .reply(200, fakeData)

        const response = await request.get('/api/air_quality').query({
            latitude: latitude,
            longitude: longitude,
        })

        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('Result')
        expect(response.body.Result).to.have.property('Pollution')
    })

    it('should fetch the most polluted period for Paris', async () => {
        const response = await request.get(
            '/api/air_quality/paris/most_polluted'
        )

        expect(response.status).to.be.equal(200)
        expect(response.body).to.have.property('data')
        expect(response.body.data).to.have.property('message')
        expect(response.body.data).to.have.property('time')
    })
})
