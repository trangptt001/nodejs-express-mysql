var routes = require("express").Router();
const auth = require("../controllers/auth.controller");

routes.post("/login", auth.login);
routes.post("/signup", auth.signup);
module.exports = routes