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
    
}