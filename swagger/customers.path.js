exports.customers = {
    "/api/customers": {
        post: {
            summary: "create customer",
            description: "create customer",
            tags: ["Customers"],
            requestBody:{
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#/components/schemas/Customer'
                        }
                    }
                }
            },
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema:{
                                $ref: '#/components/schemas/UserLogin'
                            }
                        }
                    }
                }
            }
        },
        get: {
            summery: "search customers",
            tags: ["Customers"],
            style: 'deepObject',
            parameters: [
                {
                    name: "pageSize",
                    type: "integer",
                    in: 'query',
                    required: true
                },
                {
                    name: "pageIndex",
                    type: "integer",
                    in: 'query',
                    required: true
                }
            ],
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema:{
                                $ref: '#/components/schemas/SuccessResponse'
                            }
                        }
                    }
                }
            }
        }
    },
    "/api/customers/{id}": {
        delete: {
            summary: "delete customer",
            description: "delete",
            tags: ["Customers"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true, // mandatory
                    description: "Deleting a done todo",

                }

            ],
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: '#/components/schemas/Customer'
                            }
                        }
                    }
                },
            }
        },
        get: {
            summary: "get info customer",
            description: "get detail",
            tags: ["Customers"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true, // mandatory
                    description: "id of customer",

                }

            ],
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: '#/components/schemas/Customer'
                            }
                        }
                    }
                },
            }
        },
        put:{
            summary: "update customer",
            description: "update customer",
            tags: ["Customers"],
            parameters: [
                {
                    name: "id",
                    in: "path",
                    required: true, // mandatory
                    description: "id customer",

                }

            ],
            requestBody: {
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#/components/schemas/Customer'
                        }
                    }
                }
            },
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: '#/components/schemas/Customer'
                            }
                        }
                    }
                },
            }
        }
    },
}