
const customers = require('../controllers/Customer.controller');
const validateModel = require('../middlewares/validate.middlware');
const schemas = require('../utils/schemas');
const { get } = require('./authen.route');
var routes = require("express").Router();
    routes.post("/", customers.create)
    .get("/", customers.getAllPaging)
    .get("/:id", customers.findOne)
    .put("/:id", customers.update)
    .delete("/:id", customers.delete)
module.exports = routes
