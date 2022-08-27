exports.fakeData = {
    status: 'success',
    data: {
        city: 'Paris',
        state: 'Ile-de-France',
        country: 'France',
        location: {
            type: 'Point',
            coordinates: [2.351666, 48.859425],
        },
        current: {
            pollution: {
                ts: '2022-08-26T16:00:00.000Z',
                aqius: 38,
                mainus: 'p2',
                aqicn: 26,
                maincn: 'o3',
            },
            weather: {
                ts: '2022-08-26T17:00:00.000Z',
                tp: 25,
                pr: 1015,
                hu: 49,
                ws: 3.6,
                wd: 310,
                ic: '01d',
            },
        },
    },
}

exports.fakeAggregateData = [
    {
        _id: null,
        max: 57,
        doc: {
            _id: '6309054992e3bb17065e7202',
            ts: '2022-08-26T15:00:00.000Z',
            aqius: 57,
            aqicn: 22,
            __v: 0,
        },
    },
]
