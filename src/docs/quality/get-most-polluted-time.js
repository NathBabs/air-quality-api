module.exports = {
    get: {
        tags: ['Air Quality API'],
        description: 'Get the time Paris is Most Polluted',
        operationId: 'getMostPollutedTime',
        responses: {
            200: {
                description: 'Most Polluted Time in Paris',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Period',
                        },
                    },
                },
            },
            500: {
                description: 'Could not get the Most Polluted Period of Paris',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: 'Something went wrong',
                                success: false,
                            },
                        },
                    },
                },
            },
        },
    },
}
