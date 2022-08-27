module.exports = {
    get: {
        tags: ['Air Quality API'],
        description: 'Get Air Quality of an area',
        operationId: 'getAirQuality',
        parameters: [
            {
                name: 'latitude',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/latitude',
                },
                required: true,
                description: 'latitude of the area',
            },
            {
                name: 'longitude',
                in: 'query',
                schema: {
                    $ref: '#/components/schemas/longitude',
                },
                required: true,
                description: 'longitude of the area',
            },
        ],
        responses: {
            200: {
                description: 'Air Quality is found',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Quality',
                        },
                    },
                },
            },
            500: {
                description:
                    'Could not get the Air Quality of the Supplied area',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error',
                            example: {
                                message: 'Something Went wrong',
                                success: false,
                            },
                        },
                    },
                },
            },
        },
    },
}
