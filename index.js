require('dotenv').config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./swagger/configswagger");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8080;
const app = express();

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
})

  
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerConfig)
);

var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({extended: true}));


//#region register routes
const customersRoute = require('./src/routes/customer.route');
const authenRoute = require('./src/routes/authen.route');
app.get("/", (req, res) => {
    res.json({message: "Wellcome to nodejs"});
});
app.use("/api/auth", authenRoute);
app.use("/api/customers", customersRoute);
//#endregion

//#region create server listening
app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})
//#endregion