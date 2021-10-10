module.exports = {
    components: {
        schemas: {
            Order: {
                type: "object",
                properties: {
                    name: {
                        type: "string"
                    },
                    order: {
                        type: "string",
                        enum: ['DESC', 'ASC']
                    },
                }
            },
            Id: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
                    },
                }
            },
            ErrorResponse: {
                type: "object",
                properties: {
                    statusCode: {
                        type: "string"
                    },
                    status: {
                        type: "number"
                    },
                    message: {
                        type: "string"
                    }
                }
            },
            SuccessResponse: {
                type: "object",
                properties: {
                    statusCode: {
                        type: "string"
                    },
                    data: {
                        type: "number"
                    },
                    message: {
                        type: "string"
                    }
                }
            },
            User: {
                type: "object",
                properties: {
                    username: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    }
                }
            },
            UserLogin: {
                type: "object",
                properties: {
                    username: {
                        type: "string"
                    },
                    accessToken: {
                        type: "string"
                    }
                }
            },
            Customer: {
                type: "object",
                properties: {
                    id: {
                        type: "number"
                    },
                    firstName: {
                        type: "string"
                    },
                    lastName: {
                        type: "string"
                    },
                    phoneNumber: {
                        type: "string"
                    }
                }
            }
        }
    }
}