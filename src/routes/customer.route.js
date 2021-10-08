
const customers = require("../controllers/Customer.controller");
var routes = require("express").Router();
    routes.post("/", customers.create);
    routes.get("/:id", customers.findOne);
    routes.put("/:id", customers.update);
    routes.delete("/:id", customers.delete);
module.exports = routes
