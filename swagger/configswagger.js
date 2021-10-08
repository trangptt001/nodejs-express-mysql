require('dotenv').config();
module.exports = {
    openapi: "3.0.1",
    info: {
        title: "Document API NODEJS EXPRESS MYSQL",
        verison: "1.0.0",
        description: "A simple Express library API"
    },
    servers: [
        {
            url: `http://${process.env.HOST}:${process.env.PORT}`
        }
    ],
    tags: require("./tags").tags,
    components: require("./components").components,
    paths: require("./paths").paths
};