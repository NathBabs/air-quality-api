module.exports = {
    components: {
        schemas: {
            Quality: {
                type: 'object',
                properties: {
                    Result: {
                        type: 'object',
                        properties: {
                            Pollution: {
                                type: 'object',
                                properties: {
                                    ts: {
                                        type: 'string',
                                        description: 'Time Stamp',
                                        format: 'date-string',
                                    },
                                    aquis: {
                                        type: 'string',
                                        description: 'Air Quality US',
                                    },
                                    mainus: {
                                        type: 'string',
                                        description:
                                            'Main pollutant for US AQI',
                                    },
                                    aqicn: {
                                        type: 'string',
                                        description: 'Air quality Chinese AQI',
                                    },
                                    maincn: {
                                        type: 'string',
                                        description:
                                            'Main Pollutant for Chinese AQI',
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Error: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                    },
                    message: {
                        type: 'string',
                    },
                },
            },
            latitude: {
                type: 'number',
            },
            longitude: {
                type: 'number',
            },
            Period: {
                type: 'object',
                properties: {
                    data: {
                        type: 'object',
                        properties: {
                            message: {
                                type: 'string',
                            },
                            time: {
                                type: 'string',
                            },
                        },
                    },
                },
            },
        },
    },
}
