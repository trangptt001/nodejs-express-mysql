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
        }
    }
}