
const customers = require("../controllers/Customer.controller");
const schemas = require("../utils/schemas")
const validateModel = require('../middlewares/validate.middlware')
var routes = require("express").Router();
    routes.post("/", validateModel(schemas.customerPOST), customers.create);
    routes.get("/:id", customers.findOne);
    routes.put("/:id", customers.update);
    routes.delete("/:id", customers.delete);
module.exports = routes
