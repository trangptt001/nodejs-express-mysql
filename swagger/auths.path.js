exports.auths = {
    "/api/auth/login": {
        post:{
            summary: "login api",
            description: "login",
            tags: ["Auth"],
            requestBody:{
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#/components/schemas/User'
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
        }
    },
    "/api/auth/signup": {
        post: {
            summary: "signup api",
            description: "signup",
            tags: ["Auth"],
            requestBody:{
                content: {
                    "application/json": {
                        schema: {
                            $ref: '#/components/schemas/User'
                        }
                    }
                }
            },
            responses: {
                '200': {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: '#/components/schemas/UserLogin'
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